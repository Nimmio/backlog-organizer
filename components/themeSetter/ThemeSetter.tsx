"use client";

import { getUserTheme } from "@/app/(withNavigation)/user/settings/actions";
import { useUserStore } from "@/providers/user-store-provider";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

const ThemeSetter = () => {
  const { theme, setTheme } = useTheme();
  const userStore = useUserStore((state) => state);
  const userId = userStore.user?.id;
  useEffect(() => {
    if (typeof userId === "string")
      getUserTheme(userId).then((systemTheme) => {
        if (systemTheme && systemTheme.toLowerCase() !== theme) {
          setTheme(systemTheme.toLowerCase());
        }
      });
  }, [theme, setTheme, userId]);

  return <></>;
};

export default ThemeSetter;
