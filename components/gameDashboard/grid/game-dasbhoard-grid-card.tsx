import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getStatusColor, getStatusTranslation, TStatusKey } from "@/lib/status";
import React from "react";

interface Game {
  id: number;
  name: string;
  cover: string;
  status: TStatusKey;
  platform: string;
}

interface GameDashboardGridCardProps {
  game: Game;
}

const GameDashboardGridCard = (props: GameDashboardGridCardProps) => {
  const { game } = props;
  const { id, cover, name, platform, status } = game;
  return (
    <Card key={id} className="overflow-hidden p-2">
      <div className="flex h-full">
        <div className="w-[120px] bg-muted flex-shrink-0">
          <img
            src={cover || "/placeholder.svg"}
            alt={`${name} cover`}
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold line-clamp-2">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{platform}</p>
          </div>
          <Badge
            className={`mt-2 ${
              getStatusColor(status as TStatusKey) || "bg-gray-500"
            } min-w-[100]`}
          >
            {getStatusTranslation(status)}
          </Badge>
        </CardContent>
      </div>
    </Card>
  );
};

export default GameDashboardGridCard;
