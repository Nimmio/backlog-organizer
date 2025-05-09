import React from "react";
import GameDashboardGridEmpty from "./game-dashboard-empty";
import GameDashboardGridCard from "./game-dasbhoard-grid-card";
import { GameStatus, Platform, Status } from "@/generated/prisma";

interface GameDasbhoardGridProps {
  games: GameStatus[];
  onDelete: (id: number) => void;
  onStatusChange: ({
    id,
    newStatus,
  }: {
    id: number;
    newStatus: Status;
  }) => void;
  onPlatformChange: ({
    id,
    newPlatform,
  }: {
    id: number;
    newPlatform: Platform;
  }) => void;
}

const GameDasbhoardGrid = (props: GameDasbhoardGridProps) => {
  const { games, onDelete, onStatusChange, onPlatformChange } = props;

  const isEmpty = games.length === 0;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {!isEmpty ? (
        games.map((game) => (
          <GameDashboardGridCard
            game={game}
            key={game.id}
            onDelete={(id) => onDelete(id)}
            onChangeStatus={({ id, newStatus }) =>
              onStatusChange({ id, newStatus })
            }
            onChangePlatform={(newPlatform: Platform) =>
              onPlatformChange({ id: game.id, newPlatform })
            }
          />
        ))
      ) : (
        <GameDashboardGridEmpty />
      )}
    </div>
  );
};

export default GameDasbhoardGrid;
