import SearchParam from "@/types/searchParams";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const stringIsJsonParsable = (input: string | null): boolean => {
  if (!input) return false;
  try {
    JSON.parse(input);
    return true;
  } catch {
    return false;
  }
};

export const getJsonParsedStringOrNull = (
  input: string | null
): object | null => {
  if (!input || !stringIsJsonParsable(input)) return null;
  else return JSON.parse(input);
};

interface getValueFromSearchParamsOrNullProps {
  searchParams: SearchParam;
  key: string;
}

export const getValueFromSearchParamsOrNull = async (
  props: getValueFromSearchParamsOrNullProps
): Promise<string | string[] | object | null> => {
  const { searchParams, key } = props;
  const stringValue = (await searchParams)[key];
  if (!stringValue) return null;
  if (typeof stringValue !== "string") return stringValue;
  if (stringIsJsonParsable(stringValue)) {
    return getJsonParsedStringOrNull(stringValue);
  }
  return stringValue;
};

export const ensureString = (input: unknown): string => {
  if (!input) return "";
  if (isString(input)) return input as string;
  else return (input as unknown as string).toString();
};

export const isString = (input: unknown): boolean => {
  if (typeof input === "string" || input instanceof String) return true;
  return false;
};
