import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getStatusColor, getStatusTranslation, TStatusKey } from "@/lib/status";
import { GameStatusWithIgdbGame } from "@/types/igdb/game";
import Image from "next/image";
import React from "react";

interface GameDashboardGridCardProps {
  game: GameStatusWithIgdbGame;
}

const GameDashboardGridCard = (props: GameDashboardGridCardProps) => {
  const { game } = props;
  const { id, platform, status, igdbGame } = game;
  return (
    <Card key={id} className="overflow-hidden p-5">
      <div className="flex h-full">
        <div className="w-[120px] bg-muted flex-shrink-0 mt-1">
          <Image
            width={120}
            height={160}
            src={
              igdbGame?.hasCover
                ? "/covers/" + igdbGame?.id + ".jpg"
                : "/placeholder.jpg"
            }
            alt={`${name} cover`}
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent className=" flex flex-col justify-between">
          <div>
            <h3 className="font-semibold line-clamp-2">{igdbGame?.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {platform ? platform.name : ""}
            </p>
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
