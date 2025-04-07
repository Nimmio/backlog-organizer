import type { Meta } from "@storybook/react";

import AppSidebar, { ISidebarLinks } from "./app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Home, User } from "lucide-react";

const meta: Meta<typeof AppSidebar> = {
  component: AppSidebar,
};

export default meta;

const sidebarLinks: ISidebarLinks = {
  groups: [
    { elements: [{ label: "Home", link: "/", icon: Home }] },
    {
      label: "Settings",
      elements: [{ label: "User", link: "/users", icon: User }],
    },
  ],
};

export const Default = () => (
  <html lang="en">
    <body>
      <SidebarProvider>
        <AppSidebar links={sidebarLinks} />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    </body>
  </html>
);

export const Floating = () => (
  <html lang="en">
    <body>
      <SidebarProvider>
        <AppSidebar links={sidebarLinks} variant="floating" />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    </body>
  </html>
);

export const inset = () => (
  <html lang="en">
    <body>
      <SidebarProvider>
        <AppSidebar links={sidebarLinks} variant="inset" />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    </body>
  </html>
);

export const Righ = () => (
  <html lang="en">
    <body>
      <SidebarProvider>
        <AppSidebar links={sidebarLinks} side="right" />
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    </body>
  </html>
);
