import React from 'react';

interface CardProps {
  children: React.ReactNode;
  accent?: boolean;
}

export function Card({ children, accent = false }: CardProps) {
  return (
    <div style={{
      background: 'var(--color-header)',
      border: '0.5px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      ...(accent ? { borderLeft: '3px solid var(--color-accent)', paddingLeft: '14px' } : {}),
    }}>
      {children}
    </div>
  );
}
