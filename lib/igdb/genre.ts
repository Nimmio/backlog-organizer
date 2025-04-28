import { fromUnixTime } from "date-fns";
import prisma from "../prisma";
import { getAuthentication } from "./auth";
import { queryBuilder, RequestUrls } from "./utils";

export const get = async (ids: number[]): Promise<Genre[]> => {
  const { cachedGenres, missing } = await getCached(ids);
  let genres: Genre[] = cachedGenres;
  if (missing.length) {
    const externalGenres: Genre[] = await getFromExternal(ids);
    await saveToCache(externalGenres);
    genres = genres.concat(externalGenres);
  }
  return genres;
};

const getCached = async (
  ids: number[]
): Promise<{ cachedGenres: Genre[]; missing: number[] }> => {
  const cachedGenres = await prisma.iGDBGenreCache.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  const missingIds: number[] = ids.filter(
    (id) => !cachedGenres.some((cachedGenre) => cachedGenre.id === id)
  );
  return { cachedGenres, missing: missingIds };
};

const getFromExternal = async (ids: number[]): Promise<Genre[]> => {
  const { access_token } = await getAuthentication();

  const fields: GameField[] = ["genres", "platforms"];
  const idString = getIdString(ids);
  const response = await queryBuilder({
    access_token: access_token || undefined,
    requestUrl: RequestUrls.genre,
    fields: "*",
    where: `id =${getIdString(ids)}`,
  });
  const data = response.data;
  return data.map((entry) => ({
    ...entry,
    created_at: fromUnixTime(entry.created_at),
    updated_at: fromUnixTime(entry.updated_at),
  }));
};

const saveToCache = async (genres: Genre[]) => {
  await prisma.iGDBGenreCache.createMany({
    data: genres,
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
