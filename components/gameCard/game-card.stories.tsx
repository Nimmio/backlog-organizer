import type { Meta, StoryObj } from "@storybook/react";
import GameCard from "./game-card";

const meta: Meta<typeof GameCard> = {
  component: GameCard,
};

export default meta;
type Story = StoryObj<typeof GameCard>;

export const Default: Story = {
  args: {
    name: "Some Game",
    platform: "PC",
  },
};
