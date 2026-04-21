import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'padded', backgrounds: { default: 'dark' } },
  argTypes: {
    variant: { control: 'select', options: ['purple', 'indigo', 'success', 'warning', 'error'] },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Purple: Story = { args: { children: 'Community', variant: 'purple' } };
export const Indigo: Story  = { args: { children: 'Tech', variant: 'indigo' } };
export const Success: Story = { args: { children: 'Active', variant: 'success' } };
export const Warning: Story = { args: { children: 'Coming soon', variant: 'warning' } };
export const Error: Story   = { args: { children: 'Closed', variant: 'error' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="purple">Community</Badge>
      <Badge variant="indigo">Tech</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Coming soon</Badge>
      <Badge variant="error">Closed</Badge>
    </div>
  ),
};
