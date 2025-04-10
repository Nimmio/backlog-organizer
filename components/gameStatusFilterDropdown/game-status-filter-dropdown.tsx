"use client";

import React, { useEffect, useState } from "react";
import CheckboxDropdown from "../checkboxDropdown/checkbox-dropdown";
import { Button } from "../ui/button";
import { Funnel, ListFilter, ListFilterPlus } from "lucide-react";
import { useQueryString } from "@/hooks/use-query-string,";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getJsonParsedStringOrNull, stringIsJsonParsable } from "@/lib/utils";

interface Filter {
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
  const [filter, setFilter] = useState<Filter>({
    ...Defaults,
    ...paramsFilter,
  });
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useQueryString();
  useEffect(() => {
    if (filter) {
      console.log(filter);
      if (Object.keys(filter).some((element) => !filter[element])) {
        setFilterActive(true);
      } else {
        setFilterActive(false);
      }
      router.push(
        `${pathname}?${createQueryString("filters", JSON.stringify(filter))}`
      );

      return () => {
        setFilterActive(false);
      };
    }
  }, [filter]);

  const handleElementClicked = (key: string) => {
    setFilter({
      ...filter,
      [key]: !filter[key],
    });
  };

  const Status = [
    {
      label: "Want to buy",
      isActive: filter.WANT_TO_BUY,
      key: "WANT_TO_BUY",
    },
    {
      label: "Preorder",
      isActive: filter.PREORDER,
      key: "PREORDER",
    },
    {
      label: "To play",
      isActive: filter.TO_PLAY,
      key: "TO_PLAY",
    },
    {
      label: "Playing",
      isActive: filter.PLAYING,
      key: "PLAYING",
    },
    {
      label: "Completed",
      isActive: filter.COMPLETED,
      key: "COMPLETED",
    },
    {
      label: "Dropped",
      isActive: filter.DROPPED,
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
