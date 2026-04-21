import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const s: Record<string, React.CSSProperties> = {
  page: { fontFamily: "var(--font-body)", color: "var(--color-text-primary)" },
  heading: { fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" },
  desc: { fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "2rem", lineHeight: 1.6 },
  label: { fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.07em", color: "var(--color-text-tertiary)", marginBottom: "0.625rem", marginTop: "1.5rem" },
  table: { width: "100%", borderCollapse: "collapse" as const, marginBottom: "1.5rem" },
  td1: { padding: "9px 12px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)", fontSize: "12px", borderBottom: "0.5px solid var(--color-border-subtle)" },
  td2: { padding: "9px 12px", color: "var(--color-text-primary)", fontWeight: 500, textAlign: "right" as const, borderBottom: "0.5px solid var(--color-border-subtle)" },
  card: { background: "var(--color-surface)", border: "0.5px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "1.25rem 1.5rem", marginBottom: "1rem" },
  demoRow: { display: "flex", alignItems: "center", gap: "14px", padding: "10px 0", borderBottom: "0.5px solid var(--color-border-subtle)", cursor: "default" },
};

function Row({ token, value }: { token: string; value: string }) {
  return (
    <tr>
      <td style={s.td1}>{token}</td>
      <td style={s.td2}>{value}</td>
    </tr>
  );
}

function MotionDoc() {
  return (
    <div style={s.page}>
      <div style={s.heading}>Motion</div>
      <div style={s.desc}>Duration and easing tokens for consistent, fluid interactions.</div>

      <div style={s.label}>Durations</div>
      <table style={s.table}>
        <tbody>
          <Row token="--duration-instant" value="0ms" />
          <Row token="--duration-fast" value="100ms · micro-interactions" />
          <Row token="--duration-normal" value="200ms · default" />
          <Row token="--duration-slow" value="300ms · modals · expansions" />
          <Row token="--duration-slower" value="500ms · page transitions" />
        </tbody>
      </table>

      <div style={s.label}>Easings</div>
      <table style={s.table}>
        <tbody>
          <Row token="--ease-out" value="cubic-bezier(0, 0, 0.2, 1)" />
          <Row token="--ease-in" value="cubic-bezier(0.4, 0, 1, 1)" />
          <Row token="--ease-in-out" value="cubic-bezier(0.4, 0, 0.2, 1)" />
          <Row token="--ease-spring" value="cubic-bezier(0.34, 1.56, 0.64, 1)" />
          <Row token="--ease-bounce" value="cubic-bezier(0.68, -0.55, 0.27, 1.55)" />
        </tbody>
      </table>

      <div style={s.label}>Demos — hover to preview</div>
      <div style={s.card}>
        <style>{`
          .tribu-dot { width: 14px; height: 14px; border-radius: 50%; background: var(--color-accent); flex-shrink: 0; transition: transform var(--duration-normal) var(--ease-spring); }
          .tribu-demo-row:hover .tribu-dot { transform: scale(2); }
          .tribu-line { width: 24px; height: 3px; background: var(--color-accent); border-radius: 2px; flex-shrink: 0; transition: width var(--duration-slow) var(--ease-out); }
          .tribu-demo-row:hover .tribu-line { width: 56px; }
          .tribu-box { width: 14px; height: 14px; border-radius: var(--radius-sm); background: transparent; border: 1.5px solid var(--color-accent); flex-shrink: 0; transition: background var(--duration-normal) var(--ease-out); }
          .tribu-demo-row:hover .tribu-box { background: var(--color-accent); }
        `}</style>
        <div className="tribu-demo-row" style={s.demoRow}><div className="tribu-dot" /><span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>scale · ease-spring · 200ms</span></div>
        <div className="tribu-demo-row" style={s.demoRow}><div className="tribu-line" /><span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>expand · ease-out · 300ms</span></div>
        <div className="tribu-demo-row" style={{ ...s.demoRow, borderBottom: "none" }}><div className="tribu-box" /><span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>fill · ease-out · 200ms</span></div>
      </div>

      <div style={s.label}>Z-index layers</div>
      <table style={s.table}>
        <tbody>
          <Row token="--z-base" value="0" />
          <Row token="--z-raised" value="10" />
          <Row token="--z-dropdown" value="100" />
          <Row token="--z-sticky" value="200" />
          <Row token="--z-overlay" value="300" />
          <Row token="--z-modal" value="400" />
          <Row token="--z-toast" value="500" />
          <Row token="--z-tooltip" value="600" />
        </tbody>
      </table>
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Motion',
  component: MotionDoc,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

type Story = StoryObj;

export const Animations: Story = {};
