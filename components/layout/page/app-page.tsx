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
  const { children, breadcrumbs = [] } = props;
  return (
    <main>
      <BreadcrumbSetter newBreadcrumbs={breadcrumbs} />
      <Card className="p-4">{children}</Card>
    </main>
  );
};

export default AppPage;
