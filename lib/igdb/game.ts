import { getAuthentication } from "./auth";
import apicalyspe from "apicalypse";
import { getRequestOptions, queryBuilder, RequestUrls } from "./utils";

interface searchGameParams {
  search: string;
  fields: GameField[];
  filterEditions?: boolean;
}

type ReturnType = { data: Array<Object> };

export const searchGame = async (params: searchGameParams) => {
  const { search, fields, filterEditions = false } = params;
  const { access_token } = await getAuthentication();

  const filter = filterEditions ? ["version_parent = null"] : undefined;
  const response = await queryBuilder({
    access_token,
    requestUrl: RequestUrls.game,
    search: search,
    fields: fields,
    where: filter,
  });
  return response.data;
};
