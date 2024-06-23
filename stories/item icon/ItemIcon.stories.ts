import type { Meta, StoryObj } from '@storybook/react';
import { ItemIcon } from './ItemIcon';

const meta = {
  title: 'Item/Icon',
  component: ItemIcon,
} satisfies Meta<typeof ItemIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultItemIcon: Story = {
  args: {

  },
};

export const Blue: Story = {
  args: {
    fillColor: "#0000F0",
  },
};

export const Large: Story = {
  args: {
    size: 300,
  },
};
