import type { Meta, StoryObj } from "@storybook/react";
import AppCard from "./app-card";

const meta: Meta<typeof AppCard> = {
  component: AppCard,
};

export default meta;
type Story = StoryObj<typeof AppCard>;

export const Default: Story = {
  args: { content: "Content" },
};

export const WithTitle: Story = {
  args: { content: "Content", title: "Title" },
};

export const WithDescription: Story = {
  args: { content: "Content", description: "description" },
};

export const WithTitleAndDescription: Story = {
  args: { content: "Content", title: "Title", description: "description" },
};

export const withFooter: Story = {
  args: { content: "Content", footer: "Footer" },
};

export const Full: Story = {
  args: {
    content: "Content",
    footer: "Footer",
    title: "Title",
    description: "description",
  },
};
