import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const s: Record<string, React.CSSProperties> = {
  page: { fontFamily: "var(--font-body)", color: "var(--color-text-primary)" },
  heading: { fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" },
  desc: { fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "2rem", lineHeight: 1.6 },
  label: { fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.07em", color: "var(--color-text-tertiary)", marginBottom: "0.625rem", marginTop: "1.5rem" },
  card: { background: "var(--color-surface)", border: "0.5px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "1.25rem 1.5rem", marginBottom: "1.5rem" },
  row: { display: "flex", alignItems: "center", gap: "14px", padding: "7px 0", borderBottom: "0.5px solid var(--color-border-subtle)" },
  token: { fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)", width: "90px", flexShrink: 0 },
  bar: { background: "rgba(198,33,229,.5)", height: "8px", borderRadius: "2px", flexShrink: 0 },
  val: { fontSize: "12px", color: "var(--color-text-primary)", fontWeight: 500 },
  radiusGrid: { display: "flex", flexWrap: "wrap" as const, gap: "14px", marginBottom: "1.5rem" },
  rBox: { display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "8px" },
  rDemo: { background: "rgba(198,33,229,.12)", border: "1.5px solid var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" },
  rLabel: { fontSize: "11px", color: "var(--color-text-tertiary)", fontFamily: "var(--font-mono)", textAlign: "center" as const },
};

const spacingScale = [
  { token: "--space-1", px: "4px", rem: "0.25rem", width: 4 },
  { token: "--space-2", px: "8px", rem: "0.5rem", width: 8 },
  { token: "--space-3", px: "12px", rem: "0.75rem", width: 12 },
  { token: "--space-4", px: "16px", rem: "1rem", width: 16, note: "base" },
  { token: "--space-5", px: "20px", rem: "1.25rem", width: 20 },
  { token: "--space-6", px: "24px", rem: "1.5rem", width: 24 },
  { token: "--space-8", px: "32px", rem: "2rem", width: 32 },
  { token: "--space-10", px: "40px", rem: "2.5rem", width: 40 },
  { token: "--space-12", px: "48px", rem: "3rem", width: 48 },
  { token: "--space-16", px: "64px", rem: "4rem", width: 64 },
  { token: "--space-20", px: "80px", rem: "5rem", width: 80 },
  { token: "--space-24", px: "96px", rem: "6rem", width: 96 },
];

const radiusScale = [
  { label: "none", value: "0px", radius: 0, w: 56, h: 56 },
  { label: "sm", value: "4px", radius: 4, w: 56, h: 56 },
  { label: "md", value: "8px", radius: 8, w: 56, h: 56 },
  { label: "lg", value: "12px", radius: 12, w: 56, h: 56 },
  { label: "xl", value: "16px", radius: 16, w: 56, h: 56 },
  { label: "2xl", value: "24px", radius: 24, w: 56, h: 56 },
  { label: "pill", value: "9999px", radius: 9999, w: 80, h: 36 },
];

function SpacingDoc() {
  return (
    <div style={s.page}>
      <div style={s.heading}>Spacing</div>
      <div style={s.desc}>Scale based on 4px multiples for consistency across padding, margin and gap.</div>

      <div style={s.label}>Spacing scale</div>
      <div style={s.card}>
        {spacingScale.map(({ token, px, rem, width, note }) => (
          <div key={token} style={{ ...s.row, ...(token === "--space-24" ? { borderBottom: "none" } : {}) }}>
            <span style={s.token}>{token}</span>
            <div style={{ ...s.bar, width }} />
            <span style={s.val}>{px} · {rem}{note ? ` · ${note}` : ""}</span>
          </div>
        ))}
      </div>

      <div style={s.label}>Border radius</div>
      <div style={s.radiusGrid}>
        {radiusScale.map(({ label, value, radius, w, h }) => (
          <div key={label} style={s.rBox}>
            <div style={{ ...s.rDemo, width: w, height: h, borderRadius: radius }} />
            <div style={s.rLabel}>{label}<br />{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Spacing',
  component: SpacingDoc,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

type Story = StoryObj;

export const Scale: Story = {};
