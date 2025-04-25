"use client";

import React, { useEffect, useState, ComponentProps } from "react";
import { Input } from "../ui/input";
import { useDebounce } from "use-debounce";
import { useQueryString } from "@/hooks/use-query-string,";
import { usePathname, useRouter } from "next/navigation";

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  debounceTime?: number;
  searchParamValue?: string;
}

interface Props
  extends SearchInputProps,
    Omit<ComponentProps<"input">, "onChange"> {}

const SearchInput = (props: Props) => {
  const {
    placeholder = "Search",
    onChange,
    debounceTime = 500,
    searchParamValue,
    className,
  } = props;

  const [searchInput, setSearchInput] = useState<string>("");
  const [debouncedValue] = useDebounce(searchInput, debounceTime);

  const createQueryString = useQueryString();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (onChange) onChange(debouncedValue);
    if (searchParamValue)
      router.push(
        `${pathname}?${createQueryString(searchParamValue, debouncedValue)}`
      );
  }, [
    debouncedValue,
    createQueryString,
    onChange,
    pathname,
    router,
    searchParamValue,
  ]);

  return (
    <Input
      className={className}
      value={searchInput}
      onChange={(e) => setSearchInput(e.currentTarget.value)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
