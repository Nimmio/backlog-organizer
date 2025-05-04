const Status = {
  WANT_TO_BUY: {
    color: "bg-stone-500",
    translation: {
      en: "Want to buy",
    },
  },
  PREORDER: {
    color: "bg-fuchsia-500",
    translation: {
      en: "Preorder",
    },
  },
  BACKLOG: {
    color: "bg-amber-500",
    translation: {
      en: "Backlog",
    },
  },
  PLAYING: {
    color: "bg-green-500",
    translation: {
      en: "Playing",
    },
  },
  COMPLETED: {
    color: "bg-blue-500",
    translation: {
      en: "Completed",
    },
  },
  ON_HOLD: {
    color: "bg-gray-400",
    translation: {
      en: "On hold",
    },
  },
};

type TSingleStatus = {
  color: string;
  translation: {
    en: string;
  };
};

type StatusArray = Array<TSingleStatus & { key: string }>;

type TStatus = typeof Status;

export type TStatusKey = keyof TStatus;
export type TStatusKeyWithAll = TStatusKey | "All";

export const getStatusAsArray = (): StatusArray => {
  return Object.keys(Status).map((key) => ({
    ...Status[key as TStatusKey],
    key,
  }));
};

export const getMultipleStatusKeysTranslated = (): string[] => {
  return Object.keys(Status).map((key) =>
    getStatusTranslation(key as TStatusKey)
  );
};

export const getMultipleStatusKeysTranslatedWithAll = (): string[] => {
  return ["All", ...getMultipleStatusKeysTranslated()];
};

export const getStatusColor = (key: TStatusKey): string => {
  return Status[key].color;
};

export const getStatusTranslation = (
  key: TStatusKey,
  lang: "en" = "en"
): string => {
  return Status[key].translation[lang];
};

export const getStatusKeyForTranslation = (
  input: string
): TStatusKey | undefined => {
  return Object.keys(Status).find(
    (statusKey) => Status[statusKey as TStatusKey].translation.en === input
  ) as TStatusKey;
};
