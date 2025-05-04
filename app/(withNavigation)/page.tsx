import { ensureLogin } from "@/lib/user";
import { Metadata } from "next";
import AppPage from "@/components/layout/page/app-page";
import { getGamesForDashboard } from "./actions";
import GameDashboard from "@/components/gameDashboard/game-dashboard";
import { GameDashboardStoreProvider } from "@/providers/gamedashboard-store-provider";
import { TStatusKeyWithAll } from "@/lib/status";
import { getJsonParsedStringOrNull } from "@/lib/utils";
import AddGameDialog from "@/components/add-game-dialog/add-game-dialog";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Backlock Organizer Dashboard",
};

interface DashboardControlsParsed {
  search: string;
  status: TStatusKeyWithAll;
  platform: string;
}

const DashboardControlsParsedDefaults: DashboardControlsParsed = {
  search: "",
  status: "All",
  platform: "All",
};

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { dashboardControls } = await searchParams;

  await ensureLogin();

  let parsedControls = getJsonParsedStringOrNull(
    dashboardControls as string
  ) as DashboardControlsParsed | null;
  if (!parsedControls) parsedControls = DashboardControlsParsedDefaults;

  const { search, status, platform } = parsedControls;

  const games = await getGamesForDashboard({ search, status, platform });
  return (
    <AppPage titel="Dashboard" breadcrumbs={[{ title: "Games" }]}>
      <AddGameDialog />
      <GameDashboardStoreProvider>
        <GameDashboard games={games} />
      </GameDashboardStoreProvider>
    </AppPage>
  );
};

export default Home;
