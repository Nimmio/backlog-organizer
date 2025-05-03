
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model GameStatus
 * 
 */
export type GameStatus = $Result.DefaultSelection<Prisma.$GameStatusPayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
/**
 * Model IGDBAuth
 * 
 */
export type IGDBAuth = $Result.DefaultSelection<Prisma.$IGDBAuthPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Cover
 * 
 */
export type Cover = $Result.DefaultSelection<Prisma.$CoverPayload>
/**
 * Model Platform
 * 
 */
export type Platform = $Result.DefaultSelection<Prisma.$PlatformPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  WANT_TO_BUY: 'WANT_TO_BUY',
  PREORDER: 'PREORDER',
  TO_PLAY: 'TO_PLAY',
  PLAYING: 'PLAYING',
  COMPLETED: 'COMPLETED',
  DROPPED: 'DROPPED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Theme: {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  SYSTEM: 'SYSTEM'
};

export type Theme = (typeof Theme)[keyof typeof Theme]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Theme = $Enums.Theme

export const Theme: typeof $Enums.Theme

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GameStatuses
 * const gameStatuses = await prisma.gameStatus.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more GameStatuses
   * const gameStatuses = await prisma.gameStatus.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gameStatus`: Exposes CRUD operations for the **GameStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameStatuses
    * const gameStatuses = await prisma.gameStatus.findMany()
    * ```
    */
  get gameStatus(): Prisma.GameStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iGDBAuth`: Exposes CRUD operations for the **IGDBAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IGDBAuths
    * const iGDBAuths = await prisma.iGDBAuth.findMany()
    * ```
    */
  get iGDBAuth(): Prisma.IGDBAuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cover`: Exposes CRUD operations for the **Cover** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Covers
    * const covers = await prisma.cover.findMany()
    * ```
    */
  get cover(): Prisma.CoverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platform`: Exposes CRUD operations for the **Platform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platform.findMany()
    * ```
    */
  get platform(): Prisma.PlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "gameStatus" | "userSettings" | "iGDBAuth" | "genre" | "cover" | "platform" | "game" | "user" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GameStatus: {
        payload: Prisma.$GameStatusPayload<ExtArgs>
        fields: Prisma.GameStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload>
          }
          findFirst: {
            args: Prisma.GameStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload>
          }
          findMany: {
            args: Prisma.GameStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload>[]
          }
          create: {
            args: Prisma.GameStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload>
          }
          createMany: {
            args: Prisma.GameStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload>[]
          }
          delete: {
            args: Prisma.GameStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload>
          }
          update: {
            args: Prisma.GameStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload>
          }
          deleteMany: {
            args: Prisma.GameStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload>[]
          }
          upsert: {
            args: Prisma.GameStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatusPayload>
          }
          aggregate: {
            args: Prisma.GameStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameStatus>
          }
          groupBy: {
            args: Prisma.GameStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameStatusCountArgs<ExtArgs>
            result: $Utils.Optional<GameStatusCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
      IGDBAuth: {
        payload: Prisma.$IGDBAuthPayload<ExtArgs>
        fields: Prisma.IGDBAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IGDBAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IGDBAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload>
          }
          findFirst: {
            args: Prisma.IGDBAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IGDBAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload>
          }
          findMany: {
            args: Prisma.IGDBAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload>[]
          }
          create: {
            args: Prisma.IGDBAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload>
          }
          createMany: {
            args: Prisma.IGDBAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IGDBAuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload>[]
          }
          delete: {
            args: Prisma.IGDBAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload>
          }
          update: {
            args: Prisma.IGDBAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload>
          }
          deleteMany: {
            args: Prisma.IGDBAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IGDBAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IGDBAuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload>[]
          }
          upsert: {
            args: Prisma.IGDBAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IGDBAuthPayload>
          }
          aggregate: {
            args: Prisma.IGDBAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIGDBAuth>
          }
          groupBy: {
            args: Prisma.IGDBAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<IGDBAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.IGDBAuthCountArgs<ExtArgs>
            result: $Utils.Optional<IGDBAuthCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Cover: {
        payload: Prisma.$CoverPayload<ExtArgs>
        fields: Prisma.CoverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          findFirst: {
            args: Prisma.CoverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          findMany: {
            args: Prisma.CoverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>[]
          }
          create: {
            args: Prisma.CoverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          createMany: {
            args: Prisma.CoverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>[]
          }
          delete: {
            args: Prisma.CoverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          update: {
            args: Prisma.CoverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          deleteMany: {
            args: Prisma.CoverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>[]
          }
          upsert: {
            args: Prisma.CoverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverPayload>
          }
          aggregate: {
            args: Prisma.CoverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCover>
          }
          groupBy: {
            args: Prisma.CoverGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoverGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoverCountArgs<ExtArgs>
            result: $Utils.Optional<CoverCountAggregateOutputType> | number
          }
        }
      }
      Platform: {
        payload: Prisma.$PlatformPayload<ExtArgs>
        fields: Prisma.PlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findFirst: {
            args: Prisma.PlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findMany: {
            args: Prisma.PlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          create: {
            args: Prisma.PlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          createMany: {
            args: Prisma.PlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          delete: {
            args: Prisma.PlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          update: {
            args: Prisma.PlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          deleteMany: {
            args: Prisma.PlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          upsert: {
            args: Prisma.PlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          aggregate: {
            args: Prisma.PlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatform>
          }
          groupBy: {
            args: Prisma.PlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    gameStatus?: GameStatusOmit
    userSettings?: UserSettingsOmit
    iGDBAuth?: IGDBAuthOmit
    genre?: GenreOmit
    cover?: CoverOmit
    platform?: PlatformOmit
    game?: GameOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    game: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GenreCountOutputTypeCountGameArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type CoverCountOutputType
   */

  export type CoverCountOutputType = {
    game: number
  }

  export type CoverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | CoverCountOutputTypeCountGameArgs
  }

  // Custom InputTypes
  /**
   * CoverCountOutputType without action
   */
  export type CoverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverCountOutputType
     */
    select?: CoverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoverCountOutputType without action
   */
  export type CoverCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type PlatformCountOutputType
   */

  export type PlatformCountOutputType = {
    game: number
  }

  export type PlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | PlatformCountOutputTypeCountGameArgs
  }

  // Custom InputTypes
  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCountOutputType
     */
    select?: PlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    genres: number
    platforms: number
    gameStatus: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | GameCountOutputTypeCountGenresArgs
    platforms?: boolean | GameCountOutputTypeCountPlatformsArgs
    gameStatus?: boolean | GameCountOutputTypeCountGameStatusArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountGameStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStatusWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    gameStatus: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    gameStatus?: boolean | UserCountOutputTypeCountGameStatusArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStatusWhereInput
  }


  /**
   * Models
   */

  /**
   * Model GameStatus
   */

  export type AggregateGameStatus = {
    _count: GameStatusCountAggregateOutputType | null
    _avg: GameStatusAvgAggregateOutputType | null
    _sum: GameStatusSumAggregateOutputType | null
    _min: GameStatusMinAggregateOutputType | null
    _max: GameStatusMaxAggregateOutputType | null
  }

  export type GameStatusAvgAggregateOutputType = {
    id: number | null
    igdbGameId: number | null
  }

  export type GameStatusSumAggregateOutputType = {
    id: number | null
    igdbGameId: number | null
  }

  export type GameStatusMinAggregateOutputType = {
    id: number | null
    platform: string | null
    status: $Enums.Status | null
    notes: string | null
    userId: string | null
    igdbGameId: number | null
  }

  export type GameStatusMaxAggregateOutputType = {
    id: number | null
    platform: string | null
    status: $Enums.Status | null
    notes: string | null
    userId: string | null
    igdbGameId: number | null
  }

  export type GameStatusCountAggregateOutputType = {
    id: number
    platform: number
    status: number
    notes: number
    userId: number
    igdbGameId: number
    _all: number
  }


  export type GameStatusAvgAggregateInputType = {
    id?: true
    igdbGameId?: true
  }

  export type GameStatusSumAggregateInputType = {
    id?: true
    igdbGameId?: true
  }

  export type GameStatusMinAggregateInputType = {
    id?: true
    platform?: true
    status?: true
    notes?: true
    userId?: true
    igdbGameId?: true
  }

  export type GameStatusMaxAggregateInputType = {
    id?: true
    platform?: true
    status?: true
    notes?: true
    userId?: true
    igdbGameId?: true
  }

  export type GameStatusCountAggregateInputType = {
    id?: true
    platform?: true
    status?: true
    notes?: true
    userId?: true
    igdbGameId?: true
    _all?: true
  }

  export type GameStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameStatus to aggregate.
     */
    where?: GameStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStatuses to fetch.
     */
    orderBy?: GameStatusOrderByWithRelationInput | GameStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameStatuses
    **/
    _count?: true | GameStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameStatusMaxAggregateInputType
  }

  export type GetGameStatusAggregateType<T extends GameStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateGameStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameStatus[P]>
      : GetScalarType<T[P], AggregateGameStatus[P]>
  }




  export type GameStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStatusWhereInput
    orderBy?: GameStatusOrderByWithAggregationInput | GameStatusOrderByWithAggregationInput[]
    by: GameStatusScalarFieldEnum[] | GameStatusScalarFieldEnum
    having?: GameStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameStatusCountAggregateInputType | true
    _avg?: GameStatusAvgAggregateInputType
    _sum?: GameStatusSumAggregateInputType
    _min?: GameStatusMinAggregateInputType
    _max?: GameStatusMaxAggregateInputType
  }

  export type GameStatusGroupByOutputType = {
    id: number
    platform: string
    status: $Enums.Status
    notes: string | null
    userId: string
    igdbGameId: number | null
    _count: GameStatusCountAggregateOutputType | null
    _avg: GameStatusAvgAggregateOutputType | null
    _sum: GameStatusSumAggregateOutputType | null
    _min: GameStatusMinAggregateOutputType | null
    _max: GameStatusMaxAggregateOutputType | null
  }

  type GetGameStatusGroupByPayload<T extends GameStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameStatusGroupByOutputType[P]>
            : GetScalarType<T[P], GameStatusGroupByOutputType[P]>
        }
      >
    >


  export type GameStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    status?: boolean
    notes?: boolean
    userId?: boolean
    igdbGameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    igdbGame?: boolean | GameStatus$igdbGameArgs<ExtArgs>
  }, ExtArgs["result"]["gameStatus"]>

  export type GameStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    status?: boolean
    notes?: boolean
    userId?: boolean
    igdbGameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    igdbGame?: boolean | GameStatus$igdbGameArgs<ExtArgs>
  }, ExtArgs["result"]["gameStatus"]>

  export type GameStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    status?: boolean
    notes?: boolean
    userId?: boolean
    igdbGameId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    igdbGame?: boolean | GameStatus$igdbGameArgs<ExtArgs>
  }, ExtArgs["result"]["gameStatus"]>

  export type GameStatusSelectScalar = {
    id?: boolean
    platform?: boolean
    status?: boolean
    notes?: boolean
    userId?: boolean
    igdbGameId?: boolean
  }

  export type GameStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "status" | "notes" | "userId" | "igdbGameId", ExtArgs["result"]["gameStatus"]>
  export type GameStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    igdbGame?: boolean | GameStatus$igdbGameArgs<ExtArgs>
  }
  export type GameStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    igdbGame?: boolean | GameStatus$igdbGameArgs<ExtArgs>
  }
  export type GameStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    igdbGame?: boolean | GameStatus$igdbGameArgs<ExtArgs>
  }

  export type $GameStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameStatus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      igdbGame: Prisma.$GamePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platform: string
      status: $Enums.Status
      notes: string | null
      userId: string
      igdbGameId: number | null
    }, ExtArgs["result"]["gameStatus"]>
    composites: {}
  }

  type GameStatusGetPayload<S extends boolean | null | undefined | GameStatusDefaultArgs> = $Result.GetResult<Prisma.$GameStatusPayload, S>

  type GameStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameStatusCountAggregateInputType | true
    }

  export interface GameStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameStatus'], meta: { name: 'GameStatus' } }
    /**
     * Find zero or one GameStatus that matches the filter.
     * @param {GameStatusFindUniqueArgs} args - Arguments to find a GameStatus
     * @example
     * // Get one GameStatus
     * const gameStatus = await prisma.gameStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameStatusFindUniqueArgs>(args: SelectSubset<T, GameStatusFindUniqueArgs<ExtArgs>>): Prisma__GameStatusClient<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameStatusFindUniqueOrThrowArgs} args - Arguments to find a GameStatus
     * @example
     * // Get one GameStatus
     * const gameStatus = await prisma.gameStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, GameStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameStatusClient<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStatusFindFirstArgs} args - Arguments to find a GameStatus
     * @example
     * // Get one GameStatus
     * const gameStatus = await prisma.gameStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameStatusFindFirstArgs>(args?: SelectSubset<T, GameStatusFindFirstArgs<ExtArgs>>): Prisma__GameStatusClient<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStatusFindFirstOrThrowArgs} args - Arguments to find a GameStatus
     * @example
     * // Get one GameStatus
     * const gameStatus = await prisma.gameStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, GameStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameStatusClient<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameStatuses
     * const gameStatuses = await prisma.gameStatus.findMany()
     * 
     * // Get first 10 GameStatuses
     * const gameStatuses = await prisma.gameStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameStatusWithIdOnly = await prisma.gameStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameStatusFindManyArgs>(args?: SelectSubset<T, GameStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameStatus.
     * @param {GameStatusCreateArgs} args - Arguments to create a GameStatus.
     * @example
     * // Create one GameStatus
     * const GameStatus = await prisma.gameStatus.create({
     *   data: {
     *     // ... data to create a GameStatus
     *   }
     * })
     * 
     */
    create<T extends GameStatusCreateArgs>(args: SelectSubset<T, GameStatusCreateArgs<ExtArgs>>): Prisma__GameStatusClient<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameStatuses.
     * @param {GameStatusCreateManyArgs} args - Arguments to create many GameStatuses.
     * @example
     * // Create many GameStatuses
     * const gameStatus = await prisma.gameStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameStatusCreateManyArgs>(args?: SelectSubset<T, GameStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameStatuses and returns the data saved in the database.
     * @param {GameStatusCreateManyAndReturnArgs} args - Arguments to create many GameStatuses.
     * @example
     * // Create many GameStatuses
     * const gameStatus = await prisma.gameStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameStatuses and only return the `id`
     * const gameStatusWithIdOnly = await prisma.gameStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, GameStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameStatus.
     * @param {GameStatusDeleteArgs} args - Arguments to delete one GameStatus.
     * @example
     * // Delete one GameStatus
     * const GameStatus = await prisma.gameStatus.delete({
     *   where: {
     *     // ... filter to delete one GameStatus
     *   }
     * })
     * 
     */
    delete<T extends GameStatusDeleteArgs>(args: SelectSubset<T, GameStatusDeleteArgs<ExtArgs>>): Prisma__GameStatusClient<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameStatus.
     * @param {GameStatusUpdateArgs} args - Arguments to update one GameStatus.
     * @example
     * // Update one GameStatus
     * const gameStatus = await prisma.gameStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameStatusUpdateArgs>(args: SelectSubset<T, GameStatusUpdateArgs<ExtArgs>>): Prisma__GameStatusClient<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameStatuses.
     * @param {GameStatusDeleteManyArgs} args - Arguments to filter GameStatuses to delete.
     * @example
     * // Delete a few GameStatuses
     * const { count } = await prisma.gameStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameStatusDeleteManyArgs>(args?: SelectSubset<T, GameStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameStatuses
     * const gameStatus = await prisma.gameStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameStatusUpdateManyArgs>(args: SelectSubset<T, GameStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameStatuses and returns the data updated in the database.
     * @param {GameStatusUpdateManyAndReturnArgs} args - Arguments to update many GameStatuses.
     * @example
     * // Update many GameStatuses
     * const gameStatus = await prisma.gameStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameStatuses and only return the `id`
     * const gameStatusWithIdOnly = await prisma.gameStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, GameStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameStatus.
     * @param {GameStatusUpsertArgs} args - Arguments to update or create a GameStatus.
     * @example
     * // Update or create a GameStatus
     * const gameStatus = await prisma.gameStatus.upsert({
     *   create: {
     *     // ... data to create a GameStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameStatus we want to update
     *   }
     * })
     */
    upsert<T extends GameStatusUpsertArgs>(args: SelectSubset<T, GameStatusUpsertArgs<ExtArgs>>): Prisma__GameStatusClient<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStatusCountArgs} args - Arguments to filter GameStatuses to count.
     * @example
     * // Count the number of GameStatuses
     * const count = await prisma.gameStatus.count({
     *   where: {
     *     // ... the filter for the GameStatuses we want to count
     *   }
     * })
    **/
    count<T extends GameStatusCountArgs>(
      args?: Subset<T, GameStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameStatusAggregateArgs>(args: Subset<T, GameStatusAggregateArgs>): Prisma.PrismaPromise<GetGameStatusAggregateType<T>>

    /**
     * Group by GameStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameStatusGroupByArgs['orderBy'] }
        : { orderBy?: GameStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameStatus model
   */
  readonly fields: GameStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    igdbGame<T extends GameStatus$igdbGameArgs<ExtArgs> = {}>(args?: Subset<T, GameStatus$igdbGameArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameStatus model
   */ 
  interface GameStatusFieldRefs {
    readonly id: FieldRef<"GameStatus", 'Int'>
    readonly platform: FieldRef<"GameStatus", 'String'>
    readonly status: FieldRef<"GameStatus", 'Status'>
    readonly notes: FieldRef<"GameStatus", 'String'>
    readonly userId: FieldRef<"GameStatus", 'String'>
    readonly igdbGameId: FieldRef<"GameStatus", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GameStatus findUnique
   */
  export type GameStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    /**
     * Filter, which GameStatus to fetch.
     */
    where: GameStatusWhereUniqueInput
  }

  /**
   * GameStatus findUniqueOrThrow
   */
  export type GameStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    /**
     * Filter, which GameStatus to fetch.
     */
    where: GameStatusWhereUniqueInput
  }

  /**
   * GameStatus findFirst
   */
  export type GameStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    /**
     * Filter, which GameStatus to fetch.
     */
    where?: GameStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStatuses to fetch.
     */
    orderBy?: GameStatusOrderByWithRelationInput | GameStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameStatuses.
     */
    cursor?: GameStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameStatuses.
     */
    distinct?: GameStatusScalarFieldEnum | GameStatusScalarFieldEnum[]
  }

  /**
   * GameStatus findFirstOrThrow
   */
  export type GameStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    /**
     * Filter, which GameStatus to fetch.
     */
    where?: GameStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStatuses to fetch.
     */
    orderBy?: GameStatusOrderByWithRelationInput | GameStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameStatuses.
     */
    cursor?: GameStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameStatuses.
     */
    distinct?: GameStatusScalarFieldEnum | GameStatusScalarFieldEnum[]
  }

  /**
   * GameStatus findMany
   */
  export type GameStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    /**
     * Filter, which GameStatuses to fetch.
     */
    where?: GameStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStatuses to fetch.
     */
    orderBy?: GameStatusOrderByWithRelationInput | GameStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameStatuses.
     */
    cursor?: GameStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStatuses.
     */
    skip?: number
    distinct?: GameStatusScalarFieldEnum | GameStatusScalarFieldEnum[]
  }

  /**
   * GameStatus create
   */
  export type GameStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a GameStatus.
     */
    data: XOR<GameStatusCreateInput, GameStatusUncheckedCreateInput>
  }

  /**
   * GameStatus createMany
   */
  export type GameStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameStatuses.
     */
    data: GameStatusCreateManyInput | GameStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameStatus createManyAndReturn
   */
  export type GameStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * The data used to create many GameStatuses.
     */
    data: GameStatusCreateManyInput | GameStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameStatus update
   */
  export type GameStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a GameStatus.
     */
    data: XOR<GameStatusUpdateInput, GameStatusUncheckedUpdateInput>
    /**
     * Choose, which GameStatus to update.
     */
    where: GameStatusWhereUniqueInput
  }

  /**
   * GameStatus updateMany
   */
  export type GameStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameStatuses.
     */
    data: XOR<GameStatusUpdateManyMutationInput, GameStatusUncheckedUpdateManyInput>
    /**
     * Filter which GameStatuses to update
     */
    where?: GameStatusWhereInput
    /**
     * Limit how many GameStatuses to update.
     */
    limit?: number
  }

  /**
   * GameStatus updateManyAndReturn
   */
  export type GameStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * The data used to update GameStatuses.
     */
    data: XOR<GameStatusUpdateManyMutationInput, GameStatusUncheckedUpdateManyInput>
    /**
     * Filter which GameStatuses to update
     */
    where?: GameStatusWhereInput
    /**
     * Limit how many GameStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameStatus upsert
   */
  export type GameStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the GameStatus to update in case it exists.
     */
    where: GameStatusWhereUniqueInput
    /**
     * In case the GameStatus found by the `where` argument doesn't exist, create a new GameStatus with this data.
     */
    create: XOR<GameStatusCreateInput, GameStatusUncheckedCreateInput>
    /**
     * In case the GameStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameStatusUpdateInput, GameStatusUncheckedUpdateInput>
  }

  /**
   * GameStatus delete
   */
  export type GameStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    /**
     * Filter which GameStatus to delete.
     */
    where: GameStatusWhereUniqueInput
  }

  /**
   * GameStatus deleteMany
   */
  export type GameStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameStatuses to delete
     */
    where?: GameStatusWhereInput
    /**
     * Limit how many GameStatuses to delete.
     */
    limit?: number
  }

  /**
   * GameStatus.igdbGame
   */
  export type GameStatus$igdbGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
  }

  /**
   * GameStatus without action
   */
  export type GameStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSettingsSumAggregateOutputType = {
    id: number | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: number | null
    theme: $Enums.Theme | null
    userId: string | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: number | null
    theme: $Enums.Theme | null
    userId: string | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    theme: number
    userId: number
    _all: number
  }


  export type UserSettingsAvgAggregateInputType = {
    id?: true
  }

  export type UserSettingsSumAggregateInputType = {
    id?: true
  }

  export type UserSettingsMinAggregateInputType = {
    id?: true
    theme?: true
    userId?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    theme?: true
    userId?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    theme?: true
    userId?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _avg?: UserSettingsAvgAggregateInputType
    _sum?: UserSettingsSumAggregateInputType
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: number
    theme: $Enums.Theme
    userId: string
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    theme?: boolean
    userId?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "theme" | "userId", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      theme: $Enums.Theme
      userId: string
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSettings model
   */ 
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'Int'>
    readonly theme: FieldRef<"UserSettings", 'Theme'>
    readonly userId: FieldRef<"UserSettings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model IGDBAuth
   */

  export type AggregateIGDBAuth = {
    _count: IGDBAuthCountAggregateOutputType | null
    _avg: IGDBAuthAvgAggregateOutputType | null
    _sum: IGDBAuthSumAggregateOutputType | null
    _min: IGDBAuthMinAggregateOutputType | null
    _max: IGDBAuthMaxAggregateOutputType | null
  }

  export type IGDBAuthAvgAggregateOutputType = {
    id: number | null
  }

  export type IGDBAuthSumAggregateOutputType = {
    id: number | null
  }

  export type IGDBAuthMinAggregateOutputType = {
    id: number | null
    access_token: string | null
    expires: Date | null
    updatedAt: Date | null
  }

  export type IGDBAuthMaxAggregateOutputType = {
    id: number | null
    access_token: string | null
    expires: Date | null
    updatedAt: Date | null
  }

  export type IGDBAuthCountAggregateOutputType = {
    id: number
    access_token: number
    expires: number
    updatedAt: number
    _all: number
  }


  export type IGDBAuthAvgAggregateInputType = {
    id?: true
  }

  export type IGDBAuthSumAggregateInputType = {
    id?: true
  }

  export type IGDBAuthMinAggregateInputType = {
    id?: true
    access_token?: true
    expires?: true
    updatedAt?: true
  }

  export type IGDBAuthMaxAggregateInputType = {
    id?: true
    access_token?: true
    expires?: true
    updatedAt?: true
  }

  export type IGDBAuthCountAggregateInputType = {
    id?: true
    access_token?: true
    expires?: true
    updatedAt?: true
    _all?: true
  }

  export type IGDBAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IGDBAuth to aggregate.
     */
    where?: IGDBAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IGDBAuths to fetch.
     */
    orderBy?: IGDBAuthOrderByWithRelationInput | IGDBAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IGDBAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IGDBAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IGDBAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IGDBAuths
    **/
    _count?: true | IGDBAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IGDBAuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IGDBAuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IGDBAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IGDBAuthMaxAggregateInputType
  }

  export type GetIGDBAuthAggregateType<T extends IGDBAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateIGDBAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIGDBAuth[P]>
      : GetScalarType<T[P], AggregateIGDBAuth[P]>
  }




  export type IGDBAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IGDBAuthWhereInput
    orderBy?: IGDBAuthOrderByWithAggregationInput | IGDBAuthOrderByWithAggregationInput[]
    by: IGDBAuthScalarFieldEnum[] | IGDBAuthScalarFieldEnum
    having?: IGDBAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IGDBAuthCountAggregateInputType | true
    _avg?: IGDBAuthAvgAggregateInputType
    _sum?: IGDBAuthSumAggregateInputType
    _min?: IGDBAuthMinAggregateInputType
    _max?: IGDBAuthMaxAggregateInputType
  }

  export type IGDBAuthGroupByOutputType = {
    id: number
    access_token: string | null
    expires: Date | null
    updatedAt: Date
    _count: IGDBAuthCountAggregateOutputType | null
    _avg: IGDBAuthAvgAggregateOutputType | null
    _sum: IGDBAuthSumAggregateOutputType | null
    _min: IGDBAuthMinAggregateOutputType | null
    _max: IGDBAuthMaxAggregateOutputType | null
  }

  type GetIGDBAuthGroupByPayload<T extends IGDBAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IGDBAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IGDBAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IGDBAuthGroupByOutputType[P]>
            : GetScalarType<T[P], IGDBAuthGroupByOutputType[P]>
        }
      >
    >


  export type IGDBAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    access_token?: boolean
    expires?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["iGDBAuth"]>

  export type IGDBAuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    access_token?: boolean
    expires?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["iGDBAuth"]>

  export type IGDBAuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    access_token?: boolean
    expires?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["iGDBAuth"]>

  export type IGDBAuthSelectScalar = {
    id?: boolean
    access_token?: boolean
    expires?: boolean
    updatedAt?: boolean
  }

  export type IGDBAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "access_token" | "expires" | "updatedAt", ExtArgs["result"]["iGDBAuth"]>

  export type $IGDBAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IGDBAuth"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      access_token: string | null
      expires: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["iGDBAuth"]>
    composites: {}
  }

  type IGDBAuthGetPayload<S extends boolean | null | undefined | IGDBAuthDefaultArgs> = $Result.GetResult<Prisma.$IGDBAuthPayload, S>

  type IGDBAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IGDBAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IGDBAuthCountAggregateInputType | true
    }

  export interface IGDBAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IGDBAuth'], meta: { name: 'IGDBAuth' } }
    /**
     * Find zero or one IGDBAuth that matches the filter.
     * @param {IGDBAuthFindUniqueArgs} args - Arguments to find a IGDBAuth
     * @example
     * // Get one IGDBAuth
     * const iGDBAuth = await prisma.iGDBAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IGDBAuthFindUniqueArgs>(args: SelectSubset<T, IGDBAuthFindUniqueArgs<ExtArgs>>): Prisma__IGDBAuthClient<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IGDBAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IGDBAuthFindUniqueOrThrowArgs} args - Arguments to find a IGDBAuth
     * @example
     * // Get one IGDBAuth
     * const iGDBAuth = await prisma.iGDBAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IGDBAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, IGDBAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IGDBAuthClient<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IGDBAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IGDBAuthFindFirstArgs} args - Arguments to find a IGDBAuth
     * @example
     * // Get one IGDBAuth
     * const iGDBAuth = await prisma.iGDBAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IGDBAuthFindFirstArgs>(args?: SelectSubset<T, IGDBAuthFindFirstArgs<ExtArgs>>): Prisma__IGDBAuthClient<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IGDBAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IGDBAuthFindFirstOrThrowArgs} args - Arguments to find a IGDBAuth
     * @example
     * // Get one IGDBAuth
     * const iGDBAuth = await prisma.iGDBAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IGDBAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, IGDBAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__IGDBAuthClient<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IGDBAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IGDBAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IGDBAuths
     * const iGDBAuths = await prisma.iGDBAuth.findMany()
     * 
     * // Get first 10 IGDBAuths
     * const iGDBAuths = await prisma.iGDBAuth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iGDBAuthWithIdOnly = await prisma.iGDBAuth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IGDBAuthFindManyArgs>(args?: SelectSubset<T, IGDBAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IGDBAuth.
     * @param {IGDBAuthCreateArgs} args - Arguments to create a IGDBAuth.
     * @example
     * // Create one IGDBAuth
     * const IGDBAuth = await prisma.iGDBAuth.create({
     *   data: {
     *     // ... data to create a IGDBAuth
     *   }
     * })
     * 
     */
    create<T extends IGDBAuthCreateArgs>(args: SelectSubset<T, IGDBAuthCreateArgs<ExtArgs>>): Prisma__IGDBAuthClient<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IGDBAuths.
     * @param {IGDBAuthCreateManyArgs} args - Arguments to create many IGDBAuths.
     * @example
     * // Create many IGDBAuths
     * const iGDBAuth = await prisma.iGDBAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IGDBAuthCreateManyArgs>(args?: SelectSubset<T, IGDBAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IGDBAuths and returns the data saved in the database.
     * @param {IGDBAuthCreateManyAndReturnArgs} args - Arguments to create many IGDBAuths.
     * @example
     * // Create many IGDBAuths
     * const iGDBAuth = await prisma.iGDBAuth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IGDBAuths and only return the `id`
     * const iGDBAuthWithIdOnly = await prisma.iGDBAuth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IGDBAuthCreateManyAndReturnArgs>(args?: SelectSubset<T, IGDBAuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IGDBAuth.
     * @param {IGDBAuthDeleteArgs} args - Arguments to delete one IGDBAuth.
     * @example
     * // Delete one IGDBAuth
     * const IGDBAuth = await prisma.iGDBAuth.delete({
     *   where: {
     *     // ... filter to delete one IGDBAuth
     *   }
     * })
     * 
     */
    delete<T extends IGDBAuthDeleteArgs>(args: SelectSubset<T, IGDBAuthDeleteArgs<ExtArgs>>): Prisma__IGDBAuthClient<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IGDBAuth.
     * @param {IGDBAuthUpdateArgs} args - Arguments to update one IGDBAuth.
     * @example
     * // Update one IGDBAuth
     * const iGDBAuth = await prisma.iGDBAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IGDBAuthUpdateArgs>(args: SelectSubset<T, IGDBAuthUpdateArgs<ExtArgs>>): Prisma__IGDBAuthClient<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IGDBAuths.
     * @param {IGDBAuthDeleteManyArgs} args - Arguments to filter IGDBAuths to delete.
     * @example
     * // Delete a few IGDBAuths
     * const { count } = await prisma.iGDBAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IGDBAuthDeleteManyArgs>(args?: SelectSubset<T, IGDBAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IGDBAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IGDBAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IGDBAuths
     * const iGDBAuth = await prisma.iGDBAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IGDBAuthUpdateManyArgs>(args: SelectSubset<T, IGDBAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IGDBAuths and returns the data updated in the database.
     * @param {IGDBAuthUpdateManyAndReturnArgs} args - Arguments to update many IGDBAuths.
     * @example
     * // Update many IGDBAuths
     * const iGDBAuth = await prisma.iGDBAuth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IGDBAuths and only return the `id`
     * const iGDBAuthWithIdOnly = await prisma.iGDBAuth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IGDBAuthUpdateManyAndReturnArgs>(args: SelectSubset<T, IGDBAuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IGDBAuth.
     * @param {IGDBAuthUpsertArgs} args - Arguments to update or create a IGDBAuth.
     * @example
     * // Update or create a IGDBAuth
     * const iGDBAuth = await prisma.iGDBAuth.upsert({
     *   create: {
     *     // ... data to create a IGDBAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IGDBAuth we want to update
     *   }
     * })
     */
    upsert<T extends IGDBAuthUpsertArgs>(args: SelectSubset<T, IGDBAuthUpsertArgs<ExtArgs>>): Prisma__IGDBAuthClient<$Result.GetResult<Prisma.$IGDBAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IGDBAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IGDBAuthCountArgs} args - Arguments to filter IGDBAuths to count.
     * @example
     * // Count the number of IGDBAuths
     * const count = await prisma.iGDBAuth.count({
     *   where: {
     *     // ... the filter for the IGDBAuths we want to count
     *   }
     * })
    **/
    count<T extends IGDBAuthCountArgs>(
      args?: Subset<T, IGDBAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IGDBAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IGDBAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IGDBAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IGDBAuthAggregateArgs>(args: Subset<T, IGDBAuthAggregateArgs>): Prisma.PrismaPromise<GetIGDBAuthAggregateType<T>>

    /**
     * Group by IGDBAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IGDBAuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IGDBAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IGDBAuthGroupByArgs['orderBy'] }
        : { orderBy?: IGDBAuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IGDBAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIGDBAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IGDBAuth model
   */
  readonly fields: IGDBAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IGDBAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IGDBAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IGDBAuth model
   */ 
  interface IGDBAuthFieldRefs {
    readonly id: FieldRef<"IGDBAuth", 'Int'>
    readonly access_token: FieldRef<"IGDBAuth", 'String'>
    readonly expires: FieldRef<"IGDBAuth", 'DateTime'>
    readonly updatedAt: FieldRef<"IGDBAuth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IGDBAuth findUnique
   */
  export type IGDBAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * Filter, which IGDBAuth to fetch.
     */
    where: IGDBAuthWhereUniqueInput
  }

  /**
   * IGDBAuth findUniqueOrThrow
   */
  export type IGDBAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * Filter, which IGDBAuth to fetch.
     */
    where: IGDBAuthWhereUniqueInput
  }

  /**
   * IGDBAuth findFirst
   */
  export type IGDBAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * Filter, which IGDBAuth to fetch.
     */
    where?: IGDBAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IGDBAuths to fetch.
     */
    orderBy?: IGDBAuthOrderByWithRelationInput | IGDBAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IGDBAuths.
     */
    cursor?: IGDBAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IGDBAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IGDBAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IGDBAuths.
     */
    distinct?: IGDBAuthScalarFieldEnum | IGDBAuthScalarFieldEnum[]
  }

  /**
   * IGDBAuth findFirstOrThrow
   */
  export type IGDBAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * Filter, which IGDBAuth to fetch.
     */
    where?: IGDBAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IGDBAuths to fetch.
     */
    orderBy?: IGDBAuthOrderByWithRelationInput | IGDBAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IGDBAuths.
     */
    cursor?: IGDBAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IGDBAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IGDBAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IGDBAuths.
     */
    distinct?: IGDBAuthScalarFieldEnum | IGDBAuthScalarFieldEnum[]
  }

  /**
   * IGDBAuth findMany
   */
  export type IGDBAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * Filter, which IGDBAuths to fetch.
     */
    where?: IGDBAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IGDBAuths to fetch.
     */
    orderBy?: IGDBAuthOrderByWithRelationInput | IGDBAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IGDBAuths.
     */
    cursor?: IGDBAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IGDBAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IGDBAuths.
     */
    skip?: number
    distinct?: IGDBAuthScalarFieldEnum | IGDBAuthScalarFieldEnum[]
  }

  /**
   * IGDBAuth create
   */
  export type IGDBAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * The data needed to create a IGDBAuth.
     */
    data: XOR<IGDBAuthCreateInput, IGDBAuthUncheckedCreateInput>
  }

  /**
   * IGDBAuth createMany
   */
  export type IGDBAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IGDBAuths.
     */
    data: IGDBAuthCreateManyInput | IGDBAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IGDBAuth createManyAndReturn
   */
  export type IGDBAuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * The data used to create many IGDBAuths.
     */
    data: IGDBAuthCreateManyInput | IGDBAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IGDBAuth update
   */
  export type IGDBAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * The data needed to update a IGDBAuth.
     */
    data: XOR<IGDBAuthUpdateInput, IGDBAuthUncheckedUpdateInput>
    /**
     * Choose, which IGDBAuth to update.
     */
    where: IGDBAuthWhereUniqueInput
  }

  /**
   * IGDBAuth updateMany
   */
  export type IGDBAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IGDBAuths.
     */
    data: XOR<IGDBAuthUpdateManyMutationInput, IGDBAuthUncheckedUpdateManyInput>
    /**
     * Filter which IGDBAuths to update
     */
    where?: IGDBAuthWhereInput
    /**
     * Limit how many IGDBAuths to update.
     */
    limit?: number
  }

  /**
   * IGDBAuth updateManyAndReturn
   */
  export type IGDBAuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * The data used to update IGDBAuths.
     */
    data: XOR<IGDBAuthUpdateManyMutationInput, IGDBAuthUncheckedUpdateManyInput>
    /**
     * Filter which IGDBAuths to update
     */
    where?: IGDBAuthWhereInput
    /**
     * Limit how many IGDBAuths to update.
     */
    limit?: number
  }

  /**
   * IGDBAuth upsert
   */
  export type IGDBAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * The filter to search for the IGDBAuth to update in case it exists.
     */
    where: IGDBAuthWhereUniqueInput
    /**
     * In case the IGDBAuth found by the `where` argument doesn't exist, create a new IGDBAuth with this data.
     */
    create: XOR<IGDBAuthCreateInput, IGDBAuthUncheckedCreateInput>
    /**
     * In case the IGDBAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IGDBAuthUpdateInput, IGDBAuthUncheckedUpdateInput>
  }

  /**
   * IGDBAuth delete
   */
  export type IGDBAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
    /**
     * Filter which IGDBAuth to delete.
     */
    where: IGDBAuthWhereUniqueInput
  }

  /**
   * IGDBAuth deleteMany
   */
  export type IGDBAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IGDBAuths to delete
     */
    where?: IGDBAuthWhereInput
    /**
     * Limit how many IGDBAuths to delete.
     */
    limit?: number
  }

  /**
   * IGDBAuth without action
   */
  export type IGDBAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IGDBAuth
     */
    select?: IGDBAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IGDBAuth
     */
    omit?: IGDBAuthOmit<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    checksum: string | null
    created_at: Date | null
    name: string | null
    slug: string | null
    updated_at: Date | null
    url: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    checksum: string | null
    created_at: Date | null
    name: string | null
    slug: string | null
    updated_at: Date | null
    url: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    checksum: number
    created_at: number
    name: number
    slug: number
    updated_at: number
    url: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    checksum?: true
    created_at?: true
    name?: true
    slug?: true
    updated_at?: true
    url?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    checksum?: true
    created_at?: true
    name?: true
    slug?: true
    updated_at?: true
    url?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    checksum?: true
    created_at?: true
    name?: true
    slug?: true
    updated_at?: true
    url?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    checksum: string
    created_at: Date
    name: string
    slug: string
    updated_at: Date
    url: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checksum?: boolean
    created_at?: boolean
    name?: boolean
    slug?: boolean
    updated_at?: boolean
    url?: boolean
    game?: boolean | Genre$gameArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checksum?: boolean
    created_at?: boolean
    name?: boolean
    slug?: boolean
    updated_at?: boolean
    url?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checksum?: boolean
    created_at?: boolean
    name?: boolean
    slug?: boolean
    updated_at?: boolean
    url?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    checksum?: boolean
    created_at?: boolean
    name?: boolean
    slug?: boolean
    updated_at?: boolean
    url?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checksum" | "created_at" | "name" | "slug" | "updated_at" | "url", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | Genre$gameArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      checksum: string
      created_at: Date
      name: string
      slug: string
      updated_at: Date
      url: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends Genre$gameArgs<ExtArgs> = {}>(args?: Subset<T, Genre$gameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */ 
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly checksum: FieldRef<"Genre", 'String'>
    readonly created_at: FieldRef<"Genre", 'DateTime'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly slug: FieldRef<"Genre", 'String'>
    readonly updated_at: FieldRef<"Genre", 'DateTime'>
    readonly url: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.game
   */
  export type Genre$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Cover
   */

  export type AggregateCover = {
    _count: CoverCountAggregateOutputType | null
    _avg: CoverAvgAggregateOutputType | null
    _sum: CoverSumAggregateOutputType | null
    _min: CoverMinAggregateOutputType | null
    _max: CoverMaxAggregateOutputType | null
  }

  export type CoverAvgAggregateOutputType = {
    id: number | null
    game_localization: number | null
    height: number | null
    width: number | null
  }

  export type CoverSumAggregateOutputType = {
    id: number | null
    game_localization: number[]
    height: number | null
    width: number | null
  }

  export type CoverMinAggregateOutputType = {
    id: number | null
    alpha_channel: boolean | null
    animated: boolean | null
    checksum: string | null
    height: number | null
    image_id: string | null
    url: string | null
    width: number | null
    downloaded_filename: string | null
  }

  export type CoverMaxAggregateOutputType = {
    id: number | null
    alpha_channel: boolean | null
    animated: boolean | null
    checksum: string | null
    height: number | null
    image_id: string | null
    url: string | null
    width: number | null
    downloaded_filename: string | null
  }

  export type CoverCountAggregateOutputType = {
    id: number
    alpha_channel: number
    animated: number
    checksum: number
    game_localization: number
    height: number
    image_id: number
    url: number
    width: number
    downloaded_filename: number
    _all: number
  }


  export type CoverAvgAggregateInputType = {
    id?: true
    game_localization?: true
    height?: true
    width?: true
  }

  export type CoverSumAggregateInputType = {
    id?: true
    game_localization?: true
    height?: true
    width?: true
  }

  export type CoverMinAggregateInputType = {
    id?: true
    alpha_channel?: true
    animated?: true
    checksum?: true
    height?: true
    image_id?: true
    url?: true
    width?: true
    downloaded_filename?: true
  }

  export type CoverMaxAggregateInputType = {
    id?: true
    alpha_channel?: true
    animated?: true
    checksum?: true
    height?: true
    image_id?: true
    url?: true
    width?: true
    downloaded_filename?: true
  }

  export type CoverCountAggregateInputType = {
    id?: true
    alpha_channel?: true
    animated?: true
    checksum?: true
    game_localization?: true
    height?: true
    image_id?: true
    url?: true
    width?: true
    downloaded_filename?: true
    _all?: true
  }

  export type CoverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cover to aggregate.
     */
    where?: CoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covers to fetch.
     */
    orderBy?: CoverOrderByWithRelationInput | CoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Covers
    **/
    _count?: true | CoverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoverMaxAggregateInputType
  }

  export type GetCoverAggregateType<T extends CoverAggregateArgs> = {
        [P in keyof T & keyof AggregateCover]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCover[P]>
      : GetScalarType<T[P], AggregateCover[P]>
  }




  export type CoverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverWhereInput
    orderBy?: CoverOrderByWithAggregationInput | CoverOrderByWithAggregationInput[]
    by: CoverScalarFieldEnum[] | CoverScalarFieldEnum
    having?: CoverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoverCountAggregateInputType | true
    _avg?: CoverAvgAggregateInputType
    _sum?: CoverSumAggregateInputType
    _min?: CoverMinAggregateInputType
    _max?: CoverMaxAggregateInputType
  }

  export type CoverGroupByOutputType = {
    id: number
    alpha_channel: boolean | null
    animated: boolean | null
    checksum: string | null
    game_localization: number[]
    height: number | null
    image_id: string | null
    url: string | null
    width: number | null
    downloaded_filename: string | null
    _count: CoverCountAggregateOutputType | null
    _avg: CoverAvgAggregateOutputType | null
    _sum: CoverSumAggregateOutputType | null
    _min: CoverMinAggregateOutputType | null
    _max: CoverMaxAggregateOutputType | null
  }

  type GetCoverGroupByPayload<T extends CoverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoverGroupByOutputType[P]>
            : GetScalarType<T[P], CoverGroupByOutputType[P]>
        }
      >
    >


  export type CoverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alpha_channel?: boolean
    animated?: boolean
    checksum?: boolean
    game_localization?: boolean
    height?: boolean
    image_id?: boolean
    url?: boolean
    width?: boolean
    downloaded_filename?: boolean
    game?: boolean | Cover$gameArgs<ExtArgs>
    _count?: boolean | CoverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cover"]>

  export type CoverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alpha_channel?: boolean
    animated?: boolean
    checksum?: boolean
    game_localization?: boolean
    height?: boolean
    image_id?: boolean
    url?: boolean
    width?: boolean
    downloaded_filename?: boolean
  }, ExtArgs["result"]["cover"]>

  export type CoverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alpha_channel?: boolean
    animated?: boolean
    checksum?: boolean
    game_localization?: boolean
    height?: boolean
    image_id?: boolean
    url?: boolean
    width?: boolean
    downloaded_filename?: boolean
  }, ExtArgs["result"]["cover"]>

  export type CoverSelectScalar = {
    id?: boolean
    alpha_channel?: boolean
    animated?: boolean
    checksum?: boolean
    game_localization?: boolean
    height?: boolean
    image_id?: boolean
    url?: boolean
    width?: boolean
    downloaded_filename?: boolean
  }

  export type CoverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alpha_channel" | "animated" | "checksum" | "game_localization" | "height" | "image_id" | "url" | "width" | "downloaded_filename", ExtArgs["result"]["cover"]>
  export type CoverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | Cover$gameArgs<ExtArgs>
    _count?: boolean | CoverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CoverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cover"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alpha_channel: boolean | null
      animated: boolean | null
      checksum: string | null
      game_localization: number[]
      height: number | null
      image_id: string | null
      url: string | null
      width: number | null
      downloaded_filename: string | null
    }, ExtArgs["result"]["cover"]>
    composites: {}
  }

  type CoverGetPayload<S extends boolean | null | undefined | CoverDefaultArgs> = $Result.GetResult<Prisma.$CoverPayload, S>

  type CoverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoverCountAggregateInputType | true
    }

  export interface CoverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cover'], meta: { name: 'Cover' } }
    /**
     * Find zero or one Cover that matches the filter.
     * @param {CoverFindUniqueArgs} args - Arguments to find a Cover
     * @example
     * // Get one Cover
     * const cover = await prisma.cover.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoverFindUniqueArgs>(args: SelectSubset<T, CoverFindUniqueArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cover that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoverFindUniqueOrThrowArgs} args - Arguments to find a Cover
     * @example
     * // Get one Cover
     * const cover = await prisma.cover.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoverFindUniqueOrThrowArgs>(args: SelectSubset<T, CoverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cover that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverFindFirstArgs} args - Arguments to find a Cover
     * @example
     * // Get one Cover
     * const cover = await prisma.cover.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoverFindFirstArgs>(args?: SelectSubset<T, CoverFindFirstArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cover that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverFindFirstOrThrowArgs} args - Arguments to find a Cover
     * @example
     * // Get one Cover
     * const cover = await prisma.cover.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoverFindFirstOrThrowArgs>(args?: SelectSubset<T, CoverFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Covers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Covers
     * const covers = await prisma.cover.findMany()
     * 
     * // Get first 10 Covers
     * const covers = await prisma.cover.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coverWithIdOnly = await prisma.cover.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoverFindManyArgs>(args?: SelectSubset<T, CoverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cover.
     * @param {CoverCreateArgs} args - Arguments to create a Cover.
     * @example
     * // Create one Cover
     * const Cover = await prisma.cover.create({
     *   data: {
     *     // ... data to create a Cover
     *   }
     * })
     * 
     */
    create<T extends CoverCreateArgs>(args: SelectSubset<T, CoverCreateArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Covers.
     * @param {CoverCreateManyArgs} args - Arguments to create many Covers.
     * @example
     * // Create many Covers
     * const cover = await prisma.cover.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoverCreateManyArgs>(args?: SelectSubset<T, CoverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Covers and returns the data saved in the database.
     * @param {CoverCreateManyAndReturnArgs} args - Arguments to create many Covers.
     * @example
     * // Create many Covers
     * const cover = await prisma.cover.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Covers and only return the `id`
     * const coverWithIdOnly = await prisma.cover.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoverCreateManyAndReturnArgs>(args?: SelectSubset<T, CoverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cover.
     * @param {CoverDeleteArgs} args - Arguments to delete one Cover.
     * @example
     * // Delete one Cover
     * const Cover = await prisma.cover.delete({
     *   where: {
     *     // ... filter to delete one Cover
     *   }
     * })
     * 
     */
    delete<T extends CoverDeleteArgs>(args: SelectSubset<T, CoverDeleteArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cover.
     * @param {CoverUpdateArgs} args - Arguments to update one Cover.
     * @example
     * // Update one Cover
     * const cover = await prisma.cover.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoverUpdateArgs>(args: SelectSubset<T, CoverUpdateArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Covers.
     * @param {CoverDeleteManyArgs} args - Arguments to filter Covers to delete.
     * @example
     * // Delete a few Covers
     * const { count } = await prisma.cover.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoverDeleteManyArgs>(args?: SelectSubset<T, CoverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Covers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Covers
     * const cover = await prisma.cover.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoverUpdateManyArgs>(args: SelectSubset<T, CoverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Covers and returns the data updated in the database.
     * @param {CoverUpdateManyAndReturnArgs} args - Arguments to update many Covers.
     * @example
     * // Update many Covers
     * const cover = await prisma.cover.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Covers and only return the `id`
     * const coverWithIdOnly = await prisma.cover.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoverUpdateManyAndReturnArgs>(args: SelectSubset<T, CoverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cover.
     * @param {CoverUpsertArgs} args - Arguments to update or create a Cover.
     * @example
     * // Update or create a Cover
     * const cover = await prisma.cover.upsert({
     *   create: {
     *     // ... data to create a Cover
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cover we want to update
     *   }
     * })
     */
    upsert<T extends CoverUpsertArgs>(args: SelectSubset<T, CoverUpsertArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Covers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverCountArgs} args - Arguments to filter Covers to count.
     * @example
     * // Count the number of Covers
     * const count = await prisma.cover.count({
     *   where: {
     *     // ... the filter for the Covers we want to count
     *   }
     * })
    **/
    count<T extends CoverCountArgs>(
      args?: Subset<T, CoverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cover.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoverAggregateArgs>(args: Subset<T, CoverAggregateArgs>): Prisma.PrismaPromise<GetCoverAggregateType<T>>

    /**
     * Group by Cover.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoverGroupByArgs['orderBy'] }
        : { orderBy?: CoverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cover model
   */
  readonly fields: CoverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cover.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends Cover$gameArgs<ExtArgs> = {}>(args?: Subset<T, Cover$gameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cover model
   */ 
  interface CoverFieldRefs {
    readonly id: FieldRef<"Cover", 'Int'>
    readonly alpha_channel: FieldRef<"Cover", 'Boolean'>
    readonly animated: FieldRef<"Cover", 'Boolean'>
    readonly checksum: FieldRef<"Cover", 'String'>
    readonly game_localization: FieldRef<"Cover", 'Int[]'>
    readonly height: FieldRef<"Cover", 'Int'>
    readonly image_id: FieldRef<"Cover", 'String'>
    readonly url: FieldRef<"Cover", 'String'>
    readonly width: FieldRef<"Cover", 'Int'>
    readonly downloaded_filename: FieldRef<"Cover", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cover findUnique
   */
  export type CoverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter, which Cover to fetch.
     */
    where: CoverWhereUniqueInput
  }

  /**
   * Cover findUniqueOrThrow
   */
  export type CoverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter, which Cover to fetch.
     */
    where: CoverWhereUniqueInput
  }

  /**
   * Cover findFirst
   */
  export type CoverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter, which Cover to fetch.
     */
    where?: CoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covers to fetch.
     */
    orderBy?: CoverOrderByWithRelationInput | CoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Covers.
     */
    cursor?: CoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Covers.
     */
    distinct?: CoverScalarFieldEnum | CoverScalarFieldEnum[]
  }

  /**
   * Cover findFirstOrThrow
   */
  export type CoverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter, which Cover to fetch.
     */
    where?: CoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covers to fetch.
     */
    orderBy?: CoverOrderByWithRelationInput | CoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Covers.
     */
    cursor?: CoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Covers.
     */
    distinct?: CoverScalarFieldEnum | CoverScalarFieldEnum[]
  }

  /**
   * Cover findMany
   */
  export type CoverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter, which Covers to fetch.
     */
    where?: CoverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covers to fetch.
     */
    orderBy?: CoverOrderByWithRelationInput | CoverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Covers.
     */
    cursor?: CoverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covers.
     */
    skip?: number
    distinct?: CoverScalarFieldEnum | CoverScalarFieldEnum[]
  }

  /**
   * Cover create
   */
  export type CoverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * The data needed to create a Cover.
     */
    data: XOR<CoverCreateInput, CoverUncheckedCreateInput>
  }

  /**
   * Cover createMany
   */
  export type CoverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Covers.
     */
    data: CoverCreateManyInput | CoverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cover createManyAndReturn
   */
  export type CoverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * The data used to create many Covers.
     */
    data: CoverCreateManyInput | CoverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cover update
   */
  export type CoverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * The data needed to update a Cover.
     */
    data: XOR<CoverUpdateInput, CoverUncheckedUpdateInput>
    /**
     * Choose, which Cover to update.
     */
    where: CoverWhereUniqueInput
  }

  /**
   * Cover updateMany
   */
  export type CoverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Covers.
     */
    data: XOR<CoverUpdateManyMutationInput, CoverUncheckedUpdateManyInput>
    /**
     * Filter which Covers to update
     */
    where?: CoverWhereInput
    /**
     * Limit how many Covers to update.
     */
    limit?: number
  }

  /**
   * Cover updateManyAndReturn
   */
  export type CoverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * The data used to update Covers.
     */
    data: XOR<CoverUpdateManyMutationInput, CoverUncheckedUpdateManyInput>
    /**
     * Filter which Covers to update
     */
    where?: CoverWhereInput
    /**
     * Limit how many Covers to update.
     */
    limit?: number
  }

  /**
   * Cover upsert
   */
  export type CoverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * The filter to search for the Cover to update in case it exists.
     */
    where: CoverWhereUniqueInput
    /**
     * In case the Cover found by the `where` argument doesn't exist, create a new Cover with this data.
     */
    create: XOR<CoverCreateInput, CoverUncheckedCreateInput>
    /**
     * In case the Cover was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoverUpdateInput, CoverUncheckedUpdateInput>
  }

  /**
   * Cover delete
   */
  export type CoverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    /**
     * Filter which Cover to delete.
     */
    where: CoverWhereUniqueInput
  }

  /**
   * Cover deleteMany
   */
  export type CoverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Covers to delete
     */
    where?: CoverWhereInput
    /**
     * Limit how many Covers to delete.
     */
    limit?: number
  }

  /**
   * Cover.game
   */
  export type Cover$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Cover without action
   */
  export type CoverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
  }


  /**
   * Model Platform
   */

  export type AggregatePlatform = {
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  export type PlatformAvgAggregateOutputType = {
    id: number | null
    generation: number | null
    platform_family: number | null
    platform_logo: number | null
    platform_type: number | null
  }

  export type PlatformSumAggregateOutputType = {
    id: number | null
    generation: number | null
    platform_family: number | null
    platform_logo: number | null
    platform_type: number | null
  }

  export type PlatformMinAggregateOutputType = {
    id: number | null
    abbreviation: string | null
    alternative_name: string | null
    checksum: string | null
    created_at: Date | null
    generation: number | null
    name: string | null
    platform_family: number | null
    platform_logo: number | null
    platform_type: number | null
    slug: string | null
    summary: string | null
    updated_at: Date | null
    url: string | null
  }

  export type PlatformMaxAggregateOutputType = {
    id: number | null
    abbreviation: string | null
    alternative_name: string | null
    checksum: string | null
    created_at: Date | null
    generation: number | null
    name: string | null
    platform_family: number | null
    platform_logo: number | null
    platform_type: number | null
    slug: string | null
    summary: string | null
    updated_at: Date | null
    url: string | null
  }

  export type PlatformCountAggregateOutputType = {
    id: number
    abbreviation: number
    alternative_name: number
    checksum: number
    created_at: number
    generation: number
    name: number
    platform_family: number
    platform_logo: number
    platform_type: number
    slug: number
    summary: number
    updated_at: number
    url: number
    _all: number
  }


  export type PlatformAvgAggregateInputType = {
    id?: true
    generation?: true
    platform_family?: true
    platform_logo?: true
    platform_type?: true
  }

  export type PlatformSumAggregateInputType = {
    id?: true
    generation?: true
    platform_family?: true
    platform_logo?: true
    platform_type?: true
  }

  export type PlatformMinAggregateInputType = {
    id?: true
    abbreviation?: true
    alternative_name?: true
    checksum?: true
    created_at?: true
    generation?: true
    name?: true
    platform_family?: true
    platform_logo?: true
    platform_type?: true
    slug?: true
    summary?: true
    updated_at?: true
    url?: true
  }

  export type PlatformMaxAggregateInputType = {
    id?: true
    abbreviation?: true
    alternative_name?: true
    checksum?: true
    created_at?: true
    generation?: true
    name?: true
    platform_family?: true
    platform_logo?: true
    platform_type?: true
    slug?: true
    summary?: true
    updated_at?: true
    url?: true
  }

  export type PlatformCountAggregateInputType = {
    id?: true
    abbreviation?: true
    alternative_name?: true
    checksum?: true
    created_at?: true
    generation?: true
    name?: true
    platform_family?: true
    platform_logo?: true
    platform_type?: true
    slug?: true
    summary?: true
    updated_at?: true
    url?: true
    _all?: true
  }

  export type PlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platform to aggregate.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platforms
    **/
    _count?: true | PlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformMaxAggregateInputType
  }

  export type GetPlatformAggregateType<T extends PlatformAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatform[P]>
      : GetScalarType<T[P], AggregatePlatform[P]>
  }




  export type PlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithAggregationInput | PlatformOrderByWithAggregationInput[]
    by: PlatformScalarFieldEnum[] | PlatformScalarFieldEnum
    having?: PlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformCountAggregateInputType | true
    _avg?: PlatformAvgAggregateInputType
    _sum?: PlatformSumAggregateInputType
    _min?: PlatformMinAggregateInputType
    _max?: PlatformMaxAggregateInputType
  }

  export type PlatformGroupByOutputType = {
    id: number
    abbreviation: string | null
    alternative_name: string | null
    checksum: string | null
    created_at: Date
    generation: number | null
    name: string | null
    platform_family: number | null
    platform_logo: number | null
    platform_type: number | null
    slug: string | null
    summary: string | null
    updated_at: Date
    url: string | null
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  type GetPlatformGroupByPayload<T extends PlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    abbreviation?: boolean
    alternative_name?: boolean
    checksum?: boolean
    created_at?: boolean
    generation?: boolean
    name?: boolean
    platform_family?: boolean
    platform_logo?: boolean
    platform_type?: boolean
    slug?: boolean
    summary?: boolean
    updated_at?: boolean
    url?: boolean
    game?: boolean | Platform$gameArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    abbreviation?: boolean
    alternative_name?: boolean
    checksum?: boolean
    created_at?: boolean
    generation?: boolean
    name?: boolean
    platform_family?: boolean
    platform_logo?: boolean
    platform_type?: boolean
    slug?: boolean
    summary?: boolean
    updated_at?: boolean
    url?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    abbreviation?: boolean
    alternative_name?: boolean
    checksum?: boolean
    created_at?: boolean
    generation?: boolean
    name?: boolean
    platform_family?: boolean
    platform_logo?: boolean
    platform_type?: boolean
    slug?: boolean
    summary?: boolean
    updated_at?: boolean
    url?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectScalar = {
    id?: boolean
    abbreviation?: boolean
    alternative_name?: boolean
    checksum?: boolean
    created_at?: boolean
    generation?: boolean
    name?: boolean
    platform_family?: boolean
    platform_logo?: boolean
    platform_type?: boolean
    slug?: boolean
    summary?: boolean
    updated_at?: boolean
    url?: boolean
  }

  export type PlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "abbreviation" | "alternative_name" | "checksum" | "created_at" | "generation" | "name" | "platform_family" | "platform_logo" | "platform_type" | "slug" | "summary" | "updated_at" | "url", ExtArgs["result"]["platform"]>
  export type PlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | Platform$gameArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platform"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      abbreviation: string | null
      alternative_name: string | null
      checksum: string | null
      created_at: Date
      generation: number | null
      name: string | null
      platform_family: number | null
      platform_logo: number | null
      platform_type: number | null
      slug: string | null
      summary: string | null
      updated_at: Date
      url: string | null
    }, ExtArgs["result"]["platform"]>
    composites: {}
  }

  type PlatformGetPayload<S extends boolean | null | undefined | PlatformDefaultArgs> = $Result.GetResult<Prisma.$PlatformPayload, S>

  type PlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformCountAggregateInputType | true
    }

  export interface PlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platform'], meta: { name: 'Platform' } }
    /**
     * Find zero or one Platform that matches the filter.
     * @param {PlatformFindUniqueArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformFindUniqueArgs>(args: SelectSubset<T, PlatformFindUniqueArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformFindUniqueOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformFindFirstArgs>(args?: SelectSubset<T, PlatformFindFirstArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platform.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformWithIdOnly = await prisma.platform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformFindManyArgs>(args?: SelectSubset<T, PlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platform.
     * @param {PlatformCreateArgs} args - Arguments to create a Platform.
     * @example
     * // Create one Platform
     * const Platform = await prisma.platform.create({
     *   data: {
     *     // ... data to create a Platform
     *   }
     * })
     * 
     */
    create<T extends PlatformCreateArgs>(args: SelectSubset<T, PlatformCreateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platforms.
     * @param {PlatformCreateManyArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformCreateManyArgs>(args?: SelectSubset<T, PlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Platforms and returns the data saved in the database.
     * @param {PlatformCreateManyAndReturnArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Platform.
     * @param {PlatformDeleteArgs} args - Arguments to delete one Platform.
     * @example
     * // Delete one Platform
     * const Platform = await prisma.platform.delete({
     *   where: {
     *     // ... filter to delete one Platform
     *   }
     * })
     * 
     */
    delete<T extends PlatformDeleteArgs>(args: SelectSubset<T, PlatformDeleteArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platform.
     * @param {PlatformUpdateArgs} args - Arguments to update one Platform.
     * @example
     * // Update one Platform
     * const platform = await prisma.platform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformUpdateArgs>(args: SelectSubset<T, PlatformUpdateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platforms.
     * @param {PlatformDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformDeleteManyArgs>(args?: SelectSubset<T, PlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformUpdateManyArgs>(args: SelectSubset<T, PlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms and returns the data updated in the database.
     * @param {PlatformUpdateManyAndReturnArgs} args - Arguments to update many Platforms.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Platform.
     * @param {PlatformUpsertArgs} args - Arguments to update or create a Platform.
     * @example
     * // Update or create a Platform
     * const platform = await prisma.platform.upsert({
     *   create: {
     *     // ... data to create a Platform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platform we want to update
     *   }
     * })
     */
    upsert<T extends PlatformUpsertArgs>(args: SelectSubset<T, PlatformUpsertArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platform.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends PlatformCountArgs>(
      args?: Subset<T, PlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformAggregateArgs>(args: Subset<T, PlatformAggregateArgs>): Prisma.PrismaPromise<GetPlatformAggregateType<T>>

    /**
     * Group by Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformGroupByArgs['orderBy'] }
        : { orderBy?: PlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platform model
   */
  readonly fields: PlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends Platform$gameArgs<ExtArgs> = {}>(args?: Subset<T, Platform$gameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Platform model
   */ 
  interface PlatformFieldRefs {
    readonly id: FieldRef<"Platform", 'Int'>
    readonly abbreviation: FieldRef<"Platform", 'String'>
    readonly alternative_name: FieldRef<"Platform", 'String'>
    readonly checksum: FieldRef<"Platform", 'String'>
    readonly created_at: FieldRef<"Platform", 'DateTime'>
    readonly generation: FieldRef<"Platform", 'Int'>
    readonly name: FieldRef<"Platform", 'String'>
    readonly platform_family: FieldRef<"Platform", 'Int'>
    readonly platform_logo: FieldRef<"Platform", 'Int'>
    readonly platform_type: FieldRef<"Platform", 'Int'>
    readonly slug: FieldRef<"Platform", 'String'>
    readonly summary: FieldRef<"Platform", 'String'>
    readonly updated_at: FieldRef<"Platform", 'DateTime'>
    readonly url: FieldRef<"Platform", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Platform findUnique
   */
  export type PlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findUniqueOrThrow
   */
  export type PlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findFirst
   */
  export type PlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findFirstOrThrow
   */
  export type PlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findMany
   */
  export type PlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform create
   */
  export type PlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a Platform.
     */
    data: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
  }

  /**
   * Platform createMany
   */
  export type PlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform createManyAndReturn
   */
  export type PlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform update
   */
  export type PlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a Platform.
     */
    data: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
    /**
     * Choose, which Platform to update.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform updateMany
   */
  export type PlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform updateManyAndReturn
   */
  export type PlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform upsert
   */
  export type PlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the Platform to update in case it exists.
     */
    where: PlatformWhereUniqueInput
    /**
     * In case the Platform found by the `where` argument doesn't exist, create a new Platform with this data.
     */
    create: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
    /**
     * In case the Platform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
  }

  /**
   * Platform delete
   */
  export type PlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter which Platform to delete.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform deleteMany
   */
  export type PlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to delete
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to delete.
     */
    limit?: number
  }

  /**
   * Platform.game
   */
  export type Platform$gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Platform without action
   */
  export type PlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    age_ratings: number | null
    aggregated_rating: number | null
    aggregated_rating_count: number | null
    alternative_names: number | null
    artworks: number | null
    bundles: number | null
    collections: number | null
    coverId: number | null
    dlcs: number | null
    expanded_games: number | null
    expansions: number | null
    external_games: number | null
    first_release_date: number | null
    forks: number | null
    franchise: number | null
    franchises: number | null
    game_engines: number | null
    game_localizations: number | null
    game_modes: number | null
    game_status: number | null
    game_type: number | null
    hypes: number | null
    involved_companies: number | null
    keywords: number | null
    language_supports: number | null
    multiplayer_modes: number | null
    parent_game: number | null
    player_perspectives: number | null
    ports: number | null
    rating: number | null
    rating_count: number | null
    release_dates: number | null
    remakes: number | null
    remasters: number | null
    screenshots: number | null
    similar_games: number | null
    standalone_expansions: number | null
    tags: number | null
    themes: number | null
    total_rating: number | null
    total_rating_count: number | null
    version_parent: number | null
    videos: number | null
    websites: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    age_ratings: number[]
    aggregated_rating: number | null
    aggregated_rating_count: number | null
    alternative_names: number[]
    artworks: number[]
    bundles: number[]
    collections: number[]
    coverId: number | null
    dlcs: number[]
    expanded_games: number[]
    expansions: number[]
    external_games: number[]
    first_release_date: number | null
    forks: number[]
    franchise: number | null
    franchises: number[]
    game_engines: number[]
    game_localizations: number[]
    game_modes: number[]
    game_status: number | null
    game_type: number | null
    hypes: number | null
    involved_companies: number[]
    keywords: number[]
    language_supports: number[]
    multiplayer_modes: number[]
    parent_game: number | null
    player_perspectives: number[]
    ports: number[]
    rating: number | null
    rating_count: number | null
    release_dates: number[]
    remakes: number[]
    remasters: number[]
    screenshots: number[]
    similar_games: number[]
    standalone_expansions: number[]
    tags: number[]
    themes: number[]
    total_rating: number | null
    total_rating_count: number | null
    version_parent: number[]
    videos: number[]
    websites: number[]
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    aggregated_rating: number | null
    aggregated_rating_count: number | null
    checksum: string | null
    coverId: number | null
    created_at: Date | null
    first_release_date: number | null
    franchise: number | null
    game_status: number | null
    game_type: number | null
    hypes: number | null
    name: string | null
    parent_game: number | null
    rating: number | null
    rating_count: number | null
    slug: string | null
    storyline: string | null
    summary: string | null
    total_rating: number | null
    total_rating_count: number | null
    updated_at: Date | null
    url: string | null
    version_title: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    aggregated_rating: number | null
    aggregated_rating_count: number | null
    checksum: string | null
    coverId: number | null
    created_at: Date | null
    first_release_date: number | null
    franchise: number | null
    game_status: number | null
    game_type: number | null
    hypes: number | null
    name: string | null
    parent_game: number | null
    rating: number | null
    rating_count: number | null
    slug: string | null
    storyline: string | null
    summary: string | null
    total_rating: number | null
    total_rating_count: number | null
    updated_at: Date | null
    url: string | null
    version_title: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    age_ratings: number
    aggregated_rating: number
    aggregated_rating_count: number
    alternative_names: number
    artworks: number
    bundles: number
    checksum: number
    collections: number
    coverId: number
    created_at: number
    dlcs: number
    expanded_games: number
    expansions: number
    external_games: number
    first_release_date: number
    forks: number
    franchise: number
    franchises: number
    game_engines: number
    game_localizations: number
    game_modes: number
    game_status: number
    game_type: number
    hypes: number
    involved_companies: number
    keywords: number
    language_supports: number
    multiplayer_modes: number
    name: number
    parent_game: number
    player_perspectives: number
    ports: number
    rating: number
    rating_count: number
    release_dates: number
    remakes: number
    remasters: number
    screenshots: number
    similar_games: number
    slug: number
    standalone_expansions: number
    storyline: number
    summary: number
    tags: number
    themes: number
    total_rating: number
    total_rating_count: number
    updated_at: number
    url: number
    version_parent: number
    version_title: number
    videos: number
    websites: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    age_ratings?: true
    aggregated_rating?: true
    aggregated_rating_count?: true
    alternative_names?: true
    artworks?: true
    bundles?: true
    collections?: true
    coverId?: true
    dlcs?: true
    expanded_games?: true
    expansions?: true
    external_games?: true
    first_release_date?: true
    forks?: true
    franchise?: true
    franchises?: true
    game_engines?: true
    game_localizations?: true
    game_modes?: true
    game_status?: true
    game_type?: true
    hypes?: true
    involved_companies?: true
    keywords?: true
    language_supports?: true
    multiplayer_modes?: true
    parent_game?: true
    player_perspectives?: true
    ports?: true
    rating?: true
    rating_count?: true
    release_dates?: true
    remakes?: true
    remasters?: true
    screenshots?: true
    similar_games?: true
    standalone_expansions?: true
    tags?: true
    themes?: true
    total_rating?: true
    total_rating_count?: true
    version_parent?: true
    videos?: true
    websites?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    age_ratings?: true
    aggregated_rating?: true
    aggregated_rating_count?: true
    alternative_names?: true
    artworks?: true
    bundles?: true
    collections?: true
    coverId?: true
    dlcs?: true
    expanded_games?: true
    expansions?: true
    external_games?: true
    first_release_date?: true
    forks?: true
    franchise?: true
    franchises?: true
    game_engines?: true
    game_localizations?: true
    game_modes?: true
    game_status?: true
    game_type?: true
    hypes?: true
    involved_companies?: true
    keywords?: true
    language_supports?: true
    multiplayer_modes?: true
    parent_game?: true
    player_perspectives?: true
    ports?: true
    rating?: true
    rating_count?: true
    release_dates?: true
    remakes?: true
    remasters?: true
    screenshots?: true
    similar_games?: true
    standalone_expansions?: true
    tags?: true
    themes?: true
    total_rating?: true
    total_rating_count?: true
    version_parent?: true
    videos?: true
    websites?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    aggregated_rating?: true
    aggregated_rating_count?: true
    checksum?: true
    coverId?: true
    created_at?: true
    first_release_date?: true
    franchise?: true
    game_status?: true
    game_type?: true
    hypes?: true
    name?: true
    parent_game?: true
    rating?: true
    rating_count?: true
    slug?: true
    storyline?: true
    summary?: true
    total_rating?: true
    total_rating_count?: true
    updated_at?: true
    url?: true
    version_title?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    aggregated_rating?: true
    aggregated_rating_count?: true
    checksum?: true
    coverId?: true
    created_at?: true
    first_release_date?: true
    franchise?: true
    game_status?: true
    game_type?: true
    hypes?: true
    name?: true
    parent_game?: true
    rating?: true
    rating_count?: true
    slug?: true
    storyline?: true
    summary?: true
    total_rating?: true
    total_rating_count?: true
    updated_at?: true
    url?: true
    version_title?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    age_ratings?: true
    aggregated_rating?: true
    aggregated_rating_count?: true
    alternative_names?: true
    artworks?: true
    bundles?: true
    checksum?: true
    collections?: true
    coverId?: true
    created_at?: true
    dlcs?: true
    expanded_games?: true
    expansions?: true
    external_games?: true
    first_release_date?: true
    forks?: true
    franchise?: true
    franchises?: true
    game_engines?: true
    game_localizations?: true
    game_modes?: true
    game_status?: true
    game_type?: true
    hypes?: true
    involved_companies?: true
    keywords?: true
    language_supports?: true
    multiplayer_modes?: true
    name?: true
    parent_game?: true
    player_perspectives?: true
    ports?: true
    rating?: true
    rating_count?: true
    release_dates?: true
    remakes?: true
    remasters?: true
    screenshots?: true
    similar_games?: true
    slug?: true
    standalone_expansions?: true
    storyline?: true
    summary?: true
    tags?: true
    themes?: true
    total_rating?: true
    total_rating_count?: true
    updated_at?: true
    url?: true
    version_parent?: true
    version_title?: true
    videos?: true
    websites?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    age_ratings: number[]
    aggregated_rating: number | null
    aggregated_rating_count: number | null
    alternative_names: number[]
    artworks: number[]
    bundles: number[]
    checksum: string
    collections: number[]
    coverId: number | null
    created_at: Date
    dlcs: number[]
    expanded_games: number[]
    expansions: number[]
    external_games: number[]
    first_release_date: number | null
    forks: number[]
    franchise: number | null
    franchises: number[]
    game_engines: number[]
    game_localizations: number[]
    game_modes: number[]
    game_status: number | null
    game_type: number | null
    hypes: number | null
    involved_companies: number[]
    keywords: number[]
    language_supports: number[]
    multiplayer_modes: number[]
    name: string
    parent_game: number | null
    player_perspectives: number[]
    ports: number[]
    rating: number | null
    rating_count: number | null
    release_dates: number[]
    remakes: number[]
    remasters: number[]
    screenshots: number[]
    similar_games: number[]
    slug: string
    standalone_expansions: number[]
    storyline: string | null
    summary: string | null
    tags: number[]
    themes: number[]
    total_rating: number | null
    total_rating_count: number | null
    updated_at: Date
    url: string | null
    version_parent: number[]
    version_title: string | null
    videos: number[]
    websites: number[]
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    age_ratings?: boolean
    aggregated_rating?: boolean
    aggregated_rating_count?: boolean
    alternative_names?: boolean
    artworks?: boolean
    bundles?: boolean
    checksum?: boolean
    collections?: boolean
    coverId?: boolean
    created_at?: boolean
    dlcs?: boolean
    expanded_games?: boolean
    expansions?: boolean
    external_games?: boolean
    first_release_date?: boolean
    forks?: boolean
    franchise?: boolean
    franchises?: boolean
    game_engines?: boolean
    game_localizations?: boolean
    game_modes?: boolean
    game_status?: boolean
    game_type?: boolean
    hypes?: boolean
    involved_companies?: boolean
    keywords?: boolean
    language_supports?: boolean
    multiplayer_modes?: boolean
    name?: boolean
    parent_game?: boolean
    player_perspectives?: boolean
    ports?: boolean
    rating?: boolean
    rating_count?: boolean
    release_dates?: boolean
    remakes?: boolean
    remasters?: boolean
    screenshots?: boolean
    similar_games?: boolean
    slug?: boolean
    standalone_expansions?: boolean
    storyline?: boolean
    summary?: boolean
    tags?: boolean
    themes?: boolean
    total_rating?: boolean
    total_rating_count?: boolean
    updated_at?: boolean
    url?: boolean
    version_parent?: boolean
    version_title?: boolean
    videos?: boolean
    websites?: boolean
    cover?: boolean | Game$coverArgs<ExtArgs>
    genres?: boolean | Game$genresArgs<ExtArgs>
    platforms?: boolean | Game$platformsArgs<ExtArgs>
    gameStatus?: boolean | Game$gameStatusArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    age_ratings?: boolean
    aggregated_rating?: boolean
    aggregated_rating_count?: boolean
    alternative_names?: boolean
    artworks?: boolean
    bundles?: boolean
    checksum?: boolean
    collections?: boolean
    coverId?: boolean
    created_at?: boolean
    dlcs?: boolean
    expanded_games?: boolean
    expansions?: boolean
    external_games?: boolean
    first_release_date?: boolean
    forks?: boolean
    franchise?: boolean
    franchises?: boolean
    game_engines?: boolean
    game_localizations?: boolean
    game_modes?: boolean
    game_status?: boolean
    game_type?: boolean
    hypes?: boolean
    involved_companies?: boolean
    keywords?: boolean
    language_supports?: boolean
    multiplayer_modes?: boolean
    name?: boolean
    parent_game?: boolean
    player_perspectives?: boolean
    ports?: boolean
    rating?: boolean
    rating_count?: boolean
    release_dates?: boolean
    remakes?: boolean
    remasters?: boolean
    screenshots?: boolean
    similar_games?: boolean
    slug?: boolean
    standalone_expansions?: boolean
    storyline?: boolean
    summary?: boolean
    tags?: boolean
    themes?: boolean
    total_rating?: boolean
    total_rating_count?: boolean
    updated_at?: boolean
    url?: boolean
    version_parent?: boolean
    version_title?: boolean
    videos?: boolean
    websites?: boolean
    cover?: boolean | Game$coverArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    age_ratings?: boolean
    aggregated_rating?: boolean
    aggregated_rating_count?: boolean
    alternative_names?: boolean
    artworks?: boolean
    bundles?: boolean
    checksum?: boolean
    collections?: boolean
    coverId?: boolean
    created_at?: boolean
    dlcs?: boolean
    expanded_games?: boolean
    expansions?: boolean
    external_games?: boolean
    first_release_date?: boolean
    forks?: boolean
    franchise?: boolean
    franchises?: boolean
    game_engines?: boolean
    game_localizations?: boolean
    game_modes?: boolean
    game_status?: boolean
    game_type?: boolean
    hypes?: boolean
    involved_companies?: boolean
    keywords?: boolean
    language_supports?: boolean
    multiplayer_modes?: boolean
    name?: boolean
    parent_game?: boolean
    player_perspectives?: boolean
    ports?: boolean
    rating?: boolean
    rating_count?: boolean
    release_dates?: boolean
    remakes?: boolean
    remasters?: boolean
    screenshots?: boolean
    similar_games?: boolean
    slug?: boolean
    standalone_expansions?: boolean
    storyline?: boolean
    summary?: boolean
    tags?: boolean
    themes?: boolean
    total_rating?: boolean
    total_rating_count?: boolean
    updated_at?: boolean
    url?: boolean
    version_parent?: boolean
    version_title?: boolean
    videos?: boolean
    websites?: boolean
    cover?: boolean | Game$coverArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    age_ratings?: boolean
    aggregated_rating?: boolean
    aggregated_rating_count?: boolean
    alternative_names?: boolean
    artworks?: boolean
    bundles?: boolean
    checksum?: boolean
    collections?: boolean
    coverId?: boolean
    created_at?: boolean
    dlcs?: boolean
    expanded_games?: boolean
    expansions?: boolean
    external_games?: boolean
    first_release_date?: boolean
    forks?: boolean
    franchise?: boolean
    franchises?: boolean
    game_engines?: boolean
    game_localizations?: boolean
    game_modes?: boolean
    game_status?: boolean
    game_type?: boolean
    hypes?: boolean
    involved_companies?: boolean
    keywords?: boolean
    language_supports?: boolean
    multiplayer_modes?: boolean
    name?: boolean
    parent_game?: boolean
    player_perspectives?: boolean
    ports?: boolean
    rating?: boolean
    rating_count?: boolean
    release_dates?: boolean
    remakes?: boolean
    remasters?: boolean
    screenshots?: boolean
    similar_games?: boolean
    slug?: boolean
    standalone_expansions?: boolean
    storyline?: boolean
    summary?: boolean
    tags?: boolean
    themes?: boolean
    total_rating?: boolean
    total_rating_count?: boolean
    updated_at?: boolean
    url?: boolean
    version_parent?: boolean
    version_title?: boolean
    videos?: boolean
    websites?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "age_ratings" | "aggregated_rating" | "aggregated_rating_count" | "alternative_names" | "artworks" | "bundles" | "checksum" | "collections" | "coverId" | "created_at" | "dlcs" | "expanded_games" | "expansions" | "external_games" | "first_release_date" | "forks" | "franchise" | "franchises" | "game_engines" | "game_localizations" | "game_modes" | "game_status" | "game_type" | "hypes" | "involved_companies" | "keywords" | "language_supports" | "multiplayer_modes" | "name" | "parent_game" | "player_perspectives" | "ports" | "rating" | "rating_count" | "release_dates" | "remakes" | "remasters" | "screenshots" | "similar_games" | "slug" | "standalone_expansions" | "storyline" | "summary" | "tags" | "themes" | "total_rating" | "total_rating_count" | "updated_at" | "url" | "version_parent" | "version_title" | "videos" | "websites", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cover?: boolean | Game$coverArgs<ExtArgs>
    genres?: boolean | Game$genresArgs<ExtArgs>
    platforms?: boolean | Game$platformsArgs<ExtArgs>
    gameStatus?: boolean | Game$gameStatusArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cover?: boolean | Game$coverArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cover?: boolean | Game$coverArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      cover: Prisma.$CoverPayload<ExtArgs> | null
      genres: Prisma.$GenrePayload<ExtArgs>[]
      platforms: Prisma.$PlatformPayload<ExtArgs>[]
      gameStatus: Prisma.$GameStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      age_ratings: number[]
      aggregated_rating: number | null
      aggregated_rating_count: number | null
      alternative_names: number[]
      artworks: number[]
      bundles: number[]
      checksum: string
      collections: number[]
      coverId: number | null
      created_at: Date
      dlcs: number[]
      expanded_games: number[]
      expansions: number[]
      external_games: number[]
      first_release_date: number | null
      forks: number[]
      franchise: number | null
      franchises: number[]
      game_engines: number[]
      game_localizations: number[]
      game_modes: number[]
      game_status: number | null
      game_type: number | null
      hypes: number | null
      involved_companies: number[]
      keywords: number[]
      language_supports: number[]
      multiplayer_modes: number[]
      name: string
      parent_game: number | null
      player_perspectives: number[]
      ports: number[]
      rating: number | null
      rating_count: number | null
      release_dates: number[]
      remakes: number[]
      remasters: number[]
      screenshots: number[]
      similar_games: number[]
      slug: string
      standalone_expansions: number[]
      storyline: string | null
      summary: string | null
      tags: number[]
      themes: number[]
      total_rating: number | null
      total_rating_count: number | null
      updated_at: Date
      url: string | null
      version_parent: number[]
      version_title: string | null
      videos: number[]
      websites: number[]
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cover<T extends Game$coverArgs<ExtArgs> = {}>(args?: Subset<T, Game$coverArgs<ExtArgs>>): Prisma__CoverClient<$Result.GetResult<Prisma.$CoverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    genres<T extends Game$genresArgs<ExtArgs> = {}>(args?: Subset<T, Game$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    platforms<T extends Game$platformsArgs<ExtArgs> = {}>(args?: Subset<T, Game$platformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameStatus<T extends Game$gameStatusArgs<ExtArgs> = {}>(args?: Subset<T, Game$gameStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */ 
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly age_ratings: FieldRef<"Game", 'Int[]'>
    readonly aggregated_rating: FieldRef<"Game", 'Float'>
    readonly aggregated_rating_count: FieldRef<"Game", 'Int'>
    readonly alternative_names: FieldRef<"Game", 'Int[]'>
    readonly artworks: FieldRef<"Game", 'Int[]'>
    readonly bundles: FieldRef<"Game", 'Int[]'>
    readonly checksum: FieldRef<"Game", 'String'>
    readonly collections: FieldRef<"Game", 'Int[]'>
    readonly coverId: FieldRef<"Game", 'Int'>
    readonly created_at: FieldRef<"Game", 'DateTime'>
    readonly dlcs: FieldRef<"Game", 'Int[]'>
    readonly expanded_games: FieldRef<"Game", 'Int[]'>
    readonly expansions: FieldRef<"Game", 'Int[]'>
    readonly external_games: FieldRef<"Game", 'Int[]'>
    readonly first_release_date: FieldRef<"Game", 'Int'>
    readonly forks: FieldRef<"Game", 'Int[]'>
    readonly franchise: FieldRef<"Game", 'Int'>
    readonly franchises: FieldRef<"Game", 'Int[]'>
    readonly game_engines: FieldRef<"Game", 'Int[]'>
    readonly game_localizations: FieldRef<"Game", 'Int[]'>
    readonly game_modes: FieldRef<"Game", 'Int[]'>
    readonly game_status: FieldRef<"Game", 'Int'>
    readonly game_type: FieldRef<"Game", 'Int'>
    readonly hypes: FieldRef<"Game", 'Int'>
    readonly involved_companies: FieldRef<"Game", 'Int[]'>
    readonly keywords: FieldRef<"Game", 'Int[]'>
    readonly language_supports: FieldRef<"Game", 'Int[]'>
    readonly multiplayer_modes: FieldRef<"Game", 'Int[]'>
    readonly name: FieldRef<"Game", 'String'>
    readonly parent_game: FieldRef<"Game", 'Int'>
    readonly player_perspectives: FieldRef<"Game", 'Int[]'>
    readonly ports: FieldRef<"Game", 'Int[]'>
    readonly rating: FieldRef<"Game", 'Float'>
    readonly rating_count: FieldRef<"Game", 'Int'>
    readonly release_dates: FieldRef<"Game", 'Int[]'>
    readonly remakes: FieldRef<"Game", 'Int[]'>
    readonly remasters: FieldRef<"Game", 'Int[]'>
    readonly screenshots: FieldRef<"Game", 'Int[]'>
    readonly similar_games: FieldRef<"Game", 'Int[]'>
    readonly slug: FieldRef<"Game", 'String'>
    readonly standalone_expansions: FieldRef<"Game", 'Int[]'>
    readonly storyline: FieldRef<"Game", 'String'>
    readonly summary: FieldRef<"Game", 'String'>
    readonly tags: FieldRef<"Game", 'Int[]'>
    readonly themes: FieldRef<"Game", 'Int[]'>
    readonly total_rating: FieldRef<"Game", 'Float'>
    readonly total_rating_count: FieldRef<"Game", 'Int'>
    readonly updated_at: FieldRef<"Game", 'DateTime'>
    readonly url: FieldRef<"Game", 'String'>
    readonly version_parent: FieldRef<"Game", 'Int[]'>
    readonly version_title: FieldRef<"Game", 'String'>
    readonly videos: FieldRef<"Game", 'Int[]'>
    readonly websites: FieldRef<"Game", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.cover
   */
  export type Game$coverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cover
     */
    select?: CoverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cover
     */
    omit?: CoverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverInclude<ExtArgs> | null
    where?: CoverWhereInput
  }

  /**
   * Game.genres
   */
  export type Game$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Game.platforms
   */
  export type Game$platformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    cursor?: PlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Game.gameStatus
   */
  export type Game$gameStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    where?: GameStatusWhereInput
    orderBy?: GameStatusOrderByWithRelationInput | GameStatusOrderByWithRelationInput[]
    cursor?: GameStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameStatusScalarFieldEnum | GameStatusScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    gameStatus?: boolean | User$gameStatusArgs<ExtArgs>
    UserSettings?: boolean | User$UserSettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    gameStatus?: boolean | User$gameStatusArgs<ExtArgs>
    UserSettings?: boolean | User$UserSettingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      gameStatus: Prisma.$GameStatusPayload<ExtArgs>[]
      UserSettings: Prisma.$UserSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameStatus<T extends User$gameStatusArgs<ExtArgs> = {}>(args?: Subset<T, User$gameStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserSettings<T extends User$UserSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$UserSettingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.gameStatus
   */
  export type User$gameStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStatus
     */
    select?: GameStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameStatus
     */
    omit?: GameStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStatusInclude<ExtArgs> | null
    where?: GameStatusWhereInput
    orderBy?: GameStatusOrderByWithRelationInput | GameStatusOrderByWithRelationInput[]
    cursor?: GameStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameStatusScalarFieldEnum | GameStatusScalarFieldEnum[]
  }

  /**
   * User.UserSettings
   */
  export type User$UserSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */ 
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GameStatusScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    status: 'status',
    notes: 'notes',
    userId: 'userId',
    igdbGameId: 'igdbGameId'
  };

  export type GameStatusScalarFieldEnum = (typeof GameStatusScalarFieldEnum)[keyof typeof GameStatusScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    theme: 'theme',
    userId: 'userId'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const IGDBAuthScalarFieldEnum: {
    id: 'id',
    access_token: 'access_token',
    expires: 'expires',
    updatedAt: 'updatedAt'
  };

  export type IGDBAuthScalarFieldEnum = (typeof IGDBAuthScalarFieldEnum)[keyof typeof IGDBAuthScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    checksum: 'checksum',
    created_at: 'created_at',
    name: 'name',
    slug: 'slug',
    updated_at: 'updated_at',
    url: 'url'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const CoverScalarFieldEnum: {
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

  export type CoverScalarFieldEnum = (typeof CoverScalarFieldEnum)[keyof typeof CoverScalarFieldEnum]


  export const PlatformScalarFieldEnum: {
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

  export type PlatformScalarFieldEnum = (typeof PlatformScalarFieldEnum)[keyof typeof PlatformScalarFieldEnum]


  export const GameScalarFieldEnum: {
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

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
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

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Theme'
   */
  export type EnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme'>
    


  /**
   * Reference to a field of type 'Theme[]'
   */
  export type ListEnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GameStatusWhereInput = {
    AND?: GameStatusWhereInput | GameStatusWhereInput[]
    OR?: GameStatusWhereInput[]
    NOT?: GameStatusWhereInput | GameStatusWhereInput[]
    id?: IntFilter<"GameStatus"> | number
    platform?: StringFilter<"GameStatus"> | string
    status?: EnumStatusFilter<"GameStatus"> | $Enums.Status
    notes?: StringNullableFilter<"GameStatus"> | string | null
    userId?: StringFilter<"GameStatus"> | string
    igdbGameId?: IntNullableFilter<"GameStatus"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    igdbGame?: XOR<GameNullableScalarRelationFilter, GameWhereInput> | null
  }

  export type GameStatusOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    igdbGameId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    igdbGame?: GameOrderByWithRelationInput
  }

  export type GameStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameStatusWhereInput | GameStatusWhereInput[]
    OR?: GameStatusWhereInput[]
    NOT?: GameStatusWhereInput | GameStatusWhereInput[]
    platform?: StringFilter<"GameStatus"> | string
    status?: EnumStatusFilter<"GameStatus"> | $Enums.Status
    notes?: StringNullableFilter<"GameStatus"> | string | null
    userId?: StringFilter<"GameStatus"> | string
    igdbGameId?: IntNullableFilter<"GameStatus"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    igdbGame?: XOR<GameNullableScalarRelationFilter, GameWhereInput> | null
  }, "id">

  export type GameStatusOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    igdbGameId?: SortOrderInput | SortOrder
    _count?: GameStatusCountOrderByAggregateInput
    _avg?: GameStatusAvgOrderByAggregateInput
    _max?: GameStatusMaxOrderByAggregateInput
    _min?: GameStatusMinOrderByAggregateInput
    _sum?: GameStatusSumOrderByAggregateInput
  }

  export type GameStatusScalarWhereWithAggregatesInput = {
    AND?: GameStatusScalarWhereWithAggregatesInput | GameStatusScalarWhereWithAggregatesInput[]
    OR?: GameStatusScalarWhereWithAggregatesInput[]
    NOT?: GameStatusScalarWhereWithAggregatesInput | GameStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameStatus"> | number
    platform?: StringWithAggregatesFilter<"GameStatus"> | string
    status?: EnumStatusWithAggregatesFilter<"GameStatus"> | $Enums.Status
    notes?: StringNullableWithAggregatesFilter<"GameStatus"> | string | null
    userId?: StringWithAggregatesFilter<"GameStatus"> | string
    igdbGameId?: IntNullableWithAggregatesFilter<"GameStatus"> | number | null
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: IntFilter<"UserSettings"> | number
    theme?: EnumThemeFilter<"UserSettings"> | $Enums.Theme
    userId?: StringFilter<"UserSettings"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    theme?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    theme?: EnumThemeFilter<"UserSettings"> | $Enums.Theme
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    theme?: SortOrder
    userId?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _avg?: UserSettingsAvgOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
    _sum?: UserSettingsSumOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSettings"> | number
    theme?: EnumThemeWithAggregatesFilter<"UserSettings"> | $Enums.Theme
    userId?: StringWithAggregatesFilter<"UserSettings"> | string
  }

  export type IGDBAuthWhereInput = {
    AND?: IGDBAuthWhereInput | IGDBAuthWhereInput[]
    OR?: IGDBAuthWhereInput[]
    NOT?: IGDBAuthWhereInput | IGDBAuthWhereInput[]
    id?: IntFilter<"IGDBAuth"> | number
    access_token?: StringNullableFilter<"IGDBAuth"> | string | null
    expires?: DateTimeNullableFilter<"IGDBAuth"> | Date | string | null
    updatedAt?: DateTimeFilter<"IGDBAuth"> | Date | string
  }

  export type IGDBAuthOrderByWithRelationInput = {
    id?: SortOrder
    access_token?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type IGDBAuthWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IGDBAuthWhereInput | IGDBAuthWhereInput[]
    OR?: IGDBAuthWhereInput[]
    NOT?: IGDBAuthWhereInput | IGDBAuthWhereInput[]
    access_token?: StringNullableFilter<"IGDBAuth"> | string | null
    expires?: DateTimeNullableFilter<"IGDBAuth"> | Date | string | null
    updatedAt?: DateTimeFilter<"IGDBAuth"> | Date | string
  }, "id">

  export type IGDBAuthOrderByWithAggregationInput = {
    id?: SortOrder
    access_token?: SortOrderInput | SortOrder
    expires?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: IGDBAuthCountOrderByAggregateInput
    _avg?: IGDBAuthAvgOrderByAggregateInput
    _max?: IGDBAuthMaxOrderByAggregateInput
    _min?: IGDBAuthMinOrderByAggregateInput
    _sum?: IGDBAuthSumOrderByAggregateInput
  }

  export type IGDBAuthScalarWhereWithAggregatesInput = {
    AND?: IGDBAuthScalarWhereWithAggregatesInput | IGDBAuthScalarWhereWithAggregatesInput[]
    OR?: IGDBAuthScalarWhereWithAggregatesInput[]
    NOT?: IGDBAuthScalarWhereWithAggregatesInput | IGDBAuthScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IGDBAuth"> | number
    access_token?: StringNullableWithAggregatesFilter<"IGDBAuth"> | string | null
    expires?: DateTimeNullableWithAggregatesFilter<"IGDBAuth"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"IGDBAuth"> | Date | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    checksum?: StringFilter<"Genre"> | string
    created_at?: DateTimeFilter<"Genre"> | Date | string
    name?: StringFilter<"Genre"> | string
    slug?: StringFilter<"Genre"> | string
    updated_at?: DateTimeFilter<"Genre"> | Date | string
    url?: StringFilter<"Genre"> | string
    game?: GameListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    checksum?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
    game?: GameOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    checksum?: StringFilter<"Genre"> | string
    created_at?: DateTimeFilter<"Genre"> | Date | string
    name?: StringFilter<"Genre"> | string
    slug?: StringFilter<"Genre"> | string
    updated_at?: DateTimeFilter<"Genre"> | Date | string
    url?: StringFilter<"Genre"> | string
    game?: GameListRelationFilter
  }, "id" | "id">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    checksum?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    checksum?: StringWithAggregatesFilter<"Genre"> | string
    created_at?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    name?: StringWithAggregatesFilter<"Genre"> | string
    slug?: StringWithAggregatesFilter<"Genre"> | string
    updated_at?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    url?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type CoverWhereInput = {
    AND?: CoverWhereInput | CoverWhereInput[]
    OR?: CoverWhereInput[]
    NOT?: CoverWhereInput | CoverWhereInput[]
    id?: IntFilter<"Cover"> | number
    alpha_channel?: BoolNullableFilter<"Cover"> | boolean | null
    animated?: BoolNullableFilter<"Cover"> | boolean | null
    checksum?: StringNullableFilter<"Cover"> | string | null
    game_localization?: IntNullableListFilter<"Cover">
    height?: IntNullableFilter<"Cover"> | number | null
    image_id?: StringNullableFilter<"Cover"> | string | null
    url?: StringNullableFilter<"Cover"> | string | null
    width?: IntNullableFilter<"Cover"> | number | null
    downloaded_filename?: StringNullableFilter<"Cover"> | string | null
    game?: GameListRelationFilter
  }

  export type CoverOrderByWithRelationInput = {
    id?: SortOrder
    alpha_channel?: SortOrderInput | SortOrder
    animated?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    game_localization?: SortOrder
    height?: SortOrderInput | SortOrder
    image_id?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    downloaded_filename?: SortOrderInput | SortOrder
    game?: GameOrderByRelationAggregateInput
  }

  export type CoverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoverWhereInput | CoverWhereInput[]
    OR?: CoverWhereInput[]
    NOT?: CoverWhereInput | CoverWhereInput[]
    alpha_channel?: BoolNullableFilter<"Cover"> | boolean | null
    animated?: BoolNullableFilter<"Cover"> | boolean | null
    checksum?: StringNullableFilter<"Cover"> | string | null
    game_localization?: IntNullableListFilter<"Cover">
    height?: IntNullableFilter<"Cover"> | number | null
    image_id?: StringNullableFilter<"Cover"> | string | null
    url?: StringNullableFilter<"Cover"> | string | null
    width?: IntNullableFilter<"Cover"> | number | null
    downloaded_filename?: StringNullableFilter<"Cover"> | string | null
    game?: GameListRelationFilter
  }, "id" | "id">

  export type CoverOrderByWithAggregationInput = {
    id?: SortOrder
    alpha_channel?: SortOrderInput | SortOrder
    animated?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    game_localization?: SortOrder
    height?: SortOrderInput | SortOrder
    image_id?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    downloaded_filename?: SortOrderInput | SortOrder
    _count?: CoverCountOrderByAggregateInput
    _avg?: CoverAvgOrderByAggregateInput
    _max?: CoverMaxOrderByAggregateInput
    _min?: CoverMinOrderByAggregateInput
    _sum?: CoverSumOrderByAggregateInput
  }

  export type CoverScalarWhereWithAggregatesInput = {
    AND?: CoverScalarWhereWithAggregatesInput | CoverScalarWhereWithAggregatesInput[]
    OR?: CoverScalarWhereWithAggregatesInput[]
    NOT?: CoverScalarWhereWithAggregatesInput | CoverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cover"> | number
    alpha_channel?: BoolNullableWithAggregatesFilter<"Cover"> | boolean | null
    animated?: BoolNullableWithAggregatesFilter<"Cover"> | boolean | null
    checksum?: StringNullableWithAggregatesFilter<"Cover"> | string | null
    game_localization?: IntNullableListFilter<"Cover">
    height?: IntNullableWithAggregatesFilter<"Cover"> | number | null
    image_id?: StringNullableWithAggregatesFilter<"Cover"> | string | null
    url?: StringNullableWithAggregatesFilter<"Cover"> | string | null
    width?: IntNullableWithAggregatesFilter<"Cover"> | number | null
    downloaded_filename?: StringNullableWithAggregatesFilter<"Cover"> | string | null
  }

  export type PlatformWhereInput = {
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    id?: IntFilter<"Platform"> | number
    abbreviation?: StringNullableFilter<"Platform"> | string | null
    alternative_name?: StringNullableFilter<"Platform"> | string | null
    checksum?: StringNullableFilter<"Platform"> | string | null
    created_at?: DateTimeFilter<"Platform"> | Date | string
    generation?: IntNullableFilter<"Platform"> | number | null
    name?: StringNullableFilter<"Platform"> | string | null
    platform_family?: IntNullableFilter<"Platform"> | number | null
    platform_logo?: IntNullableFilter<"Platform"> | number | null
    platform_type?: IntNullableFilter<"Platform"> | number | null
    slug?: StringNullableFilter<"Platform"> | string | null
    summary?: StringNullableFilter<"Platform"> | string | null
    updated_at?: DateTimeFilter<"Platform"> | Date | string
    url?: StringNullableFilter<"Platform"> | string | null
    game?: GameListRelationFilter
  }

  export type PlatformOrderByWithRelationInput = {
    id?: SortOrder
    abbreviation?: SortOrderInput | SortOrder
    alternative_name?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    created_at?: SortOrder
    generation?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    platform_family?: SortOrderInput | SortOrder
    platform_logo?: SortOrderInput | SortOrder
    platform_type?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    url?: SortOrderInput | SortOrder
    game?: GameOrderByRelationAggregateInput
  }

  export type PlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    abbreviation?: StringNullableFilter<"Platform"> | string | null
    alternative_name?: StringNullableFilter<"Platform"> | string | null
    checksum?: StringNullableFilter<"Platform"> | string | null
    created_at?: DateTimeFilter<"Platform"> | Date | string
    generation?: IntNullableFilter<"Platform"> | number | null
    name?: StringNullableFilter<"Platform"> | string | null
    platform_family?: IntNullableFilter<"Platform"> | number | null
    platform_logo?: IntNullableFilter<"Platform"> | number | null
    platform_type?: IntNullableFilter<"Platform"> | number | null
    slug?: StringNullableFilter<"Platform"> | string | null
    summary?: StringNullableFilter<"Platform"> | string | null
    updated_at?: DateTimeFilter<"Platform"> | Date | string
    url?: StringNullableFilter<"Platform"> | string | null
    game?: GameListRelationFilter
  }, "id" | "id">

  export type PlatformOrderByWithAggregationInput = {
    id?: SortOrder
    abbreviation?: SortOrderInput | SortOrder
    alternative_name?: SortOrderInput | SortOrder
    checksum?: SortOrderInput | SortOrder
    created_at?: SortOrder
    generation?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    platform_family?: SortOrderInput | SortOrder
    platform_logo?: SortOrderInput | SortOrder
    platform_type?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    url?: SortOrderInput | SortOrder
    _count?: PlatformCountOrderByAggregateInput
    _avg?: PlatformAvgOrderByAggregateInput
    _max?: PlatformMaxOrderByAggregateInput
    _min?: PlatformMinOrderByAggregateInput
    _sum?: PlatformSumOrderByAggregateInput
  }

  export type PlatformScalarWhereWithAggregatesInput = {
    AND?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    OR?: PlatformScalarWhereWithAggregatesInput[]
    NOT?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Platform"> | number
    abbreviation?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    alternative_name?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    checksum?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Platform"> | Date | string
    generation?: IntNullableWithAggregatesFilter<"Platform"> | number | null
    name?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    platform_family?: IntNullableWithAggregatesFilter<"Platform"> | number | null
    platform_logo?: IntNullableWithAggregatesFilter<"Platform"> | number | null
    platform_type?: IntNullableWithAggregatesFilter<"Platform"> | number | null
    slug?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"Platform"> | Date | string
    url?: StringNullableWithAggregatesFilter<"Platform"> | string | null
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    age_ratings?: IntNullableListFilter<"Game">
    aggregated_rating?: FloatNullableFilter<"Game"> | number | null
    aggregated_rating_count?: IntNullableFilter<"Game"> | number | null
    alternative_names?: IntNullableListFilter<"Game">
    artworks?: IntNullableListFilter<"Game">
    bundles?: IntNullableListFilter<"Game">
    checksum?: StringFilter<"Game"> | string
    collections?: IntNullableListFilter<"Game">
    coverId?: IntNullableFilter<"Game"> | number | null
    created_at?: DateTimeFilter<"Game"> | Date | string
    dlcs?: IntNullableListFilter<"Game">
    expanded_games?: IntNullableListFilter<"Game">
    expansions?: IntNullableListFilter<"Game">
    external_games?: IntNullableListFilter<"Game">
    first_release_date?: IntNullableFilter<"Game"> | number | null
    forks?: IntNullableListFilter<"Game">
    franchise?: IntNullableFilter<"Game"> | number | null
    franchises?: IntNullableListFilter<"Game">
    game_engines?: IntNullableListFilter<"Game">
    game_localizations?: IntNullableListFilter<"Game">
    game_modes?: IntNullableListFilter<"Game">
    game_status?: IntNullableFilter<"Game"> | number | null
    game_type?: IntNullableFilter<"Game"> | number | null
    hypes?: IntNullableFilter<"Game"> | number | null
    involved_companies?: IntNullableListFilter<"Game">
    keywords?: IntNullableListFilter<"Game">
    language_supports?: IntNullableListFilter<"Game">
    multiplayer_modes?: IntNullableListFilter<"Game">
    name?: StringFilter<"Game"> | string
    parent_game?: IntNullableFilter<"Game"> | number | null
    player_perspectives?: IntNullableListFilter<"Game">
    ports?: IntNullableListFilter<"Game">
    rating?: FloatNullableFilter<"Game"> | number | null
    rating_count?: IntNullableFilter<"Game"> | number | null
    release_dates?: IntNullableListFilter<"Game">
    remakes?: IntNullableListFilter<"Game">
    remasters?: IntNullableListFilter<"Game">
    screenshots?: IntNullableListFilter<"Game">
    similar_games?: IntNullableListFilter<"Game">
    slug?: StringFilter<"Game"> | string
    standalone_expansions?: IntNullableListFilter<"Game">
    storyline?: StringNullableFilter<"Game"> | string | null
    summary?: StringNullableFilter<"Game"> | string | null
    tags?: IntNullableListFilter<"Game">
    themes?: IntNullableListFilter<"Game">
    total_rating?: FloatNullableFilter<"Game"> | number | null
    total_rating_count?: IntNullableFilter<"Game"> | number | null
    updated_at?: DateTimeFilter<"Game"> | Date | string
    url?: StringNullableFilter<"Game"> | string | null
    version_parent?: IntNullableListFilter<"Game">
    version_title?: StringNullableFilter<"Game"> | string | null
    videos?: IntNullableListFilter<"Game">
    websites?: IntNullableListFilter<"Game">
    cover?: XOR<CoverNullableScalarRelationFilter, CoverWhereInput> | null
    genres?: GenreListRelationFilter
    platforms?: PlatformListRelationFilter
    gameStatus?: GameStatusListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    age_ratings?: SortOrder
    aggregated_rating?: SortOrderInput | SortOrder
    aggregated_rating_count?: SortOrderInput | SortOrder
    alternative_names?: SortOrder
    artworks?: SortOrder
    bundles?: SortOrder
    checksum?: SortOrder
    collections?: SortOrder
    coverId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    dlcs?: SortOrder
    expanded_games?: SortOrder
    expansions?: SortOrder
    external_games?: SortOrder
    first_release_date?: SortOrderInput | SortOrder
    forks?: SortOrder
    franchise?: SortOrderInput | SortOrder
    franchises?: SortOrder
    game_engines?: SortOrder
    game_localizations?: SortOrder
    game_modes?: SortOrder
    game_status?: SortOrderInput | SortOrder
    game_type?: SortOrderInput | SortOrder
    hypes?: SortOrderInput | SortOrder
    involved_companies?: SortOrder
    keywords?: SortOrder
    language_supports?: SortOrder
    multiplayer_modes?: SortOrder
    name?: SortOrder
    parent_game?: SortOrderInput | SortOrder
    player_perspectives?: SortOrder
    ports?: SortOrder
    rating?: SortOrderInput | SortOrder
    rating_count?: SortOrderInput | SortOrder
    release_dates?: SortOrder
    remakes?: SortOrder
    remasters?: SortOrder
    screenshots?: SortOrder
    similar_games?: SortOrder
    slug?: SortOrder
    standalone_expansions?: SortOrder
    storyline?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    tags?: SortOrder
    themes?: SortOrder
    total_rating?: SortOrderInput | SortOrder
    total_rating_count?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    url?: SortOrderInput | SortOrder
    version_parent?: SortOrder
    version_title?: SortOrderInput | SortOrder
    videos?: SortOrder
    websites?: SortOrder
    cover?: CoverOrderByWithRelationInput
    genres?: GenreOrderByRelationAggregateInput
    platforms?: PlatformOrderByRelationAggregateInput
    gameStatus?: GameStatusOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    age_ratings?: IntNullableListFilter<"Game">
    aggregated_rating?: FloatNullableFilter<"Game"> | number | null
    aggregated_rating_count?: IntNullableFilter<"Game"> | number | null
    alternative_names?: IntNullableListFilter<"Game">
    artworks?: IntNullableListFilter<"Game">
    bundles?: IntNullableListFilter<"Game">
    checksum?: StringFilter<"Game"> | string
    collections?: IntNullableListFilter<"Game">
    coverId?: IntNullableFilter<"Game"> | number | null
    created_at?: DateTimeFilter<"Game"> | Date | string
    dlcs?: IntNullableListFilter<"Game">
    expanded_games?: IntNullableListFilter<"Game">
    expansions?: IntNullableListFilter<"Game">
    external_games?: IntNullableListFilter<"Game">
    first_release_date?: IntNullableFilter<"Game"> | number | null
    forks?: IntNullableListFilter<"Game">
    franchise?: IntNullableFilter<"Game"> | number | null
    franchises?: IntNullableListFilter<"Game">
    game_engines?: IntNullableListFilter<"Game">
    game_localizations?: IntNullableListFilter<"Game">
    game_modes?: IntNullableListFilter<"Game">
    game_status?: IntNullableFilter<"Game"> | number | null
    game_type?: IntNullableFilter<"Game"> | number | null
    hypes?: IntNullableFilter<"Game"> | number | null
    involved_companies?: IntNullableListFilter<"Game">
    keywords?: IntNullableListFilter<"Game">
    language_supports?: IntNullableListFilter<"Game">
    multiplayer_modes?: IntNullableListFilter<"Game">
    name?: StringFilter<"Game"> | string
    parent_game?: IntNullableFilter<"Game"> | number | null
    player_perspectives?: IntNullableListFilter<"Game">
    ports?: IntNullableListFilter<"Game">
    rating?: FloatNullableFilter<"Game"> | number | null
    rating_count?: IntNullableFilter<"Game"> | number | null
    release_dates?: IntNullableListFilter<"Game">
    remakes?: IntNullableListFilter<"Game">
    remasters?: IntNullableListFilter<"Game">
    screenshots?: IntNullableListFilter<"Game">
    similar_games?: IntNullableListFilter<"Game">
    slug?: StringFilter<"Game"> | string
    standalone_expansions?: IntNullableListFilter<"Game">
    storyline?: StringNullableFilter<"Game"> | string | null
    summary?: StringNullableFilter<"Game"> | string | null
    tags?: IntNullableListFilter<"Game">
    themes?: IntNullableListFilter<"Game">
    total_rating?: FloatNullableFilter<"Game"> | number | null
    total_rating_count?: IntNullableFilter<"Game"> | number | null
    updated_at?: DateTimeFilter<"Game"> | Date | string
    url?: StringNullableFilter<"Game"> | string | null
    version_parent?: IntNullableListFilter<"Game">
    version_title?: StringNullableFilter<"Game"> | string | null
    videos?: IntNullableListFilter<"Game">
    websites?: IntNullableListFilter<"Game">
    cover?: XOR<CoverNullableScalarRelationFilter, CoverWhereInput> | null
    genres?: GenreListRelationFilter
    platforms?: PlatformListRelationFilter
    gameStatus?: GameStatusListRelationFilter
  }, "id" | "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    age_ratings?: SortOrder
    aggregated_rating?: SortOrderInput | SortOrder
    aggregated_rating_count?: SortOrderInput | SortOrder
    alternative_names?: SortOrder
    artworks?: SortOrder
    bundles?: SortOrder
    checksum?: SortOrder
    collections?: SortOrder
    coverId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    dlcs?: SortOrder
    expanded_games?: SortOrder
    expansions?: SortOrder
    external_games?: SortOrder
    first_release_date?: SortOrderInput | SortOrder
    forks?: SortOrder
    franchise?: SortOrderInput | SortOrder
    franchises?: SortOrder
    game_engines?: SortOrder
    game_localizations?: SortOrder
    game_modes?: SortOrder
    game_status?: SortOrderInput | SortOrder
    game_type?: SortOrderInput | SortOrder
    hypes?: SortOrderInput | SortOrder
    involved_companies?: SortOrder
    keywords?: SortOrder
    language_supports?: SortOrder
    multiplayer_modes?: SortOrder
    name?: SortOrder
    parent_game?: SortOrderInput | SortOrder
    player_perspectives?: SortOrder
    ports?: SortOrder
    rating?: SortOrderInput | SortOrder
    rating_count?: SortOrderInput | SortOrder
    release_dates?: SortOrder
    remakes?: SortOrder
    remasters?: SortOrder
    screenshots?: SortOrder
    similar_games?: SortOrder
    slug?: SortOrder
    standalone_expansions?: SortOrder
    storyline?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    tags?: SortOrder
    themes?: SortOrder
    total_rating?: SortOrderInput | SortOrder
    total_rating_count?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    url?: SortOrderInput | SortOrder
    version_parent?: SortOrder
    version_title?: SortOrderInput | SortOrder
    videos?: SortOrder
    websites?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    age_ratings?: IntNullableListFilter<"Game">
    aggregated_rating?: FloatNullableWithAggregatesFilter<"Game"> | number | null
    aggregated_rating_count?: IntNullableWithAggregatesFilter<"Game"> | number | null
    alternative_names?: IntNullableListFilter<"Game">
    artworks?: IntNullableListFilter<"Game">
    bundles?: IntNullableListFilter<"Game">
    checksum?: StringWithAggregatesFilter<"Game"> | string
    collections?: IntNullableListFilter<"Game">
    coverId?: IntNullableWithAggregatesFilter<"Game"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    dlcs?: IntNullableListFilter<"Game">
    expanded_games?: IntNullableListFilter<"Game">
    expansions?: IntNullableListFilter<"Game">
    external_games?: IntNullableListFilter<"Game">
    first_release_date?: IntNullableWithAggregatesFilter<"Game"> | number | null
    forks?: IntNullableListFilter<"Game">
    franchise?: IntNullableWithAggregatesFilter<"Game"> | number | null
    franchises?: IntNullableListFilter<"Game">
    game_engines?: IntNullableListFilter<"Game">
    game_localizations?: IntNullableListFilter<"Game">
    game_modes?: IntNullableListFilter<"Game">
    game_status?: IntNullableWithAggregatesFilter<"Game"> | number | null
    game_type?: IntNullableWithAggregatesFilter<"Game"> | number | null
    hypes?: IntNullableWithAggregatesFilter<"Game"> | number | null
    involved_companies?: IntNullableListFilter<"Game">
    keywords?: IntNullableListFilter<"Game">
    language_supports?: IntNullableListFilter<"Game">
    multiplayer_modes?: IntNullableListFilter<"Game">
    name?: StringWithAggregatesFilter<"Game"> | string
    parent_game?: IntNullableWithAggregatesFilter<"Game"> | number | null
    player_perspectives?: IntNullableListFilter<"Game">
    ports?: IntNullableListFilter<"Game">
    rating?: FloatNullableWithAggregatesFilter<"Game"> | number | null
    rating_count?: IntNullableWithAggregatesFilter<"Game"> | number | null
    release_dates?: IntNullableListFilter<"Game">
    remakes?: IntNullableListFilter<"Game">
    remasters?: IntNullableListFilter<"Game">
    screenshots?: IntNullableListFilter<"Game">
    similar_games?: IntNullableListFilter<"Game">
    slug?: StringWithAggregatesFilter<"Game"> | string
    standalone_expansions?: IntNullableListFilter<"Game">
    storyline?: StringNullableWithAggregatesFilter<"Game"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Game"> | string | null
    tags?: IntNullableListFilter<"Game">
    themes?: IntNullableListFilter<"Game">
    total_rating?: FloatNullableWithAggregatesFilter<"Game"> | number | null
    total_rating_count?: IntNullableWithAggregatesFilter<"Game"> | number | null
    updated_at?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    url?: StringNullableWithAggregatesFilter<"Game"> | string | null
    version_parent?: IntNullableListFilter<"Game">
    version_title?: StringNullableWithAggregatesFilter<"Game"> | string | null
    videos?: IntNullableListFilter<"Game">
    websites?: IntNullableListFilter<"Game">
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    gameStatus?: GameStatusListRelationFilter
    UserSettings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    gameStatus?: GameStatusOrderByRelationAggregateInput
    UserSettings?: UserSettingsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    gameStatus?: GameStatusListRelationFilter
    UserSettings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type GameStatusCreateInput = {
    platform: string
    status?: $Enums.Status
    notes?: string | null
    user: UserCreateNestedOneWithoutGameStatusInput
    igdbGame?: GameCreateNestedOneWithoutGameStatusInput
  }

  export type GameStatusUncheckedCreateInput = {
    id?: number
    platform: string
    status?: $Enums.Status
    notes?: string | null
    userId: string
    igdbGameId?: number | null
  }

  export type GameStatusUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGameStatusNestedInput
    igdbGame?: GameUpdateOneWithoutGameStatusNestedInput
  }

  export type GameStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    igdbGameId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GameStatusCreateManyInput = {
    id?: number
    platform: string
    status?: $Enums.Status
    notes?: string | null
    userId: string
    igdbGameId?: number | null
  }

  export type GameStatusUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    igdbGameId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserSettingsCreateInput = {
    theme?: $Enums.Theme
    user: UserCreateNestedOneWithoutUserSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: number
    theme?: $Enums.Theme
    userId: string
  }

  export type UserSettingsUpdateInput = {
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    user?: UserUpdateOneRequiredWithoutUserSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSettingsCreateManyInput = {
    id?: number
    theme?: $Enums.Theme
    userId: string
  }

  export type UserSettingsUpdateManyMutationInput = {
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IGDBAuthCreateInput = {
    access_token?: string | null
    expires?: Date | string | null
    updatedAt: Date | string
  }

  export type IGDBAuthUncheckedCreateInput = {
    id?: number
    access_token?: string | null
    expires?: Date | string | null
    updatedAt: Date | string
  }

  export type IGDBAuthUpdateInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IGDBAuthUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IGDBAuthCreateManyInput = {
    id?: number
    access_token?: string | null
    expires?: Date | string | null
    updatedAt: Date | string
  }

  export type IGDBAuthUpdateManyMutationInput = {
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IGDBAuthUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    id: number
    checksum: string
    created_at: Date | string
    name: string
    slug: string
    updated_at: Date | string
    url: string
    game?: GameCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id: number
    checksum: string
    created_at: Date | string
    name: string
    slug: string
    updated_at: Date | string
    url: string
    game?: GameUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checksum?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checksum?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    game?: GameUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id: number
    checksum: string
    created_at: Date | string
    name: string
    slug: string
    updated_at: Date | string
    url: string
  }

  export type GenreUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    checksum?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    checksum?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type CoverCreateInput = {
    id: number
    alpha_channel?: boolean | null
    animated?: boolean | null
    checksum?: string | null
    game_localization?: CoverCreategame_localizationInput | number[]
    height?: number | null
    image_id?: string | null
    url?: string | null
    width?: number | null
    downloaded_filename?: string | null
    game?: GameCreateNestedManyWithoutCoverInput
  }

  export type CoverUncheckedCreateInput = {
    id: number
    alpha_channel?: boolean | null
    animated?: boolean | null
    checksum?: string | null
    game_localization?: CoverCreategame_localizationInput | number[]
    height?: number | null
    image_id?: string | null
    url?: string | null
    width?: number | null
    downloaded_filename?: string | null
    game?: GameUncheckedCreateNestedManyWithoutCoverInput
  }

  export type CoverUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alpha_channel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    game_localization?: CoverUpdategame_localizationInput | number[]
    height?: NullableIntFieldUpdateOperationsInput | number | null
    image_id?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    downloaded_filename?: NullableStringFieldUpdateOperationsInput | string | null
    game?: GameUpdateManyWithoutCoverNestedInput
  }

  export type CoverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alpha_channel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    game_localization?: CoverUpdategame_localizationInput | number[]
    height?: NullableIntFieldUpdateOperationsInput | number | null
    image_id?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    downloaded_filename?: NullableStringFieldUpdateOperationsInput | string | null
    game?: GameUncheckedUpdateManyWithoutCoverNestedInput
  }

  export type CoverCreateManyInput = {
    id: number
    alpha_channel?: boolean | null
    animated?: boolean | null
    checksum?: string | null
    game_localization?: CoverCreategame_localizationInput | number[]
    height?: number | null
    image_id?: string | null
    url?: string | null
    width?: number | null
    downloaded_filename?: string | null
  }

  export type CoverUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    alpha_channel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    game_localization?: CoverUpdategame_localizationInput | number[]
    height?: NullableIntFieldUpdateOperationsInput | number | null
    image_id?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    downloaded_filename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alpha_channel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    game_localization?: CoverUpdategame_localizationInput | number[]
    height?: NullableIntFieldUpdateOperationsInput | number | null
    image_id?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    downloaded_filename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatformCreateInput = {
    id: number
    abbreviation?: string | null
    alternative_name?: string | null
    checksum?: string | null
    created_at: Date | string
    generation?: number | null
    name?: string | null
    platform_family?: number | null
    platform_logo?: number | null
    platform_type?: number | null
    slug?: string | null
    summary?: string | null
    updated_at: Date | string
    url?: string | null
    game?: GameCreateNestedManyWithoutPlatformsInput
  }

  export type PlatformUncheckedCreateInput = {
    id: number
    abbreviation?: string | null
    alternative_name?: string | null
    checksum?: string | null
    created_at: Date | string
    generation?: number | null
    name?: string | null
    platform_family?: number | null
    platform_logo?: number | null
    platform_type?: number | null
    slug?: string | null
    summary?: string | null
    updated_at: Date | string
    url?: string | null
    game?: GameUncheckedCreateNestedManyWithoutPlatformsInput
  }

  export type PlatformUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    alternative_name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_family?: NullableIntFieldUpdateOperationsInput | number | null
    platform_logo?: NullableIntFieldUpdateOperationsInput | number | null
    platform_type?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    game?: GameUpdateManyWithoutPlatformsNestedInput
  }

  export type PlatformUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    alternative_name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_family?: NullableIntFieldUpdateOperationsInput | number | null
    platform_logo?: NullableIntFieldUpdateOperationsInput | number | null
    platform_type?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    game?: GameUncheckedUpdateManyWithoutPlatformsNestedInput
  }

  export type PlatformCreateManyInput = {
    id: number
    abbreviation?: string | null
    alternative_name?: string | null
    checksum?: string | null
    created_at: Date | string
    generation?: number | null
    name?: string | null
    platform_family?: number | null
    platform_logo?: number | null
    platform_type?: number | null
    slug?: string | null
    summary?: string | null
    updated_at: Date | string
    url?: string | null
  }

  export type PlatformUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    alternative_name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_family?: NullableIntFieldUpdateOperationsInput | number | null
    platform_logo?: NullableIntFieldUpdateOperationsInput | number | null
    platform_type?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatformUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    alternative_name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_family?: NullableIntFieldUpdateOperationsInput | number | null
    platform_logo?: NullableIntFieldUpdateOperationsInput | number | null
    platform_type?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameCreateInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
    cover?: CoverCreateNestedOneWithoutGameInput
    genres?: GenreCreateNestedManyWithoutGameInput
    platforms?: PlatformCreateNestedManyWithoutGameInput
    gameStatus?: GameStatusCreateNestedManyWithoutIgdbGameInput
  }

  export type GameUncheckedCreateInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    coverId?: number | null
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
    genres?: GenreUncheckedCreateNestedManyWithoutGameInput
    platforms?: PlatformUncheckedCreateNestedManyWithoutGameInput
    gameStatus?: GameStatusUncheckedCreateNestedManyWithoutIgdbGameInput
  }

  export type GameUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
    cover?: CoverUpdateOneWithoutGameNestedInput
    genres?: GenreUpdateManyWithoutGameNestedInput
    platforms?: PlatformUpdateManyWithoutGameNestedInput
    gameStatus?: GameStatusUpdateManyWithoutIgdbGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    coverId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
    genres?: GenreUncheckedUpdateManyWithoutGameNestedInput
    platforms?: PlatformUncheckedUpdateManyWithoutGameNestedInput
    gameStatus?: GameStatusUncheckedUpdateManyWithoutIgdbGameNestedInput
  }

  export type GameCreateManyInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    coverId?: number | null
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
  }

  export type GameUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    coverId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    gameStatus?: GameStatusCreateNestedManyWithoutUserInput
    UserSettings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    gameStatus?: GameStatusUncheckedCreateNestedManyWithoutUserInput
    UserSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    gameStatus?: GameStatusUpdateManyWithoutUserNestedInput
    UserSettings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    gameStatus?: GameStatusUncheckedUpdateManyWithoutUserNestedInput
    UserSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GameNullableScalarRelationFilter = {
    is?: GameWhereInput | null
    isNot?: GameWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameStatusCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    igdbGameId?: SortOrder
  }

  export type GameStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    igdbGameId?: SortOrder
  }

  export type GameStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    igdbGameId?: SortOrder
  }

  export type GameStatusMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    igdbGameId?: SortOrder
  }

  export type GameStatusSumOrderByAggregateInput = {
    id?: SortOrder
    igdbGameId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IGDBAuthCountOrderByAggregateInput = {
    id?: SortOrder
    access_token?: SortOrder
    expires?: SortOrder
    updatedAt?: SortOrder
  }

  export type IGDBAuthAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IGDBAuthMaxOrderByAggregateInput = {
    id?: SortOrder
    access_token?: SortOrder
    expires?: SortOrder
    updatedAt?: SortOrder
  }

  export type IGDBAuthMinOrderByAggregateInput = {
    id?: SortOrder
    access_token?: SortOrder
    expires?: SortOrder
    updatedAt?: SortOrder
  }

  export type IGDBAuthSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    checksum?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    checksum?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    checksum?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CoverCountOrderByAggregateInput = {
    id?: SortOrder
    alpha_channel?: SortOrder
    animated?: SortOrder
    checksum?: SortOrder
    game_localization?: SortOrder
    height?: SortOrder
    image_id?: SortOrder
    url?: SortOrder
    width?: SortOrder
    downloaded_filename?: SortOrder
  }

  export type CoverAvgOrderByAggregateInput = {
    id?: SortOrder
    game_localization?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type CoverMaxOrderByAggregateInput = {
    id?: SortOrder
    alpha_channel?: SortOrder
    animated?: SortOrder
    checksum?: SortOrder
    height?: SortOrder
    image_id?: SortOrder
    url?: SortOrder
    width?: SortOrder
    downloaded_filename?: SortOrder
  }

  export type CoverMinOrderByAggregateInput = {
    id?: SortOrder
    alpha_channel?: SortOrder
    animated?: SortOrder
    checksum?: SortOrder
    height?: SortOrder
    image_id?: SortOrder
    url?: SortOrder
    width?: SortOrder
    downloaded_filename?: SortOrder
  }

  export type CoverSumOrderByAggregateInput = {
    id?: SortOrder
    game_localization?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PlatformCountOrderByAggregateInput = {
    id?: SortOrder
    abbreviation?: SortOrder
    alternative_name?: SortOrder
    checksum?: SortOrder
    created_at?: SortOrder
    generation?: SortOrder
    name?: SortOrder
    platform_family?: SortOrder
    platform_logo?: SortOrder
    platform_type?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
  }

  export type PlatformAvgOrderByAggregateInput = {
    id?: SortOrder
    generation?: SortOrder
    platform_family?: SortOrder
    platform_logo?: SortOrder
    platform_type?: SortOrder
  }

  export type PlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    abbreviation?: SortOrder
    alternative_name?: SortOrder
    checksum?: SortOrder
    created_at?: SortOrder
    generation?: SortOrder
    name?: SortOrder
    platform_family?: SortOrder
    platform_logo?: SortOrder
    platform_type?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
  }

  export type PlatformMinOrderByAggregateInput = {
    id?: SortOrder
    abbreviation?: SortOrder
    alternative_name?: SortOrder
    checksum?: SortOrder
    created_at?: SortOrder
    generation?: SortOrder
    name?: SortOrder
    platform_family?: SortOrder
    platform_logo?: SortOrder
    platform_type?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
  }

  export type PlatformSumOrderByAggregateInput = {
    id?: SortOrder
    generation?: SortOrder
    platform_family?: SortOrder
    platform_logo?: SortOrder
    platform_type?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CoverNullableScalarRelationFilter = {
    is?: CoverWhereInput | null
    isNot?: CoverWhereInput | null
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type PlatformListRelationFilter = {
    every?: PlatformWhereInput
    some?: PlatformWhereInput
    none?: PlatformWhereInput
  }

  export type GameStatusListRelationFilter = {
    every?: GameStatusWhereInput
    some?: GameStatusWhereInput
    none?: GameStatusWhereInput
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatformOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    age_ratings?: SortOrder
    aggregated_rating?: SortOrder
    aggregated_rating_count?: SortOrder
    alternative_names?: SortOrder
    artworks?: SortOrder
    bundles?: SortOrder
    checksum?: SortOrder
    collections?: SortOrder
    coverId?: SortOrder
    created_at?: SortOrder
    dlcs?: SortOrder
    expanded_games?: SortOrder
    expansions?: SortOrder
    external_games?: SortOrder
    first_release_date?: SortOrder
    forks?: SortOrder
    franchise?: SortOrder
    franchises?: SortOrder
    game_engines?: SortOrder
    game_localizations?: SortOrder
    game_modes?: SortOrder
    game_status?: SortOrder
    game_type?: SortOrder
    hypes?: SortOrder
    involved_companies?: SortOrder
    keywords?: SortOrder
    language_supports?: SortOrder
    multiplayer_modes?: SortOrder
    name?: SortOrder
    parent_game?: SortOrder
    player_perspectives?: SortOrder
    ports?: SortOrder
    rating?: SortOrder
    rating_count?: SortOrder
    release_dates?: SortOrder
    remakes?: SortOrder
    remasters?: SortOrder
    screenshots?: SortOrder
    similar_games?: SortOrder
    slug?: SortOrder
    standalone_expansions?: SortOrder
    storyline?: SortOrder
    summary?: SortOrder
    tags?: SortOrder
    themes?: SortOrder
    total_rating?: SortOrder
    total_rating_count?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
    version_parent?: SortOrder
    version_title?: SortOrder
    videos?: SortOrder
    websites?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    age_ratings?: SortOrder
    aggregated_rating?: SortOrder
    aggregated_rating_count?: SortOrder
    alternative_names?: SortOrder
    artworks?: SortOrder
    bundles?: SortOrder
    collections?: SortOrder
    coverId?: SortOrder
    dlcs?: SortOrder
    expanded_games?: SortOrder
    expansions?: SortOrder
    external_games?: SortOrder
    first_release_date?: SortOrder
    forks?: SortOrder
    franchise?: SortOrder
    franchises?: SortOrder
    game_engines?: SortOrder
    game_localizations?: SortOrder
    game_modes?: SortOrder
    game_status?: SortOrder
    game_type?: SortOrder
    hypes?: SortOrder
    involved_companies?: SortOrder
    keywords?: SortOrder
    language_supports?: SortOrder
    multiplayer_modes?: SortOrder
    parent_game?: SortOrder
    player_perspectives?: SortOrder
    ports?: SortOrder
    rating?: SortOrder
    rating_count?: SortOrder
    release_dates?: SortOrder
    remakes?: SortOrder
    remasters?: SortOrder
    screenshots?: SortOrder
    similar_games?: SortOrder
    standalone_expansions?: SortOrder
    tags?: SortOrder
    themes?: SortOrder
    total_rating?: SortOrder
    total_rating_count?: SortOrder
    version_parent?: SortOrder
    videos?: SortOrder
    websites?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    aggregated_rating?: SortOrder
    aggregated_rating_count?: SortOrder
    checksum?: SortOrder
    coverId?: SortOrder
    created_at?: SortOrder
    first_release_date?: SortOrder
    franchise?: SortOrder
    game_status?: SortOrder
    game_type?: SortOrder
    hypes?: SortOrder
    name?: SortOrder
    parent_game?: SortOrder
    rating?: SortOrder
    rating_count?: SortOrder
    slug?: SortOrder
    storyline?: SortOrder
    summary?: SortOrder
    total_rating?: SortOrder
    total_rating_count?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
    version_title?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    aggregated_rating?: SortOrder
    aggregated_rating_count?: SortOrder
    checksum?: SortOrder
    coverId?: SortOrder
    created_at?: SortOrder
    first_release_date?: SortOrder
    franchise?: SortOrder
    game_status?: SortOrder
    game_type?: SortOrder
    hypes?: SortOrder
    name?: SortOrder
    parent_game?: SortOrder
    rating?: SortOrder
    rating_count?: SortOrder
    slug?: SortOrder
    storyline?: SortOrder
    summary?: SortOrder
    total_rating?: SortOrder
    total_rating_count?: SortOrder
    updated_at?: SortOrder
    url?: SortOrder
    version_title?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    age_ratings?: SortOrder
    aggregated_rating?: SortOrder
    aggregated_rating_count?: SortOrder
    alternative_names?: SortOrder
    artworks?: SortOrder
    bundles?: SortOrder
    collections?: SortOrder
    coverId?: SortOrder
    dlcs?: SortOrder
    expanded_games?: SortOrder
    expansions?: SortOrder
    external_games?: SortOrder
    first_release_date?: SortOrder
    forks?: SortOrder
    franchise?: SortOrder
    franchises?: SortOrder
    game_engines?: SortOrder
    game_localizations?: SortOrder
    game_modes?: SortOrder
    game_status?: SortOrder
    game_type?: SortOrder
    hypes?: SortOrder
    involved_companies?: SortOrder
    keywords?: SortOrder
    language_supports?: SortOrder
    multiplayer_modes?: SortOrder
    parent_game?: SortOrder
    player_perspectives?: SortOrder
    ports?: SortOrder
    rating?: SortOrder
    rating_count?: SortOrder
    release_dates?: SortOrder
    remakes?: SortOrder
    remasters?: SortOrder
    screenshots?: SortOrder
    similar_games?: SortOrder
    standalone_expansions?: SortOrder
    tags?: SortOrder
    themes?: SortOrder
    total_rating?: SortOrder
    total_rating_count?: SortOrder
    version_parent?: SortOrder
    videos?: SortOrder
    websites?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutGameStatusInput = {
    create?: XOR<UserCreateWithoutGameStatusInput, UserUncheckedCreateWithoutGameStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameStatusInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutGameStatusInput = {
    create?: XOR<GameCreateWithoutGameStatusInput, GameUncheckedCreateWithoutGameStatusInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameStatusInput
    connect?: GameWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutGameStatusNestedInput = {
    create?: XOR<UserCreateWithoutGameStatusInput, UserUncheckedCreateWithoutGameStatusInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameStatusInput
    upsert?: UserUpsertWithoutGameStatusInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGameStatusInput, UserUpdateWithoutGameStatusInput>, UserUncheckedUpdateWithoutGameStatusInput>
  }

  export type GameUpdateOneWithoutGameStatusNestedInput = {
    create?: XOR<GameCreateWithoutGameStatusInput, GameUncheckedCreateWithoutGameStatusInput>
    connectOrCreate?: GameCreateOrConnectWithoutGameStatusInput
    upsert?: GameUpsertWithoutGameStatusInput
    disconnect?: GameWhereInput | boolean
    delete?: GameWhereInput | boolean
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutGameStatusInput, GameUpdateWithoutGameStatusInput>, GameUncheckedUpdateWithoutGameStatusInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutUserSettingsInput = {
    create?: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumThemeFieldUpdateOperationsInput = {
    set?: $Enums.Theme
  }

  export type UserUpdateOneRequiredWithoutUserSettingsNestedInput = {
    create?: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSettingsInput
    upsert?: UserUpsertWithoutUserSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSettingsInput, UserUpdateWithoutUserSettingsInput>, UserUncheckedUpdateWithoutUserSettingsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameCreateNestedManyWithoutGenresInput = {
    create?: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput> | GameCreateWithoutGenresInput[] | GameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: GameCreateOrConnectWithoutGenresInput | GameCreateOrConnectWithoutGenresInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput> | GameCreateWithoutGenresInput[] | GameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: GameCreateOrConnectWithoutGenresInput | GameCreateOrConnectWithoutGenresInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutGenresNestedInput = {
    create?: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput> | GameCreateWithoutGenresInput[] | GameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: GameCreateOrConnectWithoutGenresInput | GameCreateOrConnectWithoutGenresInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutGenresInput | GameUpsertWithWhereUniqueWithoutGenresInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutGenresInput | GameUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: GameUpdateManyWithWhereWithoutGenresInput | GameUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput> | GameCreateWithoutGenresInput[] | GameUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: GameCreateOrConnectWithoutGenresInput | GameCreateOrConnectWithoutGenresInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutGenresInput | GameUpsertWithWhereUniqueWithoutGenresInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutGenresInput | GameUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: GameUpdateManyWithWhereWithoutGenresInput | GameUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type CoverCreategame_localizationInput = {
    set: number[]
  }

  export type GameCreateNestedManyWithoutCoverInput = {
    create?: XOR<GameCreateWithoutCoverInput, GameUncheckedCreateWithoutCoverInput> | GameCreateWithoutCoverInput[] | GameUncheckedCreateWithoutCoverInput[]
    connectOrCreate?: GameCreateOrConnectWithoutCoverInput | GameCreateOrConnectWithoutCoverInput[]
    createMany?: GameCreateManyCoverInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutCoverInput = {
    create?: XOR<GameCreateWithoutCoverInput, GameUncheckedCreateWithoutCoverInput> | GameCreateWithoutCoverInput[] | GameUncheckedCreateWithoutCoverInput[]
    connectOrCreate?: GameCreateOrConnectWithoutCoverInput | GameCreateOrConnectWithoutCoverInput[]
    createMany?: GameCreateManyCoverInputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CoverUpdategame_localizationInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateManyWithoutCoverNestedInput = {
    create?: XOR<GameCreateWithoutCoverInput, GameUncheckedCreateWithoutCoverInput> | GameCreateWithoutCoverInput[] | GameUncheckedCreateWithoutCoverInput[]
    connectOrCreate?: GameCreateOrConnectWithoutCoverInput | GameCreateOrConnectWithoutCoverInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutCoverInput | GameUpsertWithWhereUniqueWithoutCoverInput[]
    createMany?: GameCreateManyCoverInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutCoverInput | GameUpdateWithWhereUniqueWithoutCoverInput[]
    updateMany?: GameUpdateManyWithWhereWithoutCoverInput | GameUpdateManyWithWhereWithoutCoverInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutCoverNestedInput = {
    create?: XOR<GameCreateWithoutCoverInput, GameUncheckedCreateWithoutCoverInput> | GameCreateWithoutCoverInput[] | GameUncheckedCreateWithoutCoverInput[]
    connectOrCreate?: GameCreateOrConnectWithoutCoverInput | GameCreateOrConnectWithoutCoverInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutCoverInput | GameUpsertWithWhereUniqueWithoutCoverInput[]
    createMany?: GameCreateManyCoverInputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutCoverInput | GameUpdateWithWhereUniqueWithoutCoverInput[]
    updateMany?: GameUpdateManyWithWhereWithoutCoverInput | GameUpdateManyWithWhereWithoutCoverInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameCreateNestedManyWithoutPlatformsInput = {
    create?: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput> | GameCreateWithoutPlatformsInput[] | GameUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput | GameCreateOrConnectWithoutPlatformsInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlatformsInput = {
    create?: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput> | GameCreateWithoutPlatformsInput[] | GameUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput | GameCreateOrConnectWithoutPlatformsInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUpdateManyWithoutPlatformsNestedInput = {
    create?: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput> | GameCreateWithoutPlatformsInput[] | GameUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput | GameCreateOrConnectWithoutPlatformsInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlatformsInput | GameUpsertWithWhereUniqueWithoutPlatformsInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlatformsInput | GameUpdateWithWhereUniqueWithoutPlatformsInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPlatformsInput | GameUpdateManyWithWhereWithoutPlatformsInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPlatformsNestedInput = {
    create?: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput> | GameCreateWithoutPlatformsInput[] | GameUncheckedCreateWithoutPlatformsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlatformsInput | GameCreateOrConnectWithoutPlatformsInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlatformsInput | GameUpsertWithWhereUniqueWithoutPlatformsInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlatformsInput | GameUpdateWithWhereUniqueWithoutPlatformsInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPlatformsInput | GameUpdateManyWithWhereWithoutPlatformsInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameCreateage_ratingsInput = {
    set: number[]
  }

  export type GameCreatealternative_namesInput = {
    set: number[]
  }

  export type GameCreateartworksInput = {
    set: number[]
  }

  export type GameCreatebundlesInput = {
    set: number[]
  }

  export type GameCreatecollectionsInput = {
    set: number[]
  }

  export type GameCreatedlcsInput = {
    set: number[]
  }

  export type GameCreateexpanded_gamesInput = {
    set: number[]
  }

  export type GameCreateexpansionsInput = {
    set: number[]
  }

  export type GameCreateexternal_gamesInput = {
    set: number[]
  }

  export type GameCreateforksInput = {
    set: number[]
  }

  export type GameCreatefranchisesInput = {
    set: number[]
  }

  export type GameCreategame_enginesInput = {
    set: number[]
  }

  export type GameCreategame_localizationsInput = {
    set: number[]
  }

  export type GameCreategame_modesInput = {
    set: number[]
  }

  export type GameCreateinvolved_companiesInput = {
    set: number[]
  }

  export type GameCreatekeywordsInput = {
    set: number[]
  }

  export type GameCreatelanguage_supportsInput = {
    set: number[]
  }

  export type GameCreatemultiplayer_modesInput = {
    set: number[]
  }

  export type GameCreateplayer_perspectivesInput = {
    set: number[]
  }

  export type GameCreateportsInput = {
    set: number[]
  }

  export type GameCreaterelease_datesInput = {
    set: number[]
  }

  export type GameCreateremakesInput = {
    set: number[]
  }

  export type GameCreateremastersInput = {
    set: number[]
  }

  export type GameCreatescreenshotsInput = {
    set: number[]
  }

  export type GameCreatesimilar_gamesInput = {
    set: number[]
  }

  export type GameCreatestandalone_expansionsInput = {
    set: number[]
  }

  export type GameCreatetagsInput = {
    set: number[]
  }

  export type GameCreatethemesInput = {
    set: number[]
  }

  export type GameCreateversion_parentInput = {
    set: number[]
  }

  export type GameCreatevideosInput = {
    set: number[]
  }

  export type GameCreatewebsitesInput = {
    set: number[]
  }

  export type CoverCreateNestedOneWithoutGameInput = {
    create?: XOR<CoverCreateWithoutGameInput, CoverUncheckedCreateWithoutGameInput>
    connectOrCreate?: CoverCreateOrConnectWithoutGameInput
    connect?: CoverWhereUniqueInput
  }

  export type GenreCreateNestedManyWithoutGameInput = {
    create?: XOR<GenreCreateWithoutGameInput, GenreUncheckedCreateWithoutGameInput> | GenreCreateWithoutGameInput[] | GenreUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutGameInput | GenreCreateOrConnectWithoutGameInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type PlatformCreateNestedManyWithoutGameInput = {
    create?: XOR<PlatformCreateWithoutGameInput, PlatformUncheckedCreateWithoutGameInput> | PlatformCreateWithoutGameInput[] | PlatformUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutGameInput | PlatformCreateOrConnectWithoutGameInput[]
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
  }

  export type GameStatusCreateNestedManyWithoutIgdbGameInput = {
    create?: XOR<GameStatusCreateWithoutIgdbGameInput, GameStatusUncheckedCreateWithoutIgdbGameInput> | GameStatusCreateWithoutIgdbGameInput[] | GameStatusUncheckedCreateWithoutIgdbGameInput[]
    connectOrCreate?: GameStatusCreateOrConnectWithoutIgdbGameInput | GameStatusCreateOrConnectWithoutIgdbGameInput[]
    createMany?: GameStatusCreateManyIgdbGameInputEnvelope
    connect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<GenreCreateWithoutGameInput, GenreUncheckedCreateWithoutGameInput> | GenreCreateWithoutGameInput[] | GenreUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutGameInput | GenreCreateOrConnectWithoutGameInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type PlatformUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PlatformCreateWithoutGameInput, PlatformUncheckedCreateWithoutGameInput> | PlatformCreateWithoutGameInput[] | PlatformUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutGameInput | PlatformCreateOrConnectWithoutGameInput[]
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
  }

  export type GameStatusUncheckedCreateNestedManyWithoutIgdbGameInput = {
    create?: XOR<GameStatusCreateWithoutIgdbGameInput, GameStatusUncheckedCreateWithoutIgdbGameInput> | GameStatusCreateWithoutIgdbGameInput[] | GameStatusUncheckedCreateWithoutIgdbGameInput[]
    connectOrCreate?: GameStatusCreateOrConnectWithoutIgdbGameInput | GameStatusCreateOrConnectWithoutIgdbGameInput[]
    createMany?: GameStatusCreateManyIgdbGameInputEnvelope
    connect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
  }

  export type GameUpdateage_ratingsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameUpdatealternative_namesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateartworksInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatebundlesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatecollectionsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatedlcsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateexpanded_gamesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateexpansionsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateexternal_gamesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateforksInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatefranchisesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdategame_enginesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdategame_localizationsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdategame_modesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateinvolved_companiesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatekeywordsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatelanguage_supportsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatemultiplayer_modesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateplayer_perspectivesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateportsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdaterelease_datesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateremakesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateremastersInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatescreenshotsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatesimilar_gamesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatestandalone_expansionsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatetagsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatethemesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdateversion_parentInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatevideosInput = {
    set?: number[]
    push?: number | number[]
  }

  export type GameUpdatewebsitesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type CoverUpdateOneWithoutGameNestedInput = {
    create?: XOR<CoverCreateWithoutGameInput, CoverUncheckedCreateWithoutGameInput>
    connectOrCreate?: CoverCreateOrConnectWithoutGameInput
    upsert?: CoverUpsertWithoutGameInput
    disconnect?: CoverWhereInput | boolean
    delete?: CoverWhereInput | boolean
    connect?: CoverWhereUniqueInput
    update?: XOR<XOR<CoverUpdateToOneWithWhereWithoutGameInput, CoverUpdateWithoutGameInput>, CoverUncheckedUpdateWithoutGameInput>
  }

  export type GenreUpdateManyWithoutGameNestedInput = {
    create?: XOR<GenreCreateWithoutGameInput, GenreUncheckedCreateWithoutGameInput> | GenreCreateWithoutGameInput[] | GenreUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutGameInput | GenreCreateOrConnectWithoutGameInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutGameInput | GenreUpsertWithWhereUniqueWithoutGameInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutGameInput | GenreUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutGameInput | GenreUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type PlatformUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlatformCreateWithoutGameInput, PlatformUncheckedCreateWithoutGameInput> | PlatformCreateWithoutGameInput[] | PlatformUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutGameInput | PlatformCreateOrConnectWithoutGameInput[]
    upsert?: PlatformUpsertWithWhereUniqueWithoutGameInput | PlatformUpsertWithWhereUniqueWithoutGameInput[]
    set?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    disconnect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    delete?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    update?: PlatformUpdateWithWhereUniqueWithoutGameInput | PlatformUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlatformUpdateManyWithWhereWithoutGameInput | PlatformUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
  }

  export type GameStatusUpdateManyWithoutIgdbGameNestedInput = {
    create?: XOR<GameStatusCreateWithoutIgdbGameInput, GameStatusUncheckedCreateWithoutIgdbGameInput> | GameStatusCreateWithoutIgdbGameInput[] | GameStatusUncheckedCreateWithoutIgdbGameInput[]
    connectOrCreate?: GameStatusCreateOrConnectWithoutIgdbGameInput | GameStatusCreateOrConnectWithoutIgdbGameInput[]
    upsert?: GameStatusUpsertWithWhereUniqueWithoutIgdbGameInput | GameStatusUpsertWithWhereUniqueWithoutIgdbGameInput[]
    createMany?: GameStatusCreateManyIgdbGameInputEnvelope
    set?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    disconnect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    delete?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    connect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    update?: GameStatusUpdateWithWhereUniqueWithoutIgdbGameInput | GameStatusUpdateWithWhereUniqueWithoutIgdbGameInput[]
    updateMany?: GameStatusUpdateManyWithWhereWithoutIgdbGameInput | GameStatusUpdateManyWithWhereWithoutIgdbGameInput[]
    deleteMany?: GameStatusScalarWhereInput | GameStatusScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<GenreCreateWithoutGameInput, GenreUncheckedCreateWithoutGameInput> | GenreCreateWithoutGameInput[] | GenreUncheckedCreateWithoutGameInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutGameInput | GenreCreateOrConnectWithoutGameInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutGameInput | GenreUpsertWithWhereUniqueWithoutGameInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutGameInput | GenreUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutGameInput | GenreUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type PlatformUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlatformCreateWithoutGameInput, PlatformUncheckedCreateWithoutGameInput> | PlatformCreateWithoutGameInput[] | PlatformUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlatformCreateOrConnectWithoutGameInput | PlatformCreateOrConnectWithoutGameInput[]
    upsert?: PlatformUpsertWithWhereUniqueWithoutGameInput | PlatformUpsertWithWhereUniqueWithoutGameInput[]
    set?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    disconnect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    delete?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    connect?: PlatformWhereUniqueInput | PlatformWhereUniqueInput[]
    update?: PlatformUpdateWithWhereUniqueWithoutGameInput | PlatformUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlatformUpdateManyWithWhereWithoutGameInput | PlatformUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
  }

  export type GameStatusUncheckedUpdateManyWithoutIgdbGameNestedInput = {
    create?: XOR<GameStatusCreateWithoutIgdbGameInput, GameStatusUncheckedCreateWithoutIgdbGameInput> | GameStatusCreateWithoutIgdbGameInput[] | GameStatusUncheckedCreateWithoutIgdbGameInput[]
    connectOrCreate?: GameStatusCreateOrConnectWithoutIgdbGameInput | GameStatusCreateOrConnectWithoutIgdbGameInput[]
    upsert?: GameStatusUpsertWithWhereUniqueWithoutIgdbGameInput | GameStatusUpsertWithWhereUniqueWithoutIgdbGameInput[]
    createMany?: GameStatusCreateManyIgdbGameInputEnvelope
    set?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    disconnect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    delete?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    connect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    update?: GameStatusUpdateWithWhereUniqueWithoutIgdbGameInput | GameStatusUpdateWithWhereUniqueWithoutIgdbGameInput[]
    updateMany?: GameStatusUpdateManyWithWhereWithoutIgdbGameInput | GameStatusUpdateManyWithWhereWithoutIgdbGameInput[]
    deleteMany?: GameStatusScalarWhereInput | GameStatusScalarWhereInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type GameStatusCreateNestedManyWithoutUserInput = {
    create?: XOR<GameStatusCreateWithoutUserInput, GameStatusUncheckedCreateWithoutUserInput> | GameStatusCreateWithoutUserInput[] | GameStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameStatusCreateOrConnectWithoutUserInput | GameStatusCreateOrConnectWithoutUserInput[]
    createMany?: GameStatusCreateManyUserInputEnvelope
    connect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type GameStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameStatusCreateWithoutUserInput, GameStatusUncheckedCreateWithoutUserInput> | GameStatusCreateWithoutUserInput[] | GameStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameStatusCreateOrConnectWithoutUserInput | GameStatusCreateOrConnectWithoutUserInput[]
    createMany?: GameStatusCreateManyUserInputEnvelope
    connect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type GameStatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameStatusCreateWithoutUserInput, GameStatusUncheckedCreateWithoutUserInput> | GameStatusCreateWithoutUserInput[] | GameStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameStatusCreateOrConnectWithoutUserInput | GameStatusCreateOrConnectWithoutUserInput[]
    upsert?: GameStatusUpsertWithWhereUniqueWithoutUserInput | GameStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameStatusCreateManyUserInputEnvelope
    set?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    disconnect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    delete?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    connect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    update?: GameStatusUpdateWithWhereUniqueWithoutUserInput | GameStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameStatusUpdateManyWithWhereWithoutUserInput | GameStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameStatusScalarWhereInput | GameStatusScalarWhereInput[]
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type GameStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameStatusCreateWithoutUserInput, GameStatusUncheckedCreateWithoutUserInput> | GameStatusCreateWithoutUserInput[] | GameStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameStatusCreateOrConnectWithoutUserInput | GameStatusCreateOrConnectWithoutUserInput[]
    upsert?: GameStatusUpsertWithWhereUniqueWithoutUserInput | GameStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameStatusCreateManyUserInputEnvelope
    set?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    disconnect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    delete?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    connect?: GameStatusWhereUniqueInput | GameStatusWhereUniqueInput[]
    update?: GameStatusUpdateWithWhereUniqueWithoutUserInput | GameStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameStatusUpdateManyWithWhereWithoutUserInput | GameStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameStatusScalarWhereInput | GameStatusScalarWhereInput[]
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
  }

  export type NestedEnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutGameStatusInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    UserSettings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGameStatusInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    UserSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGameStatusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameStatusInput, UserUncheckedCreateWithoutGameStatusInput>
  }

  export type GameCreateWithoutGameStatusInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
    cover?: CoverCreateNestedOneWithoutGameInput
    genres?: GenreCreateNestedManyWithoutGameInput
    platforms?: PlatformCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutGameStatusInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    coverId?: number | null
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
    genres?: GenreUncheckedCreateNestedManyWithoutGameInput
    platforms?: PlatformUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutGameStatusInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGameStatusInput, GameUncheckedCreateWithoutGameStatusInput>
  }

  export type UserUpsertWithoutGameStatusInput = {
    update: XOR<UserUpdateWithoutGameStatusInput, UserUncheckedUpdateWithoutGameStatusInput>
    create: XOR<UserCreateWithoutGameStatusInput, UserUncheckedCreateWithoutGameStatusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGameStatusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGameStatusInput, UserUncheckedUpdateWithoutGameStatusInput>
  }

  export type UserUpdateWithoutGameStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    UserSettings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGameStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    UserSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GameUpsertWithoutGameStatusInput = {
    update: XOR<GameUpdateWithoutGameStatusInput, GameUncheckedUpdateWithoutGameStatusInput>
    create: XOR<GameCreateWithoutGameStatusInput, GameUncheckedCreateWithoutGameStatusInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutGameStatusInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutGameStatusInput, GameUncheckedUpdateWithoutGameStatusInput>
  }

  export type GameUpdateWithoutGameStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
    cover?: CoverUpdateOneWithoutGameNestedInput
    genres?: GenreUpdateManyWithoutGameNestedInput
    platforms?: PlatformUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGameStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    coverId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
    genres?: GenreUncheckedUpdateManyWithoutGameNestedInput
    platforms?: PlatformUncheckedUpdateManyWithoutGameNestedInput
  }

  export type UserCreateWithoutUserSettingsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    gameStatus?: GameStatusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSettingsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    gameStatus?: GameStatusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
  }

  export type UserUpsertWithoutUserSettingsInput = {
    update: XOR<UserUpdateWithoutUserSettingsInput, UserUncheckedUpdateWithoutUserSettingsInput>
    create: XOR<UserCreateWithoutUserSettingsInput, UserUncheckedCreateWithoutUserSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSettingsInput, UserUncheckedUpdateWithoutUserSettingsInput>
  }

  export type UserUpdateWithoutUserSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    gameStatus?: GameStatusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    gameStatus?: GameStatusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameCreateWithoutGenresInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
    cover?: CoverCreateNestedOneWithoutGameInput
    platforms?: PlatformCreateNestedManyWithoutGameInput
    gameStatus?: GameStatusCreateNestedManyWithoutIgdbGameInput
  }

  export type GameUncheckedCreateWithoutGenresInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    coverId?: number | null
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
    platforms?: PlatformUncheckedCreateNestedManyWithoutGameInput
    gameStatus?: GameStatusUncheckedCreateNestedManyWithoutIgdbGameInput
  }

  export type GameCreateOrConnectWithoutGenresInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput>
  }

  export type GameUpsertWithWhereUniqueWithoutGenresInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutGenresInput, GameUncheckedUpdateWithoutGenresInput>
    create: XOR<GameCreateWithoutGenresInput, GameUncheckedCreateWithoutGenresInput>
  }

  export type GameUpdateWithWhereUniqueWithoutGenresInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutGenresInput, GameUncheckedUpdateWithoutGenresInput>
  }

  export type GameUpdateManyWithWhereWithoutGenresInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutGenresInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: IntFilter<"Game"> | number
    age_ratings?: IntNullableListFilter<"Game">
    aggregated_rating?: FloatNullableFilter<"Game"> | number | null
    aggregated_rating_count?: IntNullableFilter<"Game"> | number | null
    alternative_names?: IntNullableListFilter<"Game">
    artworks?: IntNullableListFilter<"Game">
    bundles?: IntNullableListFilter<"Game">
    checksum?: StringFilter<"Game"> | string
    collections?: IntNullableListFilter<"Game">
    coverId?: IntNullableFilter<"Game"> | number | null
    created_at?: DateTimeFilter<"Game"> | Date | string
    dlcs?: IntNullableListFilter<"Game">
    expanded_games?: IntNullableListFilter<"Game">
    expansions?: IntNullableListFilter<"Game">
    external_games?: IntNullableListFilter<"Game">
    first_release_date?: IntNullableFilter<"Game"> | number | null
    forks?: IntNullableListFilter<"Game">
    franchise?: IntNullableFilter<"Game"> | number | null
    franchises?: IntNullableListFilter<"Game">
    game_engines?: IntNullableListFilter<"Game">
    game_localizations?: IntNullableListFilter<"Game">
    game_modes?: IntNullableListFilter<"Game">
    game_status?: IntNullableFilter<"Game"> | number | null
    game_type?: IntNullableFilter<"Game"> | number | null
    hypes?: IntNullableFilter<"Game"> | number | null
    involved_companies?: IntNullableListFilter<"Game">
    keywords?: IntNullableListFilter<"Game">
    language_supports?: IntNullableListFilter<"Game">
    multiplayer_modes?: IntNullableListFilter<"Game">
    name?: StringFilter<"Game"> | string
    parent_game?: IntNullableFilter<"Game"> | number | null
    player_perspectives?: IntNullableListFilter<"Game">
    ports?: IntNullableListFilter<"Game">
    rating?: FloatNullableFilter<"Game"> | number | null
    rating_count?: IntNullableFilter<"Game"> | number | null
    release_dates?: IntNullableListFilter<"Game">
    remakes?: IntNullableListFilter<"Game">
    remasters?: IntNullableListFilter<"Game">
    screenshots?: IntNullableListFilter<"Game">
    similar_games?: IntNullableListFilter<"Game">
    slug?: StringFilter<"Game"> | string
    standalone_expansions?: IntNullableListFilter<"Game">
    storyline?: StringNullableFilter<"Game"> | string | null
    summary?: StringNullableFilter<"Game"> | string | null
    tags?: IntNullableListFilter<"Game">
    themes?: IntNullableListFilter<"Game">
    total_rating?: FloatNullableFilter<"Game"> | number | null
    total_rating_count?: IntNullableFilter<"Game"> | number | null
    updated_at?: DateTimeFilter<"Game"> | Date | string
    url?: StringNullableFilter<"Game"> | string | null
    version_parent?: IntNullableListFilter<"Game">
    version_title?: StringNullableFilter<"Game"> | string | null
    videos?: IntNullableListFilter<"Game">
    websites?: IntNullableListFilter<"Game">
  }

  export type GameCreateWithoutCoverInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
    genres?: GenreCreateNestedManyWithoutGameInput
    platforms?: PlatformCreateNestedManyWithoutGameInput
    gameStatus?: GameStatusCreateNestedManyWithoutIgdbGameInput
  }

  export type GameUncheckedCreateWithoutCoverInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
    genres?: GenreUncheckedCreateNestedManyWithoutGameInput
    platforms?: PlatformUncheckedCreateNestedManyWithoutGameInput
    gameStatus?: GameStatusUncheckedCreateNestedManyWithoutIgdbGameInput
  }

  export type GameCreateOrConnectWithoutCoverInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutCoverInput, GameUncheckedCreateWithoutCoverInput>
  }

  export type GameCreateManyCoverInputEnvelope = {
    data: GameCreateManyCoverInput | GameCreateManyCoverInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutCoverInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutCoverInput, GameUncheckedUpdateWithoutCoverInput>
    create: XOR<GameCreateWithoutCoverInput, GameUncheckedCreateWithoutCoverInput>
  }

  export type GameUpdateWithWhereUniqueWithoutCoverInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutCoverInput, GameUncheckedUpdateWithoutCoverInput>
  }

  export type GameUpdateManyWithWhereWithoutCoverInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutCoverInput>
  }

  export type GameCreateWithoutPlatformsInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
    cover?: CoverCreateNestedOneWithoutGameInput
    genres?: GenreCreateNestedManyWithoutGameInput
    gameStatus?: GameStatusCreateNestedManyWithoutIgdbGameInput
  }

  export type GameUncheckedCreateWithoutPlatformsInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    coverId?: number | null
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
    genres?: GenreUncheckedCreateNestedManyWithoutGameInput
    gameStatus?: GameStatusUncheckedCreateNestedManyWithoutIgdbGameInput
  }

  export type GameCreateOrConnectWithoutPlatformsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput>
  }

  export type GameUpsertWithWhereUniqueWithoutPlatformsInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlatformsInput, GameUncheckedUpdateWithoutPlatformsInput>
    create: XOR<GameCreateWithoutPlatformsInput, GameUncheckedCreateWithoutPlatformsInput>
  }

  export type GameUpdateWithWhereUniqueWithoutPlatformsInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlatformsInput, GameUncheckedUpdateWithoutPlatformsInput>
  }

  export type GameUpdateManyWithWhereWithoutPlatformsInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlatformsInput>
  }

  export type CoverCreateWithoutGameInput = {
    id: number
    alpha_channel?: boolean | null
    animated?: boolean | null
    checksum?: string | null
    game_localization?: CoverCreategame_localizationInput | number[]
    height?: number | null
    image_id?: string | null
    url?: string | null
    width?: number | null
    downloaded_filename?: string | null
  }

  export type CoverUncheckedCreateWithoutGameInput = {
    id: number
    alpha_channel?: boolean | null
    animated?: boolean | null
    checksum?: string | null
    game_localization?: CoverCreategame_localizationInput | number[]
    height?: number | null
    image_id?: string | null
    url?: string | null
    width?: number | null
    downloaded_filename?: string | null
  }

  export type CoverCreateOrConnectWithoutGameInput = {
    where: CoverWhereUniqueInput
    create: XOR<CoverCreateWithoutGameInput, CoverUncheckedCreateWithoutGameInput>
  }

  export type GenreCreateWithoutGameInput = {
    id: number
    checksum: string
    created_at: Date | string
    name: string
    slug: string
    updated_at: Date | string
    url: string
  }

  export type GenreUncheckedCreateWithoutGameInput = {
    id: number
    checksum: string
    created_at: Date | string
    name: string
    slug: string
    updated_at: Date | string
    url: string
  }

  export type GenreCreateOrConnectWithoutGameInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutGameInput, GenreUncheckedCreateWithoutGameInput>
  }

  export type PlatformCreateWithoutGameInput = {
    id: number
    abbreviation?: string | null
    alternative_name?: string | null
    checksum?: string | null
    created_at: Date | string
    generation?: number | null
    name?: string | null
    platform_family?: number | null
    platform_logo?: number | null
    platform_type?: number | null
    slug?: string | null
    summary?: string | null
    updated_at: Date | string
    url?: string | null
  }

  export type PlatformUncheckedCreateWithoutGameInput = {
    id: number
    abbreviation?: string | null
    alternative_name?: string | null
    checksum?: string | null
    created_at: Date | string
    generation?: number | null
    name?: string | null
    platform_family?: number | null
    platform_logo?: number | null
    platform_type?: number | null
    slug?: string | null
    summary?: string | null
    updated_at: Date | string
    url?: string | null
  }

  export type PlatformCreateOrConnectWithoutGameInput = {
    where: PlatformWhereUniqueInput
    create: XOR<PlatformCreateWithoutGameInput, PlatformUncheckedCreateWithoutGameInput>
  }

  export type GameStatusCreateWithoutIgdbGameInput = {
    platform: string
    status?: $Enums.Status
    notes?: string | null
    user: UserCreateNestedOneWithoutGameStatusInput
  }

  export type GameStatusUncheckedCreateWithoutIgdbGameInput = {
    id?: number
    platform: string
    status?: $Enums.Status
    notes?: string | null
    userId: string
  }

  export type GameStatusCreateOrConnectWithoutIgdbGameInput = {
    where: GameStatusWhereUniqueInput
    create: XOR<GameStatusCreateWithoutIgdbGameInput, GameStatusUncheckedCreateWithoutIgdbGameInput>
  }

  export type GameStatusCreateManyIgdbGameInputEnvelope = {
    data: GameStatusCreateManyIgdbGameInput | GameStatusCreateManyIgdbGameInput[]
    skipDuplicates?: boolean
  }

  export type CoverUpsertWithoutGameInput = {
    update: XOR<CoverUpdateWithoutGameInput, CoverUncheckedUpdateWithoutGameInput>
    create: XOR<CoverCreateWithoutGameInput, CoverUncheckedCreateWithoutGameInput>
    where?: CoverWhereInput
  }

  export type CoverUpdateToOneWithWhereWithoutGameInput = {
    where?: CoverWhereInput
    data: XOR<CoverUpdateWithoutGameInput, CoverUncheckedUpdateWithoutGameInput>
  }

  export type CoverUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    alpha_channel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    game_localization?: CoverUpdategame_localizationInput | number[]
    height?: NullableIntFieldUpdateOperationsInput | number | null
    image_id?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    downloaded_filename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoverUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    alpha_channel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    animated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    game_localization?: CoverUpdategame_localizationInput | number[]
    height?: NullableIntFieldUpdateOperationsInput | number | null
    image_id?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    downloaded_filename?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUpsertWithWhereUniqueWithoutGameInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutGameInput, GenreUncheckedUpdateWithoutGameInput>
    create: XOR<GenreCreateWithoutGameInput, GenreUncheckedCreateWithoutGameInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutGameInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutGameInput, GenreUncheckedUpdateWithoutGameInput>
  }

  export type GenreUpdateManyWithWhereWithoutGameInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutGameInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: IntFilter<"Genre"> | number
    checksum?: StringFilter<"Genre"> | string
    created_at?: DateTimeFilter<"Genre"> | Date | string
    name?: StringFilter<"Genre"> | string
    slug?: StringFilter<"Genre"> | string
    updated_at?: DateTimeFilter<"Genre"> | Date | string
    url?: StringFilter<"Genre"> | string
  }

  export type PlatformUpsertWithWhereUniqueWithoutGameInput = {
    where: PlatformWhereUniqueInput
    update: XOR<PlatformUpdateWithoutGameInput, PlatformUncheckedUpdateWithoutGameInput>
    create: XOR<PlatformCreateWithoutGameInput, PlatformUncheckedCreateWithoutGameInput>
  }

  export type PlatformUpdateWithWhereUniqueWithoutGameInput = {
    where: PlatformWhereUniqueInput
    data: XOR<PlatformUpdateWithoutGameInput, PlatformUncheckedUpdateWithoutGameInput>
  }

  export type PlatformUpdateManyWithWhereWithoutGameInput = {
    where: PlatformScalarWhereInput
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyWithoutGameInput>
  }

  export type PlatformScalarWhereInput = {
    AND?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
    OR?: PlatformScalarWhereInput[]
    NOT?: PlatformScalarWhereInput | PlatformScalarWhereInput[]
    id?: IntFilter<"Platform"> | number
    abbreviation?: StringNullableFilter<"Platform"> | string | null
    alternative_name?: StringNullableFilter<"Platform"> | string | null
    checksum?: StringNullableFilter<"Platform"> | string | null
    created_at?: DateTimeFilter<"Platform"> | Date | string
    generation?: IntNullableFilter<"Platform"> | number | null
    name?: StringNullableFilter<"Platform"> | string | null
    platform_family?: IntNullableFilter<"Platform"> | number | null
    platform_logo?: IntNullableFilter<"Platform"> | number | null
    platform_type?: IntNullableFilter<"Platform"> | number | null
    slug?: StringNullableFilter<"Platform"> | string | null
    summary?: StringNullableFilter<"Platform"> | string | null
    updated_at?: DateTimeFilter<"Platform"> | Date | string
    url?: StringNullableFilter<"Platform"> | string | null
  }

  export type GameStatusUpsertWithWhereUniqueWithoutIgdbGameInput = {
    where: GameStatusWhereUniqueInput
    update: XOR<GameStatusUpdateWithoutIgdbGameInput, GameStatusUncheckedUpdateWithoutIgdbGameInput>
    create: XOR<GameStatusCreateWithoutIgdbGameInput, GameStatusUncheckedCreateWithoutIgdbGameInput>
  }

  export type GameStatusUpdateWithWhereUniqueWithoutIgdbGameInput = {
    where: GameStatusWhereUniqueInput
    data: XOR<GameStatusUpdateWithoutIgdbGameInput, GameStatusUncheckedUpdateWithoutIgdbGameInput>
  }

  export type GameStatusUpdateManyWithWhereWithoutIgdbGameInput = {
    where: GameStatusScalarWhereInput
    data: XOR<GameStatusUpdateManyMutationInput, GameStatusUncheckedUpdateManyWithoutIgdbGameInput>
  }

  export type GameStatusScalarWhereInput = {
    AND?: GameStatusScalarWhereInput | GameStatusScalarWhereInput[]
    OR?: GameStatusScalarWhereInput[]
    NOT?: GameStatusScalarWhereInput | GameStatusScalarWhereInput[]
    id?: IntFilter<"GameStatus"> | number
    platform?: StringFilter<"GameStatus"> | string
    status?: EnumStatusFilter<"GameStatus"> | $Enums.Status
    notes?: StringNullableFilter<"GameStatus"> | string | null
    userId?: StringFilter<"GameStatus"> | string
    igdbGameId?: IntNullableFilter<"GameStatus"> | number | null
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameStatusCreateWithoutUserInput = {
    platform: string
    status?: $Enums.Status
    notes?: string | null
    igdbGame?: GameCreateNestedOneWithoutGameStatusInput
  }

  export type GameStatusUncheckedCreateWithoutUserInput = {
    id?: number
    platform: string
    status?: $Enums.Status
    notes?: string | null
    igdbGameId?: number | null
  }

  export type GameStatusCreateOrConnectWithoutUserInput = {
    where: GameStatusWhereUniqueInput
    create: XOR<GameStatusCreateWithoutUserInput, GameStatusUncheckedCreateWithoutUserInput>
  }

  export type GameStatusCreateManyUserInputEnvelope = {
    data: GameStatusCreateManyUserInput | GameStatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsCreateWithoutUserInput = {
    theme?: $Enums.Theme
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: number
    theme?: $Enums.Theme
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type GameStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: GameStatusWhereUniqueInput
    update: XOR<GameStatusUpdateWithoutUserInput, GameStatusUncheckedUpdateWithoutUserInput>
    create: XOR<GameStatusCreateWithoutUserInput, GameStatusUncheckedCreateWithoutUserInput>
  }

  export type GameStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: GameStatusWhereUniqueInput
    data: XOR<GameStatusUpdateWithoutUserInput, GameStatusUncheckedUpdateWithoutUserInput>
  }

  export type GameStatusUpdateManyWithWhereWithoutUserInput = {
    where: GameStatusScalarWhereInput
    data: XOR<GameStatusUpdateManyMutationInput, GameStatusUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    gameStatus?: GameStatusCreateNestedManyWithoutUserInput
    UserSettings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    gameStatus?: GameStatusUncheckedCreateNestedManyWithoutUserInput
    UserSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    gameStatus?: GameStatusUpdateManyWithoutUserNestedInput
    UserSettings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    gameStatus?: GameStatusUncheckedUpdateManyWithoutUserNestedInput
    UserSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    gameStatus?: GameStatusCreateNestedManyWithoutUserInput
    UserSettings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    gameStatus?: GameStatusUncheckedCreateNestedManyWithoutUserInput
    UserSettings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    gameStatus?: GameStatusUpdateManyWithoutUserNestedInput
    UserSettings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    gameStatus?: GameStatusUncheckedUpdateManyWithoutUserNestedInput
    UserSettings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GameUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
    cover?: CoverUpdateOneWithoutGameNestedInput
    platforms?: PlatformUpdateManyWithoutGameNestedInput
    gameStatus?: GameStatusUpdateManyWithoutIgdbGameNestedInput
  }

  export type GameUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    coverId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
    platforms?: PlatformUncheckedUpdateManyWithoutGameNestedInput
    gameStatus?: GameStatusUncheckedUpdateManyWithoutIgdbGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    coverId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
  }

  export type GameCreateManyCoverInput = {
    id: number
    age_ratings?: GameCreateage_ratingsInput | number[]
    aggregated_rating?: number | null
    aggregated_rating_count?: number | null
    alternative_names?: GameCreatealternative_namesInput | number[]
    artworks?: GameCreateartworksInput | number[]
    bundles?: GameCreatebundlesInput | number[]
    checksum: string
    collections?: GameCreatecollectionsInput | number[]
    created_at: Date | string
    dlcs?: GameCreatedlcsInput | number[]
    expanded_games?: GameCreateexpanded_gamesInput | number[]
    expansions?: GameCreateexpansionsInput | number[]
    external_games?: GameCreateexternal_gamesInput | number[]
    first_release_date?: number | null
    forks?: GameCreateforksInput | number[]
    franchise?: number | null
    franchises?: GameCreatefranchisesInput | number[]
    game_engines?: GameCreategame_enginesInput | number[]
    game_localizations?: GameCreategame_localizationsInput | number[]
    game_modes?: GameCreategame_modesInput | number[]
    game_status?: number | null
    game_type?: number | null
    hypes?: number | null
    involved_companies?: GameCreateinvolved_companiesInput | number[]
    keywords?: GameCreatekeywordsInput | number[]
    language_supports?: GameCreatelanguage_supportsInput | number[]
    multiplayer_modes?: GameCreatemultiplayer_modesInput | number[]
    name: string
    parent_game?: number | null
    player_perspectives?: GameCreateplayer_perspectivesInput | number[]
    ports?: GameCreateportsInput | number[]
    rating?: number | null
    rating_count?: number | null
    release_dates?: GameCreaterelease_datesInput | number[]
    remakes?: GameCreateremakesInput | number[]
    remasters?: GameCreateremastersInput | number[]
    screenshots?: GameCreatescreenshotsInput | number[]
    similar_games?: GameCreatesimilar_gamesInput | number[]
    slug: string
    standalone_expansions?: GameCreatestandalone_expansionsInput | number[]
    storyline?: string | null
    summary?: string | null
    tags?: GameCreatetagsInput | number[]
    themes?: GameCreatethemesInput | number[]
    total_rating?: number | null
    total_rating_count?: number | null
    updated_at: Date | string
    url?: string | null
    version_parent?: GameCreateversion_parentInput | number[]
    version_title?: string | null
    videos?: GameCreatevideosInput | number[]
    websites?: GameCreatewebsitesInput | number[]
  }

  export type GameUpdateWithoutCoverInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
    genres?: GenreUpdateManyWithoutGameNestedInput
    platforms?: PlatformUpdateManyWithoutGameNestedInput
    gameStatus?: GameStatusUpdateManyWithoutIgdbGameNestedInput
  }

  export type GameUncheckedUpdateWithoutCoverInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
    genres?: GenreUncheckedUpdateManyWithoutGameNestedInput
    platforms?: PlatformUncheckedUpdateManyWithoutGameNestedInput
    gameStatus?: GameStatusUncheckedUpdateManyWithoutIgdbGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutCoverInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
  }

  export type GameUpdateWithoutPlatformsInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
    cover?: CoverUpdateOneWithoutGameNestedInput
    genres?: GenreUpdateManyWithoutGameNestedInput
    gameStatus?: GameStatusUpdateManyWithoutIgdbGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlatformsInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    coverId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
    genres?: GenreUncheckedUpdateManyWithoutGameNestedInput
    gameStatus?: GameStatusUncheckedUpdateManyWithoutIgdbGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlatformsInput = {
    id?: IntFieldUpdateOperationsInput | number
    age_ratings?: GameUpdateage_ratingsInput | number[]
    aggregated_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    aggregated_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    alternative_names?: GameUpdatealternative_namesInput | number[]
    artworks?: GameUpdateartworksInput | number[]
    bundles?: GameUpdatebundlesInput | number[]
    checksum?: StringFieldUpdateOperationsInput | string
    collections?: GameUpdatecollectionsInput | number[]
    coverId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dlcs?: GameUpdatedlcsInput | number[]
    expanded_games?: GameUpdateexpanded_gamesInput | number[]
    expansions?: GameUpdateexpansionsInput | number[]
    external_games?: GameUpdateexternal_gamesInput | number[]
    first_release_date?: NullableIntFieldUpdateOperationsInput | number | null
    forks?: GameUpdateforksInput | number[]
    franchise?: NullableIntFieldUpdateOperationsInput | number | null
    franchises?: GameUpdatefranchisesInput | number[]
    game_engines?: GameUpdategame_enginesInput | number[]
    game_localizations?: GameUpdategame_localizationsInput | number[]
    game_modes?: GameUpdategame_modesInput | number[]
    game_status?: NullableIntFieldUpdateOperationsInput | number | null
    game_type?: NullableIntFieldUpdateOperationsInput | number | null
    hypes?: NullableIntFieldUpdateOperationsInput | number | null
    involved_companies?: GameUpdateinvolved_companiesInput | number[]
    keywords?: GameUpdatekeywordsInput | number[]
    language_supports?: GameUpdatelanguage_supportsInput | number[]
    multiplayer_modes?: GameUpdatemultiplayer_modesInput | number[]
    name?: StringFieldUpdateOperationsInput | string
    parent_game?: NullableIntFieldUpdateOperationsInput | number | null
    player_perspectives?: GameUpdateplayer_perspectivesInput | number[]
    ports?: GameUpdateportsInput | number[]
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    release_dates?: GameUpdaterelease_datesInput | number[]
    remakes?: GameUpdateremakesInput | number[]
    remasters?: GameUpdateremastersInput | number[]
    screenshots?: GameUpdatescreenshotsInput | number[]
    similar_games?: GameUpdatesimilar_gamesInput | number[]
    slug?: StringFieldUpdateOperationsInput | string
    standalone_expansions?: GameUpdatestandalone_expansionsInput | number[]
    storyline?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: GameUpdatetagsInput | number[]
    themes?: GameUpdatethemesInput | number[]
    total_rating?: NullableFloatFieldUpdateOperationsInput | number | null
    total_rating_count?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    version_parent?: GameUpdateversion_parentInput | number[]
    version_title?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: GameUpdatevideosInput | number[]
    websites?: GameUpdatewebsitesInput | number[]
  }

  export type GameStatusCreateManyIgdbGameInput = {
    id?: number
    platform: string
    status?: $Enums.Status
    notes?: string | null
    userId: string
  }

  export type GenreUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    checksum?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    checksum?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    checksum?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PlatformUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    alternative_name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_family?: NullableIntFieldUpdateOperationsInput | number | null
    platform_logo?: NullableIntFieldUpdateOperationsInput | number | null
    platform_type?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatformUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    alternative_name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_family?: NullableIntFieldUpdateOperationsInput | number | null
    platform_logo?: NullableIntFieldUpdateOperationsInput | number | null
    platform_type?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatformUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    abbreviation?: NullableStringFieldUpdateOperationsInput | string | null
    alternative_name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    generation?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    platform_family?: NullableIntFieldUpdateOperationsInput | number | null
    platform_logo?: NullableIntFieldUpdateOperationsInput | number | null
    platform_type?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameStatusUpdateWithoutIgdbGameInput = {
    platform?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGameStatusNestedInput
  }

  export type GameStatusUncheckedUpdateWithoutIgdbGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GameStatusUncheckedUpdateManyWithoutIgdbGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type GameStatusCreateManyUserInput = {
    id?: number
    platform: string
    status?: $Enums.Status
    notes?: string | null
    igdbGameId?: number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameStatusUpdateWithoutUserInput = {
    platform?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    igdbGame?: GameUpdateOneWithoutGameStatusNestedInput
  }

  export type GameStatusUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    igdbGameId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GameStatusUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    igdbGameId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}