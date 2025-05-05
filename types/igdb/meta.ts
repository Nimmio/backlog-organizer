import { Cover, Game, Genre, Platform } from "@/generated/prisma";
import { ExternalGenre } from "./genre";
import { ExternalGame } from "./game";
import { ExternalPlatform } from "./platform";
export type IGDBMetaType = "game" | "genre" | "platform" | "cover";

export type IGDBMeta = Game | Genre | Platform | Cover;

export type IGDBExternMeta = ExternalGenre | ExternalGame | ExternalPlatform;

postgresql://postgres:O7YVVxapn9o1cUApykS0s9l1Ve8tcfnOCdJylxzfHL0T0cjkAQ6G3DlKCUAskknG@postgres:5432/mydb?schema=public

postgresql://postgres:O7YVVxapn9o1cUApykS0s9l1Ve8tcfnOCdJylxzfHL0T0cjkAQ6G3DlKCUAskknG@postgres:5432/mydb?schema=public