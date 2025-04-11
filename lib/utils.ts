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
  } catch (e) {
    return false;
  }
};

export const getJsonParsedStringOrNull = (input: string | null): object => {
  if (!input || !stringIsJsonParsable(input)) return {};
  else return JSON.parse(input);
};

interface getValueFromSearchParamsOrNullProps {
  searchParams: SearchParam;
  key: string;
}

interface KeyStringObject {
  [key: string]: any;
}

export const getValueFromSearchParamsOrNull = async (
  props: getValueFromSearchParamsOrNullProps
): Promise<string | string[] | KeyStringObject | null> => {
  const { searchParams, key } = props;
  const stringValue = (await searchParams)[key];
  if (!stringValue) return null;
  if (typeof stringValue !== "string") return stringValue;
  if (stringIsJsonParsable(stringValue)) {
    return getJsonParsedStringOrNull(stringValue);
  }
  return stringValue;
};
