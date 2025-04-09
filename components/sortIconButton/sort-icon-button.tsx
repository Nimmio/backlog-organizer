"use client";

import {
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownUp,
  ArrowUp10,
  ArrowUpAz,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { useQueryString } from "@/hooks/use-query-string,";

interface Icons {
  [key: string]: {
    [key: string]: React.ReactNode;
  };
}

const icons: Icons = {
  number: {
    none: <ArrowDownUp />,
    asc: <ArrowDown10 />,
    desc: <ArrowUp10 />,
  },
  letter: {
    none: <ArrowDownUp />,
    asc: <ArrowDownAZ />,
    desc: <ArrowUpAz />,
  },
};

interface SortIconButtonProps {
  type?: "number" | "letter";
  name: string;
}

const SortIconButton = (props: SortIconButtonProps) => {
  const { type = "number", name } = props;

  const router = useRouter();
  const pathname = usePathname();

  const iconObject = icons[type];
  const [direction, setDirection] = useState<"none" | "asc" | "desc">("none");

  const searchParams = useSearchParams();
  const sortString = searchParams.get("sort");

  const createQueryString = useQueryString();

  const handleClick = () => {
    const newValue =
      direction === "none" ? "asc" : direction === "asc" ? "desc" : "none";
    setDirection(newValue);
    router.push(
      `${pathname}?${createQueryString(
        "sort",
        JSON.stringify({ [name]: newValue })
      )}`
    );
  };

  return (
    <>
      <Button variant="ghost" onClick={handleClick}>
        {iconObject[direction]}
      </Button>
    </>
  );
};

export default SortIconButton;
