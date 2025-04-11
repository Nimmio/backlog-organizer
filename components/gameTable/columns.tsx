"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import Link from "next/link";
import { Edit, Eye, Funnel } from "lucide-react";
import DeleteGamePopover from "../deleteGamePopover/delete-game-popover";
import { Game } from "@/generated/prisma";
import { statusTranslation } from "@/lib/game";
import { format } from "date-fns";
import GameStatusFilterDropdown from "../gameStatusFilterDropdown/game-status-filter-dropdown";
import SortIconButton from "../sortIconButton/sort-icon-button";

export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: "name",
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
    accessorKey: "genre",
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
    cell: ({ row }) => <>{format(row.getValue("releaseDate"), "PPP")}</>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const game = row.original;

      return (
        <>
          <Button asChild variant="ghost">
            <Link href={`view/${game.id}/`}>
              <Eye />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href={`edit/${game.id}/`}>
              <Edit />
            </Link>
          </Button>
          <DeleteGamePopover id={game.id} />
        </>
      );
    },
  },
];
