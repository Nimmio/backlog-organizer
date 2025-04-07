import AddGameDialog from "@/components/addGameDialog/add-game-dialog";
import GameTable from "@/components/gameTable/game-table";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { Game } from "@/types/game";
import Link from "next/link";

const Home = async () => {
  const games = await prisma.game.findMany();
  console.log(games);
  return (
    <main>
      <AddGameDialog />
      <Button asChild className="mb-4">
        <Link href="?addGameDialogOpen=true">Add New Game</Link>
      </Button>
      <GameTable games={games} />
    </main>
  );
};

export default Home;
