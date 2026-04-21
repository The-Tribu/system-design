import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const styles: Record<string, React.CSSProperties> = {
  page: { fontFamily: "var(--font-body)", color: "var(--color-text-primary)" },
  heading: { fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" },
  desc: { fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "2rem", lineHeight: 1.6 },
  label: { fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.07em", color: "var(--color-text-tertiary)", marginBottom: "0.625rem", marginTop: "1.5rem" },
  swatchGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px", marginBottom: "1.5rem" },
  swatchCard: { border: "0.5px solid var(--color-border)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--color-surface)" },
  swatchColor: { height: "72px" },
  swatchInfo: { padding: "10px 12px" },
  swatchName: { fontSize: "13px", fontWeight: 500, marginBottom: "2px" },
  swatchHex: { fontSize: "11px", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" },
  swatchUse: { fontSize: "11px", color: "var(--color-text-tertiary)", marginTop: "4px", lineHeight: 1.4 },
  scaleRow: { display: "flex", gap: "2px", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "1rem" },
  scaleCell: { flex: 1, height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 600 },
  semanticGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "1.5rem" },
  tokenTable: { width: "100%", borderCollapse: "collapse" as const, marginBottom: "1.5rem" },
  tokenPreview: { width: "18px", height: "18px", borderRadius: "4px", border: "0.5px solid var(--color-border)", display: "inline-block", verticalAlign: "middle", marginRight: "6px" },
};

function Swatch({ bg, name, token, use }: { bg: string; name: string; token: string; use?: string }) {
  return (
    <div style={styles.swatchCard}>
      <div style={{ ...styles.swatchColor, background: bg }} />
      <div style={styles.swatchInfo}>
        <div style={styles.swatchName}>{name}</div>
        <div style={styles.swatchHex}>{token} · {bg}</div>
        {use && <div style={styles.swatchUse}>{use}</div>}
      </div>
    </div>
  );
}

function ScaleCell({ bg, text, label }: { bg: string; text: string; label: string }) {
  return <div style={{ ...styles.scaleCell, background: bg, color: text }}>{label}</div>;
}

function TokenRow({ token, value, hex }: { token: string; value: string; hex: string }) {
  return (
    <tr style={{ borderBottom: "0.5px solid var(--color-border-subtle)" }}>
      <td style={{ padding: "9px 12px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)", fontSize: "12px" }}>{token}</td>
      <td style={{ padding: "9px 12px", textAlign: "right", fontWeight: 500 }}>
        <span style={{ ...styles.tokenPreview, background: hex }} />
        {value}
      </td>
    </tr>
  );
}

function ColorsDoc() {
  return (
    <div style={styles.page}>
      <div style={styles.heading}>Colors</div>
      <div style={styles.desc}>The Tribu full palette. Dark, deep, with magenta accent as the energy point.</div>

      <div style={styles.label}>Primary palette</div>
      <div style={styles.swatchGrid}>
        <Swatch bg="#020617" name="Background" token="--color-bg" use="Base for all surfaces" />
        <Swatch bg="#0d0f1e" name="Surface" token="--color-surface" use="Panels, sidebars, containers" />
        <Swatch bg="#1e1b4b" name="Header / Elevated" token="--color-header" use="Navbar, elevated cards, modals" />
        <Swatch bg="#c621e5" name="Accent" token="--color-accent" use="CTAs, active links, highlights" />
        <Swatch bg="#e66bf2" name="Accent Light" token="--color-accent-light" use="Hover states, icons, decorative" />
        <Swatch bg="#9c18b8" name="Accent Dark" token="--color-accent-dark" use="Active/pressed states" />
      </div>

      <div style={styles.label}>Purple scale (Accent) — 50 → 900</div>
      <div style={styles.scaleRow}>
        <ScaleCell bg="#f9e6fd" text="#7a0e9a" label="50" />
        <ScaleCell bg="#f0baf8" text="#7a0e9a" label="100" />
        <ScaleCell bg="#e281f0" text="#5a0880" label="200" />
        <ScaleCell bg="#d44de8" text="#fff" label="300" />
        <ScaleCell bg="#c621e5" text="#fff" label="400" />
        <ScaleCell bg="#9c18b8" text="#fff" label="500" />
        <ScaleCell bg="#751289" text="#e66bf2" label="600" />
        <ScaleCell bg="#4e0c5c" text="#e66bf2" label="700" />
        <ScaleCell bg="#2d0735" text="#e66bf2" label="800" />
        <ScaleCell bg="#130319" text="#d966f0" label="900" />
      </div>

      <div style={styles.label}>Indigo scale (Surface/Header) — 50 → 900</div>
      <div style={styles.scaleRow}>
        <ScaleCell bg="#eeedf8" text="#1e1b4b" label="50" />
        <ScaleCell bg="#c5c3e8" text="#1e1b4b" label="100" />
        <ScaleCell bg="#9c99d8" text="#1e1b4b" label="200" />
        <ScaleCell bg="#736ec8" text="#fff" label="300" />
        <ScaleCell bg="#4a46a8" text="#fff" label="400" />
        <ScaleCell bg="#312d7c" text="#c5c3e8" label="500" />
        <ScaleCell bg="#1e1b4b" text="#c5c3e8" label="600" />
        <ScaleCell bg="#110f2e" text="#9c99d8" label="700" />
        <ScaleCell bg="#080717" text="#736ec8" label="800" />
        <ScaleCell bg="#020617" text="#736ec8" label="900" />
      </div>

      <div style={styles.label}>Neutral scale — 50 → 900</div>
      <div style={styles.scaleRow}>
        <ScaleCell bg="#f8f8fc" text="#333" label="50" />
        <ScaleCell bg="#e4e3ef" text="#333" label="100" />
        <ScaleCell bg="#c0bfd6" text="#333" label="200" />
        <ScaleCell bg="#9c9ab8" text="#fff" label="300" />
        <ScaleCell bg="#78769a" text="#fff" label="400" />
        <ScaleCell bg="#54527c" text="#e4e3ef" label="500" />
        <ScaleCell bg="#3a3860" text="#c0bfd6" label="600" />
        <ScaleCell bg="#252444" text="#9c9ab8" label="700" />
        <ScaleCell bg="#141328" text="#78769a" label="800" />
        <ScaleCell bg="#070612" text="#54527c" label="900" />
      </div>

      <div style={styles.label}>Semantic colors</div>
      <div style={styles.semanticGrid}>
        <Swatch bg="#1d9e75" name="Success" token="--color-success" />
        <Swatch bg="#ef9f27" name="Warning" token="--color-warning" />
        <Swatch bg="#e24b4a" name="Error" token="--color-error" />
        <Swatch bg="#378add" name="Info" token="--color-info" />
      </div>

      <div style={styles.label}>Text</div>
      <table style={styles.tokenTable}>
        <tbody>
          <TokenRow token="--color-text-primary" value="#e8e4ff" hex="#e8e4ff" />
          <TokenRow token="--color-text-secondary" value="#9090b0" hex="#9090b0" />
          <TokenRow token="--color-text-tertiary" value="#5a5a80" hex="#5a5a80" />
          <TokenRow token="--color-text-accent" value="#d966f0" hex="#d966f0" />
        </tbody>
      </table>

      <div style={styles.label}>Borders</div>
      <table style={styles.tokenTable}>
        <tbody>
          <TokenRow token="--color-border" value="#2a2a4a" hex="#2a2a4a" />
          <TokenRow token="--color-border-subtle" value="#1a1a3a" hex="#1a1a3a" />
        </tbody>
      </table>
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Colors',
  component: ColorsDoc,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

type Story = StoryObj;

export const Palette: Story = {};
