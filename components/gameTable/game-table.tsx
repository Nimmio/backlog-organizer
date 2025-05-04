import { GameStatus } from "@/generated/prisma";
import { DataTable } from "../dataTable/data-table";
import { columns } from "./columns";

interface GameTableProps {
  games: GameStatus[];
}

const GameTable = (props: GameTableProps) => {
  const { games } = props;
  return (
    <div>
      <DataTable columns={columns} data={games} />
    </div>
  );
};

export default GameTable;
