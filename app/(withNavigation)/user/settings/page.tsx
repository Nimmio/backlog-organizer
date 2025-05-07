import BreadcrumbSetter from "@/components/layout/header/breadcrumbs/breadcrum-setter";
import { Card } from "@/components/ui/card";
import UserSettingsForm from "@/components/userSettingsForm/user-settings-form";
import prisma from "@/lib/prisma";
import { getCurrentUserId } from "@/lib/user";
import React from "react";

const Page = async () => {
  const currentUserId = await getCurrentUserId();

  const settings = await prisma.userSettings.findFirst({
    where: { userId: currentUserId },
  });

  return (
    <main>
      <BreadcrumbSetter
        newBreadcrumbs={[{ title: "User" }, { title: "Settings" }]}
      />
      <Card className="p-4">
        <UserSettingsForm settings={settings} userId={currentUserId} />
      </Card>
    </main>
  );
};

export default Page;
