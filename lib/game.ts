import { getStatusKeyForTranslation, TStatusKeyWithAll } from "./status";

interface getGamesForDashboardParams {
  search?: string;
  status?: TStatusKeyWithAll;
  platform?: string;
  userId: string;
}

export const getWhereString = (params: getGamesForDashboardParams) => {
  const { userId, search, status, platform } = params;
  let where = {
    userId: userId,
  };
  if (search)
    where = Object.assign(where, {
      igdbGame: {
        name: { contains: search, mode: "insensitive" },
      },
    });
  if (status && status !== "All")
    where = Object.assign(where, {
      status: getStatusKeyForTranslation(status),
    });
  if (platform && platform !== "All")
    where = Object.assign(where, {
      platform,
    });

  return where;
};
