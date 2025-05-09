import { IGDBFields } from "@/types/igdb/fields";
import { isString } from "../utils";
import { readIGDBEnvVars } from "./auth";
import prisma from "../prisma";

const rootUrl = "https://api.igdb.com/v4/";
export const RequestUrls: {
  game: string;
  release_date: string;
  genre: string;
  platform: string;
  cover: string;
} = {
  game: rootUrl + "games",
  release_date: rootUrl + "release_dates",
  genre: rootUrl + "genres",
  platform: rootUrl + "platforms",
  cover: rootUrl + "covers",
};

export const getRequestOptions = (access_token: string) => {
  return {
    headers: {
      "Client-ID": readIGDBEnvVars().client,
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
    },
    method: "POST",
  };
};

const isNonEmptyArrayOrString = (
  input: string | string[] | undefined
): boolean => {
  if (input && Array.isArray(input) && input.length > 0) return true;
  else if (isString(input)) return true;
  return false;
};

const getFieldsBody = (fields: IGDBFields | string): string => {
  if (isNonEmptyArrayOrString(fields)) {
    return `fields ${fields.toString()} ;`;
  }
  return "";
};

const getLimitBody = (limit = 10): string => {
  return `limit ${limit} ;`;
};

const getSearchBody = (search: string): string => {
  if (search !== "") {
    return `search "${search}" ;`;
  }
  return "";
};

const getWhereBody = (where: string | string[]) => {
  if (Array.isArray(where)) {
    return `where ${where.join(" & ")} ;`;
  }
  return `where ${where} ;`;
};
interface queryBuilderParams {
  access_token?: string;
  fields?: IGDBFields | string;
  limit?: number;
  search?: string;
  where?: string | string[];
  requestUrl: string;
}

export const queryBuilder = async (params: queryBuilderParams) => {
  const {
    access_token,
    fields,
    limit = 10,
    search,
    where,
    requestUrl,
  } = params;

  if (!access_token) throw new Error("access Token not Found");

  const query = getRequestOptions(access_token);
  let body: string = "";
  if (fields) body += getFieldsBody(fields);
  body += getLimitBody(limit);
  if (search) body += getSearchBody(search);
  if (where && isNonEmptyArrayOrString(where)) body += getWhereBody(where);

  const response = await fetch(requestUrl, {
    ...query,
    body,
    cache: "force-cache",
  });

  const data = await response.json();
  return data;
};

export const downloadImage = async (url: string): Promise<Blob> => {
  const newURl = url.replace("t_thumb", "t_cover_big");

  const response = await fetch(newURl, {
    mode: "no-cors",
    cache: "force-cache",
  });
  return await response.blob();
};

interface SaveImageResponse {
  success: boolean;
  error?: string;
}

interface saveImageParams {
  blob: Blob;
  filename: string;
  gameId: number;
}

export const saveImage = async (
  params: saveImageParams
): Promise<SaveImageResponse> => {
  const { blob, filename, gameId } = params;
  const buffer = Buffer.from(await blob.arrayBuffer());

  try {
    await saveFileInBucket({
      bucketName: "covers",
      file: buffer,
      fileName: "cache-" + filename,
    });
    await prisma.game.update({
      where: {
        id: gameId,
      },
      data: {
        cover: {
          create: {
            bucket: "covers",
            fileName: "cache-" + filename,
            size: blob.size,
            originalName: filename,
          },
        },
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error as string,
    };
  }
};
