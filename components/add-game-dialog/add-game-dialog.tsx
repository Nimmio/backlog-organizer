"use client";
import React, { useEffect, useState } from "react";
import AppDialog from "../Dialog/app-dialog";
import { usePathname, useRouter } from "next/navigation";
import { useQueryString } from "@/hooks/use-query-string,";
import AddGameDialogSearch from "./add-game-dialog-search";
import AddGameDialogDetailView from "./add-game-dialog-detai-view";
import { createGameStatus } from "@/app/(withNavigation)/actions";
import { Status } from "@/generated/prisma";
import { SearchGame } from "@/types/igdb/game";
import { useDebounce } from "use-debounce";
import { searchgameOnIGDBParams } from "@/lib/igdb/game";
import { toast } from "sonner";

interface handleAddGameParams {
  id: number;
  platform: string;
  status: string;
}

interface AddGameDialogProps {
  open: boolean;
}

const AddGameDialog = (props: AddGameDialogProps) => {
  const { open } = props;
  const router = useRouter();
  const pathname = usePathname();
  const createQueryString = useQueryString();

  const [selectedGame, setSelectedGame] = useState<SearchGame | null>(null);
  const [searchQuery, setsearchQuery] = useState<string>("");
  const [searchIsLoading, setSearchIsLoading] = useState<boolean>(false);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const [searchResults, setSearchResults] = useState<SearchGame[]>([]);

  useEffect(() => {
    if (!open) {
      setSelectedGame(null);
      setsearchQuery("");
    }
  }, [open]);

  useEffect(() => {
    if (debouncedSearchQuery) {
      setSearchIsLoading(true);
      searchgameOnIGDBParams({
        search: debouncedSearchQuery,
        filterEditions: true,
      }).then((games) => {
        setSearchResults(games);
        setSearchIsLoading(false);
      });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchQuery]);

  const handleOpenChange = (open: boolean) => {
    router.push(
      `${pathname}?${createQueryString(
        "addGameDialogOpen",
        open ? "true" : ""
      )}`
    );
  };

  const handleAddGame = (params: handleAddGameParams) => {
    const { id, platform, status } = params;
    createGameStatus({
      id,
      platform,
      status: status as Status,
    }).then((newGameStatus) => {
      handleOpenChange(false);
      toast("Added Game", { description: newGameStatus.igdbGame.name });
    });
  };

  return (
    <AppDialog
      title="Add Game"
      open={open}
      content={
        !selectedGame ? (
          <AddGameDialogSearch
            onSelectGame={(game: SearchGame) => setSelectedGame(game)}
            isLoading={searchIsLoading}
            onChangeSearchInput={(newValue) => setsearchQuery(newValue)}
            searchInput={searchQuery}
            searchResults={searchResults}
          />
        ) : (
          <AddGameDialogDetailView
            game={selectedGame}
            onBack={() => setSelectedGame(null)}
            onAddGame={(params) => handleAddGame(params)}
          />
        )
      }
      onOpenChange={(isOpen) => handleOpenChange(isOpen)}
    ></AppDialog>
  );
};

export default AddGameDialog;
