import { getAuthentication, readIGDBEnvVars } from "./auth";
import apicalyspe from "apicalypse";

const getRequestOptions = (access_token: string) => {
  return {
    headers: {
      "Client-ID": readIGDBEnvVars().client,
      Authorization: `Bearer ${access_token}`,
    },
    method: "post", // The default is `get`
  };
};

export const searchGame = async (input: string) => {
  const { access_token } = await getAuthentication();
  if (!access_token) throw new Error("access Token not Found");
  console.log("test", getRequestOptions(access_token));
  const response = await apicalyspe(getRequestOptions(access_token))
    .fields("name")
    .limit(10)
    .search(input)
    .request("https://api.igdb.com/v4/games");
  console.log(response.data);
};
