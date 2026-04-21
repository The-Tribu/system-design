import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'padded', backgrounds: { default: 'dark' } },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Join now', variant: 'primary', size: 'md' },
};

export const Secondary: Story = {
  args: { children: 'Browse courses', variant: 'secondary', size: 'md' },
};

export const Ghost: Story = {
  args: { children: 'Explore', variant: 'ghost', size: 'md' },
};

export const Small: Story = {
  args: { children: 'Book', variant: 'primary', size: 'sm' },
};

export const Large: Story = {
  args: { children: 'Get started', variant: 'primary', size: 'lg' },
};

export const Disabled: Story = {
  args: { children: 'Not available', variant: 'primary', disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
      <Button variant="primary">Join now</Button>
      <Button variant="secondary">Browse courses</Button>
      <Button variant="ghost">Explore</Button>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="lg">Large</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
