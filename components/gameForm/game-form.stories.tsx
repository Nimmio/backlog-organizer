import type { Meta, StoryObj } from "@storybook/react";
import GameForm from "./game-form";

const meta: Meta<typeof GameForm> = {
  component: GameForm,
};

export default meta;
type Story = StoryObj<typeof GameForm>;

export const Default: Story = {
  args: {},
};
