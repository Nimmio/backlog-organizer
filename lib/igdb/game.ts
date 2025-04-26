import { getAuthentication } from "./auth";
import apicalyspe from "apicalypse";
import { getRequestOptions } from "./utils";

interface searchGameParams {
  input: string;
  fields: GameField[];
  filterEditions?: boolean;
}
export const searchGame = async (params: searchGameParams) => {
  const { input, fields, filterEditions = false } = params;
  const { access_token } = await getAuthentication();
  if (!access_token) throw new Error("access Token not Found");
  const filter = filterEditions ? ["version_parent = null"] : ["1=1"];
  const response = await apicalyspe(getRequestOptions(access_token))
    .fields(fields)
    .limit(10)
    .search(input)
    .where("version_parent = null")
    .request("https://api.igdb.com/v4/games");
  console.log(response.data);
};
