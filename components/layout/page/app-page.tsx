import { Card } from "@/components/ui/card";
import React from "react";
import BreadcrumbSetter from "../header/breadcrumbs/breadcrum-setter";
import { breadcrumbs } from "@/stores/breadcrum-store";

interface AppPageProps {
  children: Readonly<React.ReactNode>;
  titel: string;
  breadcrumbs?: breadcrumbs;
}

const AppPage = (props: AppPageProps) => {
  const { children, titel, breadcrumbs = [] } = props;
  return (
    <main>
      <BreadcrumbSetter newBreadcrumbs={breadcrumbs} />

      <h1 className="text-3xl font-bold mb-4">{titel}</h1>

      <Card className="p-4">{children}</Card>
    </main>
  );
};

export default AppPage;
