import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { GameStatus, Platform } from "@/generated/prisma";

interface PlatformTableProps {
  platforms: (Platform & { gameStatus: GameStatus[] })[];
}

const PlatformTable = (props: PlatformTableProps) => {
  const { platforms } = props;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Games in Backlog</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {platforms.map((platform) => (
          <TableRow key={platform.id}>
            <TableCell>{platform.name}</TableCell>
            <TableCell>{platform.gameStatus.length}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PlatformTable;
