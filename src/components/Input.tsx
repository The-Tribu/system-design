import React from 'react';

export type InputState = 'default' | 'focused' | 'error' | 'disabled';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  hint?: string;
  errorMessage?: string;
  state?: InputState;
  type?: string;
}

const inputBase: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: 'var(--radius-lg)',
  background: '#0a0c1a',
  color: 'var(--color-text-primary)',
  fontSize: '0.8125rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 200ms var(--ease-out)',
  boxSizing: 'border-box',
};

const borderByState: Record<InputState, string> = {
  default: '1.5px solid var(--color-border)',
  focused: '1.5px solid var(--color-accent)',
  error: '1.5px solid var(--color-error)',
  disabled: '1.5px solid var(--color-border)',
};

export function Input({ label, placeholder, value, hint, errorMessage, state = 'default', type = 'text' }: InputProps) {
  const [focused, setFocused] = React.useState(false);
  const effectiveState = state === 'focused' ? 'focused' : focused ? 'focused' : state;

  return (
    <div style={{ marginBottom: '14px' }}>
      {label && (
        <label style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '6px', fontWeight: 500, display: 'block', fontFamily: 'var(--font-body)' }}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        disabled={state === 'disabled'}
        style={{
          ...inputBase,
          border: borderByState[effectiveState],
          opacity: state === 'disabled' ? 0.4 : 1,
          cursor: state === 'disabled' ? 'not-allowed' : 'text',
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {hint && state !== 'error' && (
        <div style={{ fontSize: '11px', color: effectiveState === 'focused' ? '#d966f0' : 'var(--color-text-tertiary)', marginTop: '5px', fontFamily: 'var(--font-body)' }}>
          {hint}
        </div>
      )}
      {errorMessage && state === 'error' && (
        <div style={{ fontSize: '11px', color: 'var(--color-error)', marginTop: '5px', fontFamily: 'var(--font-body)' }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}
