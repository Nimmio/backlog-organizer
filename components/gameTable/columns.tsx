"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import Link from "next/link";
import { Edit, Eye } from "lucide-react";
import DeleteGamePopover from "../deleteGamePopover/delete-game-popover";
import { Game } from "@/generated/prisma";
import { statusTranslation } from "@/lib/game";
import { format } from "date-fns";

export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "platform",
    header: "Platform",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = statusTranslation(row.getValue("status"));
      return <>{status}</>;
    },
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "releaseDate",
    header: "Release Date",
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
