import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../ui/button";
import checkboxDropdown from "./checkbox-dropdown";

const meta: Meta<typeof checkboxDropdown> = {
  component: checkboxDropdown,
};

export default meta;
type Story = StoryObj<typeof checkboxDropdown>;

export const Default: Story = {
  args: {
    keepOpen: false,
    menuLabel: "Menu Label",
    trigger: <Button>Some Button</Button>,
    elements: [
      {
        label: "Element 1",
        key: "el1",
        isActive: true,
      },
    ],
  },
};

export const KeepOpen: Story = {
  args: {
    keepOpen: true,
    menuLabel: "Menu Label",
    trigger: <Button>Some Button</Button>,
    elements: [
      {
        label: "Element 1",
        key: "el1",
        isActive: true,
      },
    ],
  },
};
