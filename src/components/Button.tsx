import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
}

const base: React.CSSProperties = {
  borderRadius: 'var(--radius-pill)',
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  cursor: 'pointer',
  border: 'none',
  transition: 'opacity 100ms var(--ease-out), transform 100ms var(--ease-spring)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const variants: Record<ButtonVariant, React.CSSProperties> = {
  primary: { background: 'var(--color-accent)', color: '#fff' },
  secondary: { background: 'var(--color-header)', color: 'var(--color-text-primary)' },
  ghost: { background: 'transparent', color: 'var(--color-accent)', border: '1.5px solid var(--color-accent)' },
};

const sizes: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '6px 14px', fontSize: '0.75rem' },
  md: { padding: '9px 20px', fontSize: '0.8125rem' },
  lg: { padding: '13px 30px', fontSize: '0.9375rem' },
};

const disabledStyle: React.CSSProperties = {
  background: '#1e1e2e',
  color: '#444',
  cursor: 'not-allowed',
  opacity: 1,
  border: 'none',
};

export function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick }: ButtonProps) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const style: React.CSSProperties = {
    ...base,
    ...variants[variant],
    ...sizes[size],
    ...(disabled ? disabledStyle : {}),
    ...(hovered && !disabled ? { opacity: 0.85, transform: 'scale(1.02)' } : {}),
    ...(pressed && !disabled ? { transform: 'scale(0.97)', opacity: 1 } : {}),
    ...(variant === 'ghost' && hovered && !disabled ? { background: 'rgba(198,33,229,.08)', opacity: 1 } : {}),
  };

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {children}
    </button>
  );
}
