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
