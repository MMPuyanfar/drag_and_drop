import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta = {
  title: 'Container',
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultContainer: Story = {
  args: {
    containerId: 'main'
  }
};

export const BigConrainer: Story = {
  args: {
    containerId: 'alt',
    row: 3,
    column: 4
  }
};
