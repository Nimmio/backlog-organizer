import type { Meta, StoryObj } from "@storybook/react";
import ImageBackgroundCard from "./imageBackgroundCard";

const meta: Meta<typeof ImageBackgroundCard> = {
  component: ImageBackgroundCard,
};

export default meta;
type Story = StoryObj<typeof ImageBackgroundCard>;

export const Default: Story = {
  args: { 
    title: 'Blub',
    description: 'Bla',
    imageSrc: '/cover.webp',
    altText: 'Cover' },
};
