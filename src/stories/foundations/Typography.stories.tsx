import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const s: Record<string, React.CSSProperties> = {
  page: { fontFamily: "var(--font-body)", color: "var(--color-text-primary)" },
  heading: { fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" },
  desc: { fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "2rem", lineHeight: 1.6 },
  label: { fontSize: "0.6875rem", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.07em", color: "var(--color-text-tertiary)", marginBottom: "0.625rem", marginTop: "1.5rem" },
  card: { background: "var(--color-surface)", border: "0.5px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "1.25rem 1.5rem", marginBottom: "1rem" },
  sample: { padding: "14px 0", borderBottom: "0.5px solid var(--color-border-subtle)" },
  meta: { fontSize: "11px", color: "var(--color-text-tertiary)", marginBottom: "6px", fontFamily: "var(--font-mono)" },
  table: { width: "100%", borderCollapse: "collapse" as const, marginBottom: "2rem" },
  td1: { padding: "9px 12px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)", fontSize: "12px" },
  td2: { padding: "9px 12px", color: "var(--color-text-primary)", fontWeight: 500, textAlign: "right" as const },
};

function Row({ token, value }: { token: string; value: string }) {
  return (
    <tr style={{ borderBottom: "0.5px solid var(--color-border-subtle)" }}>
      <td style={s.td1}>{token}</td>
      <td style={s.td2}>{value}</td>
    </tr>
  );
}

function TypographyDoc() {
  return (
    <div style={s.page}>
      <div style={s.heading}>Typography</div>
      <div style={s.desc}>SF Pro Rounded as the display face for that warm, rounded feel characteristic of The Tribu.</div>

      <div style={s.label}>Font families</div>
      <table style={s.table}>
        <tbody>
          <Row token="--font-display" value="'SF Pro Rounded', 'Nunito', system-ui" />
          <Row token="--font-body" value="'SF Pro Text', 'Inter', system-ui" />
          <Row token="--font-mono" value="'SF Mono', 'Fira Code', monospace" />
        </tbody>
      </table>

      <div style={s.label}>Type scale</div>
      <div style={s.card}>
        <div style={s.sample}>
          <div style={s.meta}>--text-5xl · 48px · weight 700 · display</div>
          <div style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1.1, fontFamily: "var(--font-display)" }}>The Tribu</div>
        </div>
        <div style={s.sample}>
          <div style={s.meta}>--text-4xl · 36px · weight 700 · display</div>
          <div style={{ fontSize: "2.25rem", fontWeight: 700, lineHeight: 1.2, fontFamily: "var(--font-display)" }}>Learn in community</div>
        </div>
        <div style={s.sample}>
          <div style={s.meta}>--text-3xl · 28px · weight 600</div>
          <div style={{ fontSize: "1.75rem", fontWeight: 600, color: "#c8c4e8", lineHeight: 1.3 }}>Tech courses and mentorship</div>
        </div>
        <div style={s.sample}>
          <div style={s.meta}>--text-2xl · 24px · weight 600</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#c8c4e8" }}>Connect with other devs</div>
        </div>
        <div style={s.sample}>
          <div style={s.meta}>--text-xl · 20px · weight 500</div>
          <div style={{ fontSize: "1.25rem", fontWeight: 500, color: "#c8c4e8" }}>Active learning community</div>
        </div>
        <div style={s.sample}>
          <div style={s.meta}>--text-base · 16px · weight 400 · line-height 1.7</div>
          <div style={{ fontSize: "1rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>A warm community where you learn at your own pace, with real mentors and real-world projects that prepare you for the industry.</div>
        </div>
        <div style={s.sample}>
          <div style={s.meta}>--text-sm · 14px · weight 400</div>
          <div style={{ fontSize: "0.875rem", color: "#6060a0" }}>Secondary text, short descriptions, component metadata</div>
        </div>
        <div style={{ ...s.sample, borderBottom: "none" }}>
          <div style={s.meta}>--text-xs · 12px · weight 600 · uppercase · letter-spacing wide</div>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-tertiary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Overline / Section label</div>
        </div>
      </div>

      <div style={s.label}>Weights</div>
      <table style={s.table}>
        <tbody>
          <Row token="--weight-light" value="300" />
          <Row token="--weight-regular" value="400" />
          <Row token="--weight-medium" value="500" />
          <Row token="--weight-semibold" value="600" />
          <Row token="--weight-bold" value="700" />
        </tbody>
      </table>

      <div style={s.label}>Line-heights</div>
      <table style={s.table}>
        <tbody>
          <Row token="--leading-tight" value="1.2 — Large headings" />
          <Row token="--leading-snug" value="1.375 — Subheadings" />
          <Row token="--leading-normal" value="1.5 — Default body" />
          <Row token="--leading-relaxed" value="1.7 — Long paragraphs" />
        </tbody>
      </table>
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Typography',
  component: TypographyDoc,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

type Story = StoryObj;

export const Scale: Story = {};
