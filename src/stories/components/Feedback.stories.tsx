import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast } from '../../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Feedback',
  component: Toast,
  tags: ['autodocs'],
  parameters: { layout: 'padded', backgrounds: { default: 'dark' } },
  argTypes: {
    variant: { control: 'select', options: ['success', 'error', 'info', 'warning'] },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: { children: 'You have successfully enrolled in the React course', variant: 'success' },
};

export const ErrorToast: Story = {
  name: 'Error',
  args: { children: 'An error occurred while processing your payment. Please try again', variant: 'error' },
};

export const Info: Story = {
  args: { children: 'New event available: community hackathon this Friday', variant: 'info' },
};

export const Warning: Story = {
  args: { children: 'Your subscription expires in 3 days — renew it to keep access', variant: 'warning' },
};

export const AllToasts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '480px' }}>
      <Toast variant="success">You have successfully enrolled in the React course</Toast>
      <Toast variant="error">An error occurred while processing your payment. Please try again</Toast>
      <Toast variant="info">New event available: community hackathon this Friday</Toast>
      <Toast variant="warning">Your subscription expires in 3 days — renew it to keep access</Toast>
    </div>
  ),
};
