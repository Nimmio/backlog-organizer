"use client";

import { Game } from "@/types/game";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Game>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "platform",
    header: "Platform",
  },
];
