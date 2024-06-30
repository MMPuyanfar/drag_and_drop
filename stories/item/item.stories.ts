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
    id: 1,
    handleRemove(e) {
      console.log(e);
    },
  },
};

export const BlueItem: Story = {
  args: {
    itemColor: 'blue',
    itemLabel: 'item',
    id: 2,
    handleRemove(e) {
      console.log(e);
    },
  },
};
