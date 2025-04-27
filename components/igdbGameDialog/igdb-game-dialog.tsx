"use client";
import { useQueryString } from "@/hooks/use-query-string,";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "../ui/input";
import AppDialog from "../Dialog/app-dialog";
import { searchGame } from "@/app/actions";

const IgdbGameDialog = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const addGameDialogOpen = searchParams.get("addGameDialogOpen") === "true";
  const createQueryString = useQueryString();

  const [input, setInput] = useState("");
  const [debouncedInput] = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedInput !== "") {
      searchGame({
        fields: ["name", "release_dates"],
        search: debouncedInput,
        filterEditions: true,
      }).then((response) => {
        console.log(response);
      });
    }

    return () => {};
  }, [debouncedInput]);

  const content = (
    <>
      <Input
        placeholder="GameName"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
    </>
  );

  return (
    <AppDialog
      title="Add Game"
      description="Add a new Game to the Backlog"
      content={content}
      open={addGameDialogOpen}
      onOpenChange={(open) =>
        router.push(
          `${pathname}?${createQueryString(
            "addGameDialogOpen",
            open ? "true" : ""
          )}`
        )
      }
    />
  );
};

export default IgdbGameDialog;
