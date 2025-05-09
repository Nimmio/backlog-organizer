import { fromUnixTime } from "date-fns";
import prisma from "../prisma";
import { getAuthentication } from "./auth";
import { queryBuilder, RequestUrls } from "./utils";
import { IGDBExternMeta, IGDBMeta, IGDBMetaType } from "@/types/igdb/meta";
import { PrismaClient } from "@prisma/client/scripts/default-index.js";

type IGDBMappingType = {
  [key: string]: string[];
};

const IGDBDeprecated: IGDBMappingType = {
  game: ["category", "collection", "follows", "status"],
  platform: ["category", "versions", "websites"],
};

interface getIGDBCachedOrExternParams {
  ids: number[];
  type: IGDBMetaType;
}

export const getIGDBCachedOrExtern = async (
  params: getIGDBCachedOrExternParams
): Promise<IGDBMeta[]> => {
  const { ids, type } = params;
  if (!ids || ids.length === 0) return [];
  const { cachedData, missing } = await getCached({ ids, type });
  let data: IGDBMeta[] = cachedData;
  if (missing.length) {
    const fetcheddata: IGDBMeta[] = await getFromExternal({
      ids: missing,
      type,
    });

    const cleanedData = removeDeprecatedFields({
      data: fetcheddata,
      deprecatedFields: IGDBDeprecated[type],
    });

    data = data.concat(cleanedData);
  }
  return data;
};

interface getCachedParams {
  ids: number[];
  type: IGDBMetaType;
}

const getCached = async (
  params: getCachedParams
): Promise<{ cachedData: IGDBMeta[]; missing: number[] }> => {
  const { ids, type } = params;
  // @ts-expect-error Cannot get generic prisma work without error

  const model: PrismaClient[typeof type] = prisma[type];

  const cachedData = await model.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  const missingIds: number[] = ids.filter(
    (id) =>
      !cachedData.some((cachedPlatform: IGDBMeta) => cachedPlatform.id === id)
  );
  return { cachedData, missing: missingIds };
};

interface getFromExternalParams {
  ids: number[];
  type: IGDBMetaType;
}

const getFromExternal = async (
  params: getFromExternalParams
): Promise<IGDBMeta[]> => {
  const { ids, type } = params;

  const { access_token } = await getAuthentication();
  const response = await queryBuilder({
    access_token: access_token || undefined,
    requestUrl: RequestUrls[type],
    fields: "*",
    where: `id =${getIdString(ids)}`,
  });

  return response.map((entry: IGDBExternMeta) => {
    let newEntry: IGDBMeta = {
      ...entry,
      created_at: entry.created_at as unknown as Date,
      updated_at: entry.updated_at as unknown as Date,
    };
    if (entry.hasOwnProperty("created_at")) {
      newEntry = {
        ...newEntry,
        created_at: fromUnixTime(entry.created_at as number),
      };
    }
    if (entry.hasOwnProperty("updated_at")) {
      newEntry = {
        ...newEntry,
        updated_at: fromUnixTime(entry.updated_at as number) as Date,
      };
    }
    return newEntry;
  });
};

const getIdString = (ids: number[]): string => {
  let string = "(";
  ids.forEach((id, index) => {
    string += id;
    if (index + 1 !== ids.length) string += ",";
  });
  string += ")";
  return string;
};

interface removeDeprecatedFieldsParams {
  data: IGDBMeta[];
  deprecatedFields: string[];
}

const removeDeprecatedFields = (
  params: removeDeprecatedFieldsParams
): IGDBMeta[] => {
  const { data, deprecatedFields = [] } = params;

  data.forEach((entry) => {
    deprecatedFields.forEach((deprecatedField) => {
      if (entry.hasOwnProperty(deprecatedField)) {
        delete entry[deprecatedField as keyof IGDBMeta];
      }
    });
  });
  return data;
};
