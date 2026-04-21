import React from 'react';

export type BadgeVariant = 'purple' | 'indigo' | 'success' | 'warning' | 'error';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  purple: { background: 'rgba(198,33,229,.15)', color: '#d966f0' },
  indigo: { background: 'rgba(30,27,75,.7)', color: '#9fa8da', border: '0.5px solid rgba(159,168,218,.2)' },
  success: { background: 'rgba(29,158,117,.15)', color: '#4dd9a5' },
  warning: { background: 'rgba(239,159,39,.15)', color: '#f0b429' },
  error: { background: 'rgba(226,75,74,.15)', color: '#f07070' },
};

export function Badge({ children, variant = 'purple' }: BadgeProps) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: '11px',
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      ...variantStyles[variant],
    }}>
      {children}
    </span>
  );
}
