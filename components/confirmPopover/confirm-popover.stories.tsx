import type { Meta, StoryObj } from "@storybook/react";
import ConfirmPopover from "./confirm-popover";
import { Button } from "../ui/button";

const meta: Meta<typeof ConfirmPopover> = {
  component: ConfirmPopover,
};

export default meta;
type Story = StoryObj<typeof ConfirmPopover>;

export const Default: Story = {
  args: {
    trigger: <Button>Trigger</Button>,
    description: "Description",
    confirmButtonText: "Confirm",
  },
};

export const destructive: Story = {
  args: {
    trigger: <Button>Trigger</Button>,
    description: "Description",
    confirmButtonText: "Confirm",
    isDescrutive: true,
  },
};
