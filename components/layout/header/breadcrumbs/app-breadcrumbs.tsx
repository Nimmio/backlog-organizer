"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumStore } from "@/providers/breadcrum-store-provider";
import Link from "next/link";
import React, { Fragment } from "react";

const AppBreadcrumbs = () => {
  const { breadcrumbs } = useBreadcrumStore((state) => state);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb, index) => (
            <Fragment key={breadcrumb.title}>
              <BreadcrumbItem>
                {breadcrumb.hasOwnProperty("href") ? (
                  <BreadcrumbLink asChild>
                    <Link href={breadcrumb.href || ""}>{breadcrumb.title}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index + 1 !== breadcrumbs.length && <BreadcrumbSeparator />}
            </Fragment>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumbs;
