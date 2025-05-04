import { CoverField } from "./cover";
import { GameField } from "./game";
import { GenreField } from "./genre";
import { platformFields } from "./platform";

export type IGDBFields =
  | GameField[]
  | GenreField[]
  | platformFields[]
  | CoverField[];
