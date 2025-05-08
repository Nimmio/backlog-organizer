import AppPage from "@/components/layout/page/app-page";
import PlatformTable from "@/components/platform-table/platform-table";
import prisma from "@/lib/prisma";
import { ensureLogin, getCurrentUserId } from "@/lib/user";
import React from "react";

const Platforms = async () => {
  await ensureLogin();
  const currentUserId = await getCurrentUserId();
  const platforms = await prisma.platform.findMany({
    include: { gameStatus: true },
    where: { gameStatus: { some: { userId: currentUserId } } },
  });
  return (
    <AppPage titel="Dashboard" breadcrumbs={[{ title: "Platforms" }]}>
      <PlatformTable platforms={platforms} />
    </AppPage>
  );
};

export default Platforms;
