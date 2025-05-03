"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  getMultipleStatusKeysTranslatedWithAll,
  getStatusColor,
  getStatusTranslation,
  TStatusKey,
} from "@/lib/status";
import GameDashboardControls from "./controls/game-dashboard-controls";

// Status and platform options for filters
const platformOptions = [
  "All",
  "PC",
  "PlayStation 5",
  "Xbox Series X",
  "Nintendo Switch",
];

interface GameDashboardViewProps {
  games: Array<{
    id: number;
    name: string;
    cover: string;
    status: TStatusKey;
    platform: string;
  }>;
}

export default function GameDashboardView(props: GameDashboardViewProps) {
  const { games } = props;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Video Game Library</h1>
      <GameDashboardControls
        search={{ value: searchInputValue, onChange: setSearchInputValue }}
        platformFilter={{
          value: platformFilter,
          onChange: setPlatformFilter,
          options: platformOptions,
        }}
        statusFilter={{
          value: statusFilter,
          onChange: (value) => setStatusFilter(value),
          options: getMultipleStatusKeysTranslatedWithAll(),
        }}
      />
      statusFilter:{statusFilter}
      {/* Game Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {games.length > 0 ? (
          games.map((game) => (
            <Card key={game.id} className="overflow-hidden p-2">
              <div className="flex h-full">
                <div className="w-[120px] bg-muted flex-shrink-0">
                  <img
                    src={game.cover || "/placeholder.svg"}
                    alt={`${game.name} cover`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold line-clamp-2">{game.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {game.platform}
                    </p>
                  </div>
                  <Badge
                    className={`mt-2 ${
                      getStatusColor(game.status as TStatusKey) || "bg-gray-500"
                    } min-w-[100]`}
                  >
                    {getStatusTranslation(game.status)}
                  </Badge>
                </CardContent>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-muted-foreground">
              No games found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
