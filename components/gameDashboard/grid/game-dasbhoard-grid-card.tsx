import { getCoverFromStoreForId } from "@/app/(withNavigation)/actions";
import DeleteConfirmation from "@/components/delete-confirmation/delete-confirmation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GameStatusWithIgdbGame } from "@/types/igdb/game";
import { Eye } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GameDashboardGridCardStatusDropdown from "./game-dashboard-grid-card-status-dropdown";
import { Platform, Status } from "@/generated/prisma";
import GameDashboardGridCardPlatformDropdown from "./game-dashboard-grid-card-platform-dropdown";

interface GameDashboardGridCardProps {
  game: GameStatusWithIgdbGame;
  onDelete: (id: number) => void;
  onChangeStatus: ({
    id,
    newStatus,
  }: {
    id: number;
    newStatus: Status;
  }) => void;
  onChangePlatform: (newPlatform: string) => void;
}

const GameDashboardGridCard = (props: GameDashboardGridCardProps) => {
  const { game, onDelete, onChangeStatus, onChangePlatform } = props;
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

  const handleStatusChange = ({
    id,
    newStatus,
  }: {
    id: number;
    newStatus: Status;
  }) => {
    onChangeStatus({ id, newStatus });
  };

  if (!igdbGame) return <></>;
  return (
    <Card key={id} className="overflow-hidden flex flex-col p-0">
      <div className="flex flex-1">
        <div className="bg-muted flex-shrink-0">
          <Image
            width={80}
            height={10}
            src={cover || "/placeholder.svg"}
            alt={`${igdbGame.name} cover`}
          />
        </div>
        <CardContent className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold line-clamp-2">{igdbGame.name}</h3>
            <GameDashboardGridCardPlatformDropdown
              currentPlatform={game.platform?.name || "None"}
              platformOptions={igdbGame.platforms}
              onChange={(newPlatform: string) => onChangePlatform(newPlatform)}
            />
          </div>

          <GameDashboardGridCardStatusDropdown
            statusAsString={gameStatus}
            onChange={(newStatus) => handleStatusChange({ id, newStatus })}
          />
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
