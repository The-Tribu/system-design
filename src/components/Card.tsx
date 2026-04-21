import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  accent?: boolean;
}

export function Card({ children, title, accent = false }: CardProps) {
  return (
    <div style={{
      background: 'var(--color-header)',
      border: '0.5px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      fontFamily: 'var(--font-body)',
      ...(accent ? { borderLeft: '3px solid var(--color-accent)', paddingLeft: '14px' } : {}),
    }}>
      {title && (
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'var(--text-base)',
          color: 'var(--color-text-primary)',
          marginBottom: '8px',
        }}>
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
