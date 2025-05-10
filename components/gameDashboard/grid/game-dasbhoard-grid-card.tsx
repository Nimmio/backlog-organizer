import DeleteConfirmation from "@/components/delete-confirmation/delete-confirmation";
import { GameStatusWithIgdbGame } from "@/types/igdb/game";
import Image from "next/image";
import React from "react";
import GameDashboardGridCardStatusDropdown from "./game-dashboard-grid-card-status-dropdown";
import { Status } from "@/generated/prisma";

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
  const { game, onDelete, onChangeStatus } = props;
  const { id, status: gameStatus, igdbGame } = game;

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
    <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 border-2 pointer-none:">
      {/* Cover Image */}
      <div className="aspect-[3/4] relative">
        <Image
          fill
          src={igdbGame.coverUrl || "/placeholder.svg"}
          alt={`${igdbGame.name} cover`}
          className="w-full h-full object-cover"
        />

        {/* Status Badge - Top Left */}
        <div className="absolute top-2 left-2">
          <GameDashboardGridCardStatusDropdown
            statusAsString={gameStatus}
            onChange={(newStatus) => handleStatusChange({ id, newStatus })}
          />
        </div>
        <div className="absolute top-2 right-2">
          <DeleteConfirmation
            gameName={igdbGame.name}
            onDeleteConfirm={() => {
              onDelete(id);
            }}
          />
        </div>

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute bottom-2 text-center w-full">
            <h3 className="font-semibold line-clamp-1 mb-1">{igdbGame.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDashboardGridCard;
