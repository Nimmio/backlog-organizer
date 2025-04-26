import { GameFields } from "@/types/igdb/game";
import { readIGDBEnvVars } from "./auth";

export const getRequestOptions = (access_token: string) => {
  return {
    headers: {
      "Client-ID": readIGDBEnvVars().client,
      Authorization: `Bearer ${access_token}`,
    },
    method: "post", // The default is `get`
  };
};
