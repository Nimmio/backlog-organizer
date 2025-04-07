import type { Meta, StoryObj } from "@storybook/react";
import AppHeader from "./app-header";
import { SidebarProvider } from "@/components/ui/sidebar";

const meta: Meta<typeof AppHeader> = {
  component: AppHeader,
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {
  args: {},
};

export const WithSidebarTrigger = () => (
  <html lang="en">
    <body>
      <SidebarProvider>
        <AppHeader withSidebarTrigger />
      </SidebarProvider>
    </body>
  </html>
);
