"use client";

import { useBreadcrumStore } from "@/providers/breadcrum-store-provider";
import { breadcrumbs } from "@/stores/breadcrum-store";
import React, { useEffect } from "react";

interface BreadcrumbSetterProps {
  newBreadcrumbs: breadcrumbs;
}

const BreadcrumbSetter = (props: BreadcrumbSetterProps) => {
  const { newBreadcrumbs } = props;
  const { breadcrumbs, setBreadcrumbs } = useBreadcrumStore((state) => state);
  useEffect(() => {
    if (breadcrumbs !== newBreadcrumbs) setBreadcrumbs(newBreadcrumbs);
  }, [newBreadcrumbs, breadcrumbs, setBreadcrumbs]);

  return <></>;
};

export default BreadcrumbSetter;
