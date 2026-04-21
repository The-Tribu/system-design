import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const s: Record<string, React.CSSProperties> = {
  page: { fontFamily: "var(--font-body)", color: "var(--color-text-primary)" },
  heading: { fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" },
  desc: { fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "2rem", lineHeight: 1.6 },
  label: { fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.07em", color: "var(--color-text-tertiary)", marginBottom: "0.625rem", marginTop: "1.5rem" },
  row: { padding: "11px 16px", background: "var(--color-surface)", borderRadius: "var(--radius-lg)", marginBottom: "8px", fontSize: "13px", color: "var(--color-text-secondary)", display: "flex", justifyContent: "space-between", alignItems: "center" },
  tag: { fontSize: "11px", padding: "2px 8px", borderRadius: "var(--radius-pill)", background: "rgba(198,33,229,.1)", color: "#d966f0", fontWeight: 500 },
};

const levels = [
  { name: "shadow-xs", border: "0.5px solid #1e1b4b", outline: "none", desc: "tooltips · selects" },
  { name: "shadow-sm", border: "0.5px solid #2a2446", outline: "2px solid rgba(198,33,229,.05)", desc: "resting cards" },
  { name: "shadow-md", border: "0.5px solid #3a2860", outline: "4px solid rgba(198,33,229,.08)", desc: "hover · dropdowns" },
  { name: "shadow-lg", border: "0.5px solid #4a2e78", outline: "6px solid rgba(198,33,229,.12)", desc: "modals · sidesheets" },
  { name: "shadow-xl", border: "0.5px solid #5a3490", outline: "10px solid rgba(198,33,229,.18)", desc: "critical overlays" },
];

function ElevationDoc() {
  return (
    <div style={s.page}>
      <div style={s.heading}>Elevation</div>
      <div style={s.desc}>5 shadow levels named by use context, using accent glow instead of black shadows for dark theme coherence.</div>

      <div style={s.label}>Shadow levels</div>
      {levels.map(({ name, border, outline, desc }) => (
        <div key={name} style={{ ...s.row, border, outline: outline === "none" ? undefined : outline }}>
          {name}
          <span style={s.tag}>{desc}</span>
        </div>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Elevation',
  component: ElevationDoc,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

type Story = StoryObj;

export const Levels: Story = {};
