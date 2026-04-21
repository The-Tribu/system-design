import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const s: Record<string, React.CSSProperties> = {
  page: { fontFamily: "var(--font-body)", color: "var(--color-text-primary)" },
  heading: { fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" },
  desc: { fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "2rem", lineHeight: 1.6 },
  label: { fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.07em", color: "var(--color-text-tertiary)", marginBottom: "0.625rem", marginTop: "1.5rem" },
  table: { width: "100%", borderCollapse: "collapse" as const, marginBottom: "1.5rem" },
  td1: { padding: "9px 12px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)", fontSize: "12px", borderBottom: "0.5px solid var(--color-border-subtle)" },
  td2: { padding: "9px 12px", color: "var(--color-text-primary)", fontWeight: 500, borderBottom: "0.5px solid var(--color-border-subtle)" },
  td3: { padding: "9px 12px", color: "var(--color-text-tertiary)", fontSize: "12px", borderBottom: "0.5px solid var(--color-border-subtle)" },
  card: { background: "var(--color-surface)", border: "0.5px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "1.25rem 1.5rem", marginBottom: "1.5rem" },
  bpRow: { display: "flex", alignItems: "center", gap: "12px", padding: "8px 0", borderBottom: "0.5px solid var(--color-border-subtle)" },
  bpBar: { height: "8px", borderRadius: "2px", background: "rgba(198,33,229,.4)", flexShrink: 0 },
  bpLabel: { fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)", width: "36px" },
  bpVal: { fontSize: "12px", fontWeight: 500 },
  bpUse: { fontSize: "11px", color: "var(--color-text-tertiary)", marginLeft: "auto" },
  gridDemo: { display: "grid", gap: "8px", marginBottom: "1rem" },
  gridCell: { background: "rgba(198,33,229,.12)", border: "1px solid rgba(198,33,229,.25)", borderRadius: "var(--radius-md)", padding: "8px 10px", fontSize: "11px", color: "#d966f0", fontFamily: "var(--font-mono)", textAlign: "center" as const },
  layoutDemo: { border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "0.75rem" },
  layoutBar: { background: "var(--color-header)", padding: "8px 12px", fontSize: "11px", color: "var(--color-text-tertiary)", borderBottom: "0.5px solid var(--color-border)" },
  layoutBody: { display: "flex", gap: "0", background: "var(--color-bg)" },
  layoutSide: { background: "var(--color-surface)", width: "80px", flexShrink: 0, padding: "8px", fontSize: "10px", color: "var(--color-text-tertiary)" },
  layoutMain: { flex: 1, padding: "8px", fontSize: "10px", color: "var(--color-text-tertiary)" },
};

const breakpoints = [
  { name: "sm", value: "640px", width: 64, use: "Mobile landscape, narrow content" },
  { name: "md", value: "768px", width: 76, use: "Tablet, forms" },
  { name: "lg", value: "1024px", width: 100, use: "Desktop, main layout" },
  { name: "xl", value: "1280px", width: 128, use: "Wide desktop" },
  { name: "2xl", value: "1440px", width: 144, use: "Full HD, dashboards" },
];

function Row({ token, value, use }: { token: string; value: string; use?: string }) {
  return (
    <tr>
      <td style={s.td1}>{token}</td>
      <td style={s.td2}>{value}</td>
      {use && <td style={s.td3}>{use}</td>}
    </tr>
  );
}

function LayoutDoc() {
  return (
    <div style={s.page}>
      <div style={s.heading}>Layout & Grid</div>
      <div style={s.desc}>12-column grid system, semantic max-width containers and responsive design breakpoints.</div>

      <div style={s.label}>Breakpoints</div>
      <div style={s.card}>
        {breakpoints.map(({ name, value, width, use }, i) => (
          <div key={name} style={{ ...s.bpRow, ...(i === breakpoints.length - 1 ? { borderBottom: "none" } : {}) }}>
            <span style={s.bpLabel}>{name}</span>
            <div style={{ ...s.bpBar, width }} />
            <span style={s.bpVal}>{value}</span>
            <span style={s.bpUse}>{use}</span>
          </div>
        ))}
      </div>

      <div style={s.label}>Max-width containers</div>
      <table style={s.table}>
        <thead>
          <tr>
            <td style={{ ...s.td1, fontWeight: 600, color: "var(--color-text-tertiary)" }}>Token</td>
            <td style={{ ...s.td2, fontWeight: 600, color: "var(--color-text-tertiary)" }}>Value</td>
            <td style={{ ...s.td3, fontWeight: 600, color: "var(--color-text-tertiary)" }}>Recommended use</td>
          </tr>
        </thead>
        <tbody>
          <Row token="--container-sm" value="640px" use="Articles, reading content" />
          <Row token="--container-md" value="768px" use="Forms, wide modals" />
          <Row token="--container-lg" value="1024px" use="Main app layout" />
          <Row token="--container-xl" value="1280px" use="Dashboards, data tables" />
          <Row token="--container-2xl" value="1440px" use="Full-width, landing pages" />
        </tbody>
      </table>

      <div style={s.label}>12-column grid</div>
      <div style={s.card}>
        <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", marginBottom: "12px" }}>
          Gutter: <code style={{ fontFamily: "var(--font-mono)", color: "#d966f0" }}>var(--gutter)</code> = 24px
        </div>
        <div style={{ ...s.gridDemo, gridTemplateColumns: "repeat(12, 1fr)" }}>
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} style={s.gridCell}>{i + 1}</div>
          ))}
        </div>
        <div style={{ ...s.gridDemo, gridTemplateColumns: "repeat(3, 1fr)", marginTop: "8px" }}>
          <div style={s.gridCell}>4 cols</div>
          <div style={s.gridCell}>4 cols</div>
          <div style={s.gridCell}>4 cols</div>
        </div>
        <div style={{ ...s.gridDemo, gridTemplateColumns: "2fr 1fr", marginTop: "8px" }}>
          <div style={s.gridCell}>8 cols (main)</div>
          <div style={s.gridCell}>4 cols (aside)</div>
        </div>
      </div>

      <div style={s.label}>Layout patterns</div>

      <div style={{ marginBottom: "8px", fontSize: "12px", color: "var(--color-text-secondary)" }}>App with fixed sidebar</div>
      <div style={s.layoutDemo}>
        <div style={s.layoutBar}>Navbar · sticky · z-sticky (200)</div>
        <div style={s.layoutBody}>
          <div style={s.layoutSide}>Sidebar<br />220px</div>
          <div style={s.layoutMain}>Main content · flex: 1 · max-width: --container-xl</div>
        </div>
      </div>

      <div style={{ marginBottom: "8px", fontSize: "12px", color: "var(--color-text-secondary)" }}>Centered content</div>
      <div style={s.layoutDemo}>
        <div style={s.layoutBar}>Navbar</div>
        <div style={{ ...s.layoutBody, justifyContent: "center" }}>
          <div style={{ ...s.layoutMain, maxWidth: "860px", textAlign: "center" }}>max-width: --container-lg · margin: 0 auto · padding: 0 --space-6</div>
        </div>
      </div>

      <div style={s.label}>Layout tokens</div>
      <table style={s.table}>
        <tbody>
          <Row token="--grid-cols" value="12" use="Grid columns" />
          <Row token="--gutter" value="var(--space-6) = 24px" use="Gap between columns" />
        </tbody>
      </table>
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Layout',
  component: LayoutDoc,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

type Story = StoryObj;

export const Grid: Story = {};
