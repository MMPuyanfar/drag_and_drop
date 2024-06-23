import type { Meta, StoryObj } from '@storybook/react';
import { Item } from './Item';

const meta = {
  title: 'Item',
  component: Item,
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultItem: Story = {
  args: {
  },
};

export const WithRemove: Story = {
  args: {
    showRemoveIcon: true,
  },
};
