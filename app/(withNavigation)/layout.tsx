import type { Metadata } from "next";
import "../globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/sidebar/app-sidebar";
import AppHeader from "@/components/layout/header/app-header";
import AppMain from "@/components/layout/main/app-main";
import { BreadcrumStoreProvider } from "@/providers/breadcrum-store-provider";
import { UserStoreProvider } from "@/providers/user-store-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ThemeSetter from "@/components/themeSetter/ThemeSetter";
import { ensureLogin, getCurrentUser } from "@/lib/user";
import SidebarLinks from "@/components/layout/sidebar/app-sidebar-link";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Backlog Organizer",
  description: "Organize your Videogame Backlog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await ensureLogin();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserStoreProvider user={await getCurrentUser()}>
            <ThemeSetter />
            <BreadcrumStoreProvider>
              <SidebarProvider>
                <AppSidebar links={SidebarLinks} />
                <SidebarInset>
                  <AppHeader withSidebarTrigger />
                  <main>
                    <AppMain>{children}</AppMain>
                  </main>
                  <Toaster />
                </SidebarInset>
              </SidebarProvider>
            </BreadcrumStoreProvider>
          </UserStoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
