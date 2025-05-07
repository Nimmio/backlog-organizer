import { getCoverFromStoreForId } from "@/app/(withNavigation)/actions";
import DeleteConfirmation from "@/components/delete-confirmation/delete-confirmation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getStatusAsArray, getStatusColor } from "@/lib/status";
import { GameStatusWithIgdbGame } from "@/types/igdb/game";
import { Eye } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface GameDashboardGridCardProps {
  game: GameStatusWithIgdbGame;
  onDelete: (id: number) => void;
}

const GameDashboardGridCard = (props: GameDashboardGridCardProps) => {
  const { game, onDelete } = props;
  const { id, status: gameStatus, igdbGame } = game;
  const [cover, setCover] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (igdbGame?.coverId) {
      getCoverFromStoreForId(igdbGame?.coverId).then((blob) => {
        setCover(URL.createObjectURL(blob as Blob));
      });
    }
    return () => {
      setCover(undefined);
    };
  }, [igdbGame?.coverId]);

  if (!igdbGame) return <></>;
  return (
    <Card key={id} className="overflow-hidden flex flex-col p-0">
      <div className="flex flex-1">
        <div className="w-[120px] bg-muted flex-shrink-0">
          <Image
            width={120}
            height={160}
            src={cover || "/placeholder.svg"}
            alt={`${igdbGame.name} cover`}
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold line-clamp-2">{igdbGame.name}</h3>
            {/* <PlatformDropdown gameId={game.id} currentPlatform={game.platform} /> */}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Badge
                className={`mt-2 cursor-pointer ${
                  getStatusColor(gameStatus) || "bg-gray-500"
                } hover:${getStatusColor(gameStatus) || "bg-gray-600"}`}
              >
                {gameStatus}
              </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {getStatusAsArray().map((status) => (
                <DropdownMenuItem
                  key={status.key}
                  onClick={() => {}}
                  className={
                    status.translation.en === gameStatus ? "font-bold" : ""
                  }
                >
                  {status.translation.en}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </div>
      <CardFooter className="px-4 py-2 border-t flex justify-end gap-2 bg-muted/10">
        <Button variant="outline" size="sm" className="h-8 px-2 gap-1">
          <Eye className="h-4 w-4" />
          <span>View</span>
        </Button>
        <DeleteConfirmation
          gameName={igdbGame.name}
          onDeleteConfirm={() => {
            onDelete(id);
          }}
        />
      </CardFooter>
    </Card>
  );
};

export default GameDashboardGridCard;
