"use client";

import React, { ReactNode, useCallback } from "react";
import AppDialog from "../Dialog/app-dialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createGame } from "@/app/actions";
import GameForm from "../gameForm/game-form";
import { Game } from "@/generated/prisma";

const AddGameDialog = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const addGameDialogOpen = searchParams.get("addGameDialogOpen") === "true";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSubmit = (values: Omit<Game, "id">) => {
    createGame({ ...values });
    router.push(`${pathname}?${createQueryString("addGameDialogOpen", "")}`);
  };

  const content = <GameForm onSubmit={handleSubmit} />;

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

export default AddGameDialog;
