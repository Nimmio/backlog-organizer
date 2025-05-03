"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye } from "lucide-react";
import DeleteGamePopover from "../deleteGamePopover/delete-game-popover";
import { Game, GameStatus } from "@/generated/prisma";
import { statusTranslation } from "@/lib/game";
import GameStatusFilterDropdown from "../gameStatusFilterDropdown/game-status-filter-dropdown";
import SortIconButton from "../sortIconButton/sort-icon-button";
import ColumnButton from "./columnButton";

type GameStatusWithIgdb = GameStatus & {
  igdbGame: Game;
};

export const columns: ColumnDef<GameStatusWithIgdb>[] = [
  {
    accessorKey: "name",
    accessorFn: (row) => row.igdbGame.name,
    header: () => (
      <>
        Name
        <SortIconButton type="letter" name="name" />
      </>
    ),
  },
  {
    accessorKey: "platform",
    header: () => (
      <>
        Platform
        <SortIconButton type="letter" name="platform" />
      </>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <>
        Status
        <GameStatusFilterDropdown />
      </>
    ),

    cell: ({ row }) => {
      const status = statusTranslation(row.getValue("status"));
      return <>{status}</>;
    },
  },
  {
    accessorKey: "genres",
    accessorFn: (row) => row.igdbGame.genres,
    header: () => (
      <>
        Genre
        <SortIconButton type="letter" name="genre" />
      </>
    ),
  },
  {
    accessorKey: "releaseDate",
    header: () => (
      <>
        Release Date
        <SortIconButton type="number" name="releaseDate" />
      </>
    ),
    cell: ({ row }) => <>{row.getValue("releaseDate")}</>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const game = row.original;

      return (
        <>
          <ColumnButton
            icon={<Eye />}
            link={`view/${game.id}/`}
            tooltip="View"
          />
          <ColumnButton
            icon={<Edit />}
            link={`edit/${game.id}/`}
            tooltip="Edit"
          />
          <DeleteGamePopover id={game.id} />
        </>
      );
    },
  },
];
