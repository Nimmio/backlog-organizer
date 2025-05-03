import IgdbGameDialog from "@/components/igdbGameDialog/igdb-game-dialog";
import { ensureLogin } from "@/lib/user";
import { Metadata } from "next";
import AppPage from "@/components/layout/page/app-page";
import { getGamesForDashboard } from "./actions";
import GameDashboard from "@/components/gameDashboard/game-dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Backlock Organizer Dashboard",
};

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  await ensureLogin();

  const games = await getGamesForDashboard();

  return (
    <AppPage titel="Dashboard" breadcrumbs={[{ title: "Games" }]}>
      <IgdbGameDialog />
      <GameDashboard />
    </AppPage>
  );
};

export default Home;
