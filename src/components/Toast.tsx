import React from 'react';

export type ToastVariant = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  children: React.ReactNode;
  variant?: ToastVariant;
}

const variantStyles: Record<ToastVariant, { bg: string; border: string; color: string; dot: string }> = {
  success: { bg: 'rgba(29,158,117,.12)', border: '0.5px solid rgba(29,158,117,.25)', color: '#4dd9a5', dot: '#4dd9a5' },
  error:   { bg: 'rgba(226,75,74,.12)',  border: '0.5px solid rgba(226,75,74,.25)',  color: '#f07070', dot: '#f07070' },
  info:    { bg: 'rgba(198,33,229,.08)', border: '0.5px solid rgba(198,33,229,.25)', color: '#d966f0', dot: '#d966f0' },
  warning: { bg: 'rgba(239,159,39,.1)',  border: '0.5px solid rgba(239,159,39,.25)', color: '#f0b429', dot: '#f0b429' },
};

export function Toast({ children, variant = 'info' }: ToastProps) {
  const v = variantStyles[variant];
  return (
    <div style={{
      padding: '11px 16px',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '13px',
      background: v.bg,
      border: v.border,
      color: v.color,
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: v.dot, flexShrink: 0 }} />
      {children}
    </div>
  );
}
