import React, { useState } from "react";
import { TStatusKey } from "@/lib/status";
import GameDashboardView from "./game-dashboard-view";

// Sample game data

interface Game {
  id: number;
  name: string;
  cover: string;
  status: TStatusKey;
  platform: string;
}
const DEMOGAMES: Game[] = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    cover: "/placeholder.svg?height=150&width=120",
    status: "BACKLOG",
    platform: "Nintendo Switch",
  },
  {
    id: 2,
    name: "God of War Ragnarök",
    cover: "/placeholder.svg?height=150&width=120",
    status: "COMPLETED",
    platform: "PlayStation 5",
  },
  {
    id: 3,
    name: "Elden Ring",
    cover: "/placeholder.svg?height=150&width=120",
    status: "ON_HOLD",
    platform: "PC",
  },
  {
    id: 4,
    name: "Halo Infinite",
    cover: "/placeholder.svg?height=150&width=120",
    status: "PLAYING",
    platform: "Xbox Series X",
  },
  {
    id: 5,
    name: "Cyberpunk 2077",
    cover: "/placeholder.svg?height=150&width=120",
    status: "PREORDER",
    platform: "PC",
  },
  {
    id: 6,
    name: "Animal Crossing: New Horizons",
    cover: "/placeholder.svg?height=150&width=120",
    status: "WANT_TO_BUY",
    platform: "Nintendo Switch",
  },
];

const GameDashboard = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [platformFilter, setPlatformFilter] = useState("All");
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  return <GameDashboardView />;
};

export default GameDashboard;
