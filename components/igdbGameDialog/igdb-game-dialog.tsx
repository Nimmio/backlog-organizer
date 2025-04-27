"use client";
import { useQueryString } from "@/hooks/use-query-string,";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "../ui/input";
import AppDialog from "../Dialog/app-dialog";
import { searchGame } from "@/app/actions";
import { number } from "zod";
import { format, fromUnixTime } from "date-fns";

interface Game {
  id: number;
  name: string;
  releaseDate?: Date | undefined;
}

const IgdbGameDialog = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const addGameDialogOpen = searchParams.get("addGameDialogOpen") === "true";
  const createQueryString = useQueryString();

  const [input, setInput] = useState<string>("");
  const [debouncedInput] = useDebounce(input, 500);

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    if (debouncedInput !== "") {
      searchGame({
        fields: ["name", "first_release_date"],
        search: debouncedInput,
        filterEditions: true,
      }).then((response) => {
        const gamesArray: Game[] = [];
        response.forEach((element) => {
          gamesArray.push({
            id: element.id,
            name: element.name,

            releaseDate: element.first_release_date
              ? fromUnixTime(element.first_release_date)
              : undefined,
          });
        });
        setGames(gamesArray);
      });
    } else {
      setGames([]);
    }

    return () => {
      setGames([]);
    };
  }, [debouncedInput]);

  const handleOpenChange = (open: boolean) => {
    setInput("");
    router.push(
      `${pathname}?${createQueryString(
        "addGameDialogOpen",
        open ? "true" : ""
      )}`
    );
  };

  const content = (
    <>
      <Input
        placeholder="GameName"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      {games && games.length > 0 && (
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              {game.name}
              {game.releaseDate ? ` (${format(game.releaseDate, "yyyy")})` : ""}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <AppDialog
      title="Add Game"
      description="Add a new Game to the Backlog"
      content={content}
      open={addGameDialogOpen}
      onOpenChange={(open) => {
        handleOpenChange(open);
      }}
    />
  );
};

export default IgdbGameDialog;
