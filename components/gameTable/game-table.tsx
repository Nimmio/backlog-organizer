import { game } from "@/generated/prisma";
import { DataTable } from "../dataTable/data-table";
import { columns } from "./columns";

interface GameTableProps {
  games: game[];
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
