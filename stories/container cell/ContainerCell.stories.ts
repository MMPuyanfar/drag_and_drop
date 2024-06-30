import type { Meta, StoryObj } from '@storybook/react';
import { ContainerCell } from './ContainerCell';

const meta = {
  title: 'ContainerCell',
  component: ContainerCell,
} satisfies Meta<typeof ContainerCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultContainerCell: Story = {
  args: {
    itemObj: null,
    position: '0main'
  },
};

export const BlueItemInCell: Story = {
  args: {
    itemObj: {
      id: 1,
      itemColor: 'blue',
      itemLabel: 'ItemInCell'
    },
    position: '2main'
  },
};
