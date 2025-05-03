import { Cover, Game, Genre, Platform } from "@/generated/prisma";
import { ExternalGenre } from "./genre";
import { ExternalGame } from "./game";
import { ExternalPlatform } from "./platform";
export type IGDBMetaType = "game" | "genre" | "platform" | "cover";

export type IGDBMeta = Game | Genre | Platform | Cover;

export type IGDBExternMeta = ExternalGenre | ExternalGame | ExternalPlatform;
