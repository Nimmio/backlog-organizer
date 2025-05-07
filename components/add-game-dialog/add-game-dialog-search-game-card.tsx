import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { SearchGame } from "@/types/igdb/game";
import { format, fromUnixTime } from "date-fns";
import { getUrl } from "@/lib/igdb/cover";

interface GameCardProps {
  game: SearchGame;
  onClick: () => void;
}

const AddGameDialogSearchGameCard = (props: GameCardProps) => {
  const { game, onClick } = props;
  const { name, first_release_date, cover } = game;
  return (
    <Card
      className="overflow-hidden cursor-pointer transition-all hover:shadow-md p-0  max-w-[295px] min-w-[200px]"
      onClick={onClick}
    >
      {game.cover && game.cover.url !== "" ? (
        <div className="aspect-[3/4] relative mx-auto md:mx-0 w-full max-w-[295px]">
          <Image
            src={getUrl(game.cover.url as string, "cover_big")}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-[3/4]  relative"></div>
      )}
      <CardContent className="pb-4">
        <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
        <p className="text-sm text-muted-foreground">
          {first_release_date
            ? format(fromUnixTime(first_release_date), "dd.MM.yyyy")
            : "Release date unknown"}
        </p>
      </CardContent>
    </Card>
  );
};

export default AddGameDialogSearchGameCard;
