"use client";

import React, { useEffect, useState } from "react";
import CheckboxDropdown from "../checkboxDropdown/checkbox-dropdown";
import { Button } from "../ui/button";
import { ListFilter, ListFilterPlus } from "lucide-react";
import { useQueryString } from "@/hooks/use-query-string,";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getJsonParsedStringOrNull, stringIsJsonParsable } from "@/lib/utils";

interface Filters {
  [key: string]: boolean;
}

const Defaults = {
  WANT_TO_BUY: true,
  PREORDER: true,
  TO_PLAY: true,
  PLAYING: true,
  COMPLETED: true,
  DROPPED: true,
};

const GameStatusFilterDropdown = () => {
  const searchParams = useSearchParams();
  const filterString = searchParams.get("filters");
  const paramsFilter = stringIsJsonParsable(filterString)
    ? getJsonParsedStringOrNull(filterString)
    : {};
  const [filters, setFilters] = useState<Filters>({
    ...Defaults,
    ...paramsFilter,
  });
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useQueryString();

  useEffect(() => {
    if (filters) {
      if (Object.keys(filters).some((element) => !filters[element])) {
        setFilterActive(true);

        setFilterActive(false);
      }
      router.push(
        `${pathname}?${createQueryString("filters", JSON.stringify(filters))}`
      );
    } else {
      return () => {
        setFilterActive(false);
      };
    }
  }, [filters, createQueryString, pathname, router]);

  const handleElementClicked = (key: string) => {
    setFilters({
      ...filters,
      [key]: !filters[key],
    });
  };

  const Status = [
    {
      label: "Want to buy",
      isActive: filters.WANT_TO_BUY,
      key: "WANT_TO_BUY",
    },
    {
      label: "Preorder",
      isActive: filters.PREORDER,
      key: "PREORDER",
    },
    {
      label: "To play",
      isActive: filters.TO_PLAY,
      key: "TO_PLAY",
    },
    {
      label: "Playing",
      isActive: filters.PLAYING,
      key: "PLAYING",
    },
    {
      label: "Completed",
      isActive: filters.COMPLETED,
      key: "COMPLETED",
    },
    {
      label: "Dropped",
      isActive: filters.DROPPED,
      key: "DROPPED",
    },
  ];
  return (
    <>
      <CheckboxDropdown
        trigger={
          <Button variant="ghost">
            {filterActive ? <ListFilterPlus /> : <ListFilter />}
          </Button>
        }
        keepOpen
        menuLabel="Status"
        elements={Status}
        onElementClicked={handleElementClicked}
      />
    </>
  );
};

export default GameStatusFilterDropdown;
