
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.GameStatusScalarFieldEnum = {
  id: 'id',
  platform: 'platform',
  status: 'status',
  notes: 'notes',
  userId: 'userId',
  igdbGameId: 'igdbGameId'
};

exports.Prisma.UserSettingsScalarFieldEnum = {
  id: 'id',
  theme: 'theme',
  userId: 'userId'
};

exports.Prisma.IGDBAuthScalarFieldEnum = {
  id: 'id',
  access_token: 'access_token',
  expires: 'expires',
  updatedAt: 'updatedAt'
};

exports.Prisma.GenreScalarFieldEnum = {
  id: 'id',
  checksum: 'checksum',
  created_at: 'created_at',
  name: 'name',
  slug: 'slug',
  updated_at: 'updated_at',
  url: 'url'
};

exports.Prisma.CoverScalarFieldEnum = {
  id: 'id',
  alpha_channel: 'alpha_channel',
  animated: 'animated',
  checksum: 'checksum',
  game_localization: 'game_localization',
  height: 'height',
  image_id: 'image_id',
  url: 'url',
  width: 'width',
  downloaded_filename: 'downloaded_filename'
};

exports.Prisma.PlatformScalarFieldEnum = {
  id: 'id',
  abbreviation: 'abbreviation',
  alternative_name: 'alternative_name',
  checksum: 'checksum',
  created_at: 'created_at',
  generation: 'generation',
  name: 'name',
  platform_family: 'platform_family',
  platform_logo: 'platform_logo',
  platform_type: 'platform_type',
  slug: 'slug',
  summary: 'summary',
  updated_at: 'updated_at',
  url: 'url'
};

exports.Prisma.GameScalarFieldEnum = {
  id: 'id',
  age_ratings: 'age_ratings',
  aggregated_rating: 'aggregated_rating',
  aggregated_rating_count: 'aggregated_rating_count',
  alternative_names: 'alternative_names',
  artworks: 'artworks',
  bundles: 'bundles',
  checksum: 'checksum',
  collections: 'collections',
  coverId: 'coverId',
  created_at: 'created_at',
  dlcs: 'dlcs',
  expanded_games: 'expanded_games',
  expansions: 'expansions',
  external_games: 'external_games',
  first_release_date: 'first_release_date',
  forks: 'forks',
  franchise: 'franchise',
  franchises: 'franchises',
  game_engines: 'game_engines',
  game_localizations: 'game_localizations',
  game_modes: 'game_modes',
  game_status: 'game_status',
  game_type: 'game_type',
  hypes: 'hypes',
  involved_companies: 'involved_companies',
  keywords: 'keywords',
  language_supports: 'language_supports',
  multiplayer_modes: 'multiplayer_modes',
  name: 'name',
  parent_game: 'parent_game',
  player_perspectives: 'player_perspectives',
  ports: 'ports',
  rating: 'rating',
  rating_count: 'rating_count',
  release_dates: 'release_dates',
  remakes: 'remakes',
  remasters: 'remasters',
  screenshots: 'screenshots',
  similar_games: 'similar_games',
  slug: 'slug',
  standalone_expansions: 'standalone_expansions',
  storyline: 'storyline',
  summary: 'summary',
  tags: 'tags',
  themes: 'themes',
  total_rating: 'total_rating',
  total_rating_count: 'total_rating_count',
  updated_at: 'updated_at',
  url: 'url',
  version_parent: 'version_parent',
  version_title: 'version_title',
  videos: 'videos',
  websites: 'websites'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  expiresAt: 'expiresAt',
  token: 'token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  userId: 'userId'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  accountId: 'accountId',
  providerId: 'providerId',
  userId: 'userId',
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  idToken: 'idToken',
  accessTokenExpiresAt: 'accessTokenExpiresAt',
  refreshTokenExpiresAt: 'refreshTokenExpiresAt',
  scope: 'scope',
  password: 'password',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VerificationScalarFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  value: 'value',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Status = exports.$Enums.Status = {
  WANT_TO_BUY: 'WANT_TO_BUY',
  PREORDER: 'PREORDER',
  BACKLOG: 'BACKLOG',
  PLAYING: 'PLAYING',
  COMPLETED: 'COMPLETED',
  DROPPED: 'DROPPED',
  ON_HOLD: 'ON_HOLD'
};

exports.Theme = exports.$Enums.Theme = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  SYSTEM: 'SYSTEM'
};

exports.Prisma.ModelName = {
  GameStatus: 'GameStatus',
  UserSettings: 'UserSettings',
  IGDBAuth: 'IGDBAuth',
  Genre: 'Genre',
  Cover: 'Cover',
  Platform: 'Platform',
  Game: 'Game',
  User: 'User',
  Session: 'Session',
  Account: 'Account',
  Verification: 'Verification'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
