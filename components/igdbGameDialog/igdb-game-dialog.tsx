"use client";
import { useQueryString } from "@/hooks/use-query-string,";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "../ui/input";
import AppDialog from "../Dialog/app-dialog";
import { getGameDetails, searchGame } from "@/app/actions";
import { format, formatDate, fromUnixTime } from "date-fns";
import { Button } from "../ui/button";
import GameDetailsCard from "./igdb-game-dialog-details";

interface Game {
  id: number;
  name: string;
  releaseDate?: Date | undefined;
}

interface GameDetails {
  genres: string[];
  platforms: string[];
  summary: string;
  cover: string;
}

const IgdbGameDialog = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const addGameDialogOpen = searchParams.get("addGameDialogOpen") === "true";
  const createQueryString = useQueryString();

  const [input, setInput] = useState<string>("");
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | undefined>(undefined);
  const [gameDetails, setGameDetails] = useState<GameDetails | undefined>(
    undefined
  );
  const [debouncedInput] = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedInput !== "") {
      searchGame({
        search: debouncedInput,
        filterEditions: true,
      }).then((response) => {
        const gamesArray: Game[] = [];
        response.forEach(
          (element: {
            id: number;
            name: string;
            first_release_date: number;
          }) => {
            gamesArray.push({
              id: element.id,
              name: element.name,

              releaseDate: element.first_release_date
                ? fromUnixTime(element.first_release_date)
                : undefined,
            });
          }
        );
        setGames(gamesArray);
      });
    } else {
      setGames([]);
    }

    return () => {
      setGames([]);
    };
  }, [debouncedInput]);

  useEffect(() => {
    if (selectedGame) {
      getGameDetails(selectedGame.id).then((gameDetails) => {
        setGameDetails(gameDetails);
      });
    }
    return () => {
      setGameDetails(undefined);
    };
  }, [selectedGame]);

  const handleOpenChange = (open: boolean) => {
    setInput("");
    setSelectedGame(undefined);
    setGameDetails(undefined);
    router.push(
      `${pathname}?${createQueryString(
        "addGameDialogOpen",
        open ? "true" : ""
      )}`
    );
  };

  const handleButtonClick = (game: Game) => {
    setSelectedGame(game);
  };

  const handleBackButtonClick = () => {
    setSelectedGame(undefined);
    setGameDetails(undefined);
  };

  const contentSearch = (
    <>
      <Input
        placeholder="GameName"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      {games && games.length > 0 && (
        <>
          {games.map((game) => (
            <Button
              key={game.id}
              variant="ghost"
              className="cursor-pointer"
              onClick={() => handleButtonClick(game)}
            >
              {game.name}
              {game.releaseDate ? ` (${format(game.releaseDate, "yyyy")})` : ""}
            </Button>
          ))}
        </>
      )}
    </>
  );

  const contentAdd = (
    <>
      {selectedGame && (
        <GameDetailsCard
          name={selectedGame.name}
          releaseDate={
            selectedGame.releaseDate
              ? formatDate(selectedGame.releaseDate, "dd.MM.yyyy")
              : ""
          }
          description={gameDetails?.summary || ""}
          genres={gameDetails?.genres || undefined}
          onBack={() => handleBackButtonClick()}
          platforms={gameDetails?.platforms || undefined}
          coverImage={
            gameDetails?.cover ? "/covercache/" + gameDetails?.cover : undefined
          }
        />
      )}
    </>
  );

  return (
    <AppDialog
      title="Add Game"
      description="Add a new Game to the Backlog"
      content={selectedGame == undefined ? contentSearch : contentAdd}
      open={addGameDialogOpen}
      onOpenChange={(open) => {
        handleOpenChange(open);
      }}
    />
  );
};

export default IgdbGameDialog;
