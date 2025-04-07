import type { Meta, StoryObj } from "@storybook/react";
import addGameForm from "./add-game-form";

const meta: Meta<typeof addGameForm> = {
  component: addGameForm,
};

export default meta;
type Story = StoryObj<typeof addGameForm>;

export const Default: Story = {
  args: {
    handleSubmit: (values) => console.log(values),
  },
};
