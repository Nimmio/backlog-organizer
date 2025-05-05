"use client";
import React, { useState } from "react";
import AppDialog from "../Dialog/app-dialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQueryString } from "@/hooks/use-query-string,";
import AddGameDialogSearch from "./add-game-dialog-search";
import AddGameDialogDetailView from "./add-game-dialog-detai-view";
import { createGameStatus } from "@/app/(withNavigation)/actions";
import { Status } from "@/generated/prisma";

const AddGameDialog = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useQueryString();

  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  const open = searchParams.get("addGameDialogOpen") === "true";

  const handleOpenChange = (open: boolean) => {
    setSelectedGameId(null);
    router.push(
      `${pathname}?${createQueryString(
        "addGameDialogOpen",
        open ? "true" : ""
      )}`
    );
  };

  interface handleAddGameParams {
    id: number;
    platform: string;
    status: string;
  }

  const handleAddGame = (params: handleAddGameParams) => {
    const { id, platform, status } = params;

    createGameStatus({
      id,
      platform,
      status: status as Status,
    });
  };

  return (
    <AppDialog
      title="Add Game"
      open={open}
      content={
        !selectedGameId ? (
          <AddGameDialogSearch
            onSelectGame={(id: number) => setSelectedGameId(id)}
          />
        ) : (
          <AddGameDialogDetailView
            gameId={selectedGameId}
            onBack={() => setSelectedGameId(null)}
            onAddGame={(params) => handleAddGame(params)}
          />
        )
      }
      onOpenChange={(open) => handleOpenChange(open)}
    ></AppDialog>
  );
};

export default AddGameDialog;
