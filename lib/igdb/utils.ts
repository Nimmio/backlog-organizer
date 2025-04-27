import { unknown } from "zod";
import { isString } from "../utils";
import { readIGDBEnvVars } from "./auth";
import apicalyspe from "apicalypse";

export const RequestUrls: {
  [key: string]: string;
} = {
  game: "https://api.igdb.com/v4/games",
};

export const getRequestOptions = (access_token: string) => {
  return {
    headers: {
      "Client-ID": readIGDBEnvVars().client,
      Authorization: `Bearer ${access_token}`,
    },
    method: "post", // The default is `get`
  };
};

const isNonEmptyArrayOrString = (
  input: string | string[] | undefined
): boolean => {
  if (input && Array.isArray(input) && input.length > 0) return true;
  else if (isString(input)) return true;
  return false;
};

const getRootQuery = (access_token: string) => {
  return apicalyspe(getRequestOptions(access_token));
};

const getFieldsQuery = (query, fields) => {
  if (isNonEmptyArrayOrString(fields)) {
    return query.fields(fields);
  }
  return query;
};

const getLimitQuery = (query, limit = 10) => {
  return query.limit(limit);
};

const getSearchQuery = (query, search) => {
  if (search && search !== "") {
    return query.search(search);
  }
  return query;
};

const getWhereQuery = (query, where) => {
  if (isNonEmptyArrayOrString(where)) return query.where(where);
  return query;
};

const getRequesQuery = (query, requestUrl) => {
  return query.request(requestUrl);
};

interface queryBuilderParams {
  access_token: string;
  fields?: string | string[];
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

  let query = getRootQuery(access_token);
  query = getFieldsQuery(query, fields);
  query = getLimitQuery(query, limit);
  query = getSearchQuery(query, search);
  query = getWhereQuery(query, where);
  query = getRequesQuery(query, requestUrl);
  return await query;
};
