import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'padded', backgrounds: { default: 'dark' } },
  argTypes: {
    state: { control: 'select', options: ['default', 'focused', 'error', 'disabled'] },
    type:  { control: 'select', options: ['text', 'email', 'password'] },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'hello@thetribu.dev',
    hint: "We'll use this email for course notifications",
    state: 'default',
    type: 'email',
  },
};

export const Focused: Story = {
  args: {
    label: 'Username',
    value: '@tribu_dev',
    hint: 'Focused state — border-color: accent',
    state: 'focused',
  },
};

export const Error: Story = {
  args: {
    label: 'Password',
    placeholder: '••••••••',
    state: 'error',
    type: 'password',
    errorMessage: 'Password must be at least 8 characters',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    value: 'Not editable',
    state: 'disabled',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Input label="Email address" placeholder="hello@thetribu.dev" hint="We'll use this email for course notifications" type="email" />
      <Input label="Username" value="@tribu_dev" hint="Focused state" state="focused" />
      <Input label="Password" placeholder="••••••••" state="error" type="password" errorMessage="Password must be at least 8 characters" />
      <Input label="Disabled field" value="Not editable" state="disabled" />
    </div>
  ),
};
