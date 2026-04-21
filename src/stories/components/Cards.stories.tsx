import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'padded', backgrounds: { default: 'dark' } },
  argTypes: {
    accent: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CourseCard: Story = {
  render: () => (
    <Card>
      <div style={{ fontSize: '11px', color: '#5a5a80', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: '6px' }}>Course</div>
      <div style={{ fontSize: '15px', fontWeight: 600, color: '#e8e4ff', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>Advanced React</div>
      <div style={{ fontSize: '13px', color: '#7070a0', lineHeight: 1.6, marginBottom: '12px' }}>Hooks, context, design patterns and performance.</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Badge variant="purple">Intermediate</Badge>
        <span style={{ fontSize: '12px', color: '#5a5a80' }}>8 weeks</span>
      </div>
    </Card>
  ),
};

export const AccentCard: Story = {
  render: () => (
    <Card accent>
      <div style={{ fontSize: '11px', color: '#c621e5', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: '6px' }}>Featured</div>
      <div style={{ fontSize: '15px', fontWeight: 600, color: '#e8e4ff', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>1:1 Mentorship</div>
      <div style={{ fontSize: '13px', color: '#7070a0', lineHeight: 1.6, marginBottom: '12px' }}>Personalized sessions with industry experts.</div>
      <Button variant="primary" size="sm">Book now</Button>
    </Card>
  ),
};

export const MentorCard: Story = {
  render: () => (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(198,33,229,.2)', color: '#d966f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 600, fontFamily: 'var(--font-display)', flexShrink: 0 }}>MA</div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#e8e4ff', fontFamily: 'var(--font-display)' }}>Maria Alvarado</div>
          <div style={{ fontSize: '12px', color: '#7070a0', marginTop: '2px' }}>Mentor · Frontend</div>
          <div style={{ marginTop: '6px' }}><Badge variant="success">Available</Badge></div>
        </div>
      </div>
    </Card>
  ),
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
      <Card>
        <div style={{ fontSize: '11px', color: '#5a5a80', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: '6px' }}>Course</div>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#e8e4ff', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>Advanced React</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Badge variant="purple">Intermediate</Badge>
          <span style={{ fontSize: '12px', color: '#5a5a80' }}>8 weeks</span>
        </div>
      </Card>
      <Card accent>
        <div style={{ fontSize: '11px', color: '#c621e5', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: '6px' }}>Featured</div>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#e8e4ff', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>1:1 Mentorship</div>
        <Button variant="primary" size="sm">Book now</Button>
      </Card>
    </div>
  ),
};
