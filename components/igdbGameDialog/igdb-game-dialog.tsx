"use client";
import { useQueryString } from "@/hooks/use-query-string,";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "../ui/input";
import AppDialog from "../Dialog/app-dialog";
import { getGameDetails, searchGame } from "@/app/actions";
import { number } from "zod";
import { format, fromUnixTime } from "date-fns";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import { Genre } from "@/generated/prisma";

interface Game {
  id: number;
  name: string;
  releaseDate?: Date | undefined;
}

interface GameDetails {
  genres: string[];
  platform: string[];
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
        fields: ["name", "first_release_date"],
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
      <Button onClick={() => setSelectedGame(undefined)}>Back</Button>
      <div>Name: {selectedGame?.name}</div>
      <div>
        ReleaseDate:
        {selectedGame?.releaseDate
          ? format(selectedGame?.releaseDate, "yyyy")
          : ""}
      </div>
      <div>
        Genres:
        {gameDetails?.genres.length ? (
          <div className="flex">
            {gameDetails.genres.map((genre: Genre) => (
              <Badge key={genre.id} className="mr-2">
                {genre.name}
              </Badge>
            ))}
          </div>
        ) : (
          <>
            ^^
            <Skeleton />
          </>
        )}
      </div>
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
