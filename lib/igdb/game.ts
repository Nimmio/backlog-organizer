"use server";

import { GameField, SearchGame } from "@/types/igdb/game";
import { queryBuilder, RequestUrls } from "./utils";
import { getAuthentication } from "./auth";

interface searchgameOnIGDBParamsParams {
  search: string;
  filterEditions?: boolean;
}

export const searchgameOnIGDBParams = async (
  params: searchgameOnIGDBParamsParams
): Promise<SearchGame[]> => {
  const { search, filterEditions = false } = params;
  const { access_token } = await getAuthentication();

  const filter = filterEditions ? ["version_parent = null"] : undefined;
  return (await queryBuilder({
    access_token: access_token || undefined,
    requestUrl: RequestUrls.game,
    search: search,
    fields: [
      "name",
      "first_release_date",
      "cover.url",
      "summary",
      "genres.name",
      "genres.id",
      "platforms.name",
      "platforms.id",
    ] as GameField[],
    where: filter,
    limit: 12,
  })) as SearchGame[];
};
