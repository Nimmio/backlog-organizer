import type { Meta, StoryObj } from "@storybook/react";
import GameTable from "./game-table";
import { Game } from "@/types/game";

const meta: Meta<typeof GameTable> = {
  component: GameTable,
};

export default meta;
type Story = StoryObj<typeof GameTable>;

const games: Game[] = [
  {
    id: "1",
    name: "Cyberpunk 2077",
    platform: "PC",
  },
  {
    id: "2",
    name: "Stardew Valley",
    platform: "Nintendo Switch",
  },
  {
    id: "3",
    name: "Elden Ring",
    platform: "PlayStation 5",
  },
  {
    id: "4",
    name: "Grand Theft Auto V",
    platform: "Xbox Series X",
  },
  {
    id: "5",
    name: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
  },
  {
    id: "6",
    name: "Hades",
    platform: "PC",
  },
  {
    id: "7",
    name: "Red Dead Redemption 2",
    platform: "PlayStation 4",
  },
  {
    id: "8",
    name: "Minecraft",
    platform: "Mobile",
  },
];

export const Default: Story = {
  args: {
    games: games,
  },
};

export const Empty: Story = {
  args: {
    games: [],
  },
};
