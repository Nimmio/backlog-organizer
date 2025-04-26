"use client";

import { getUserTheme } from "@/app/(withNavigation)/user/settings/actions";
import { authClient } from "@/lib/auth-client";
import { useUserStore } from "@/providers/user-store-provider";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

const ThemeSetter = () => {
  const { theme, setTheme } = useTheme();
  const userStore = useUserStore((state) => state);
  useEffect(() => {
    getUserTheme(userStore.user?.id as string).then((systemTheme) => {
      if (systemTheme && systemTheme.toLowerCase() !== theme) {
        setTheme(systemTheme);
      }
    });
  }, [theme]);

  return <></>;
};

export default ThemeSetter;
