import type { Meta, StoryObj } from "@storybook/react";
import AppDialog from "./app-dialog";

const meta: Meta<typeof AppDialog> = {
  component: AppDialog,
};

export default meta;
type Story = StoryObj<typeof AppDialog>;

export const Default: Story = {
  args: {
    open: true,
    title: "Test-Title",
    description: "Test-Description",
    content: <>Test-Content</>,
    footer: <>Test-Footer</>,
  },
};
