"use client";

import { game } from "@/generated/prisma";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import Link from "next/link";
import { Edit, Eye } from "lucide-react";

export const columns: ColumnDef<game>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "platform",
    header: "Platform",
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
        </>
      );
    },
  },
];
