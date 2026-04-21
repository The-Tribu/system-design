import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  brandTitle: 'The Tribu Design System',
  brandUrl: 'https://thetribu.dev',
  brandTarget: '_blank',

  colorPrimary: '#c621e5',
  colorSecondary: '#c621e5',

  appBg: '#020617',
  appContentBg: '#0d0f1e',
  appPreviewBg: '#020617',
  appBorderColor: '#2a2a4a',
  appBorderRadius: 12,

  fontBase: "'SF Pro Text', 'Inter', system-ui, sans-serif",
  fontCode: "'SF Mono', 'Fira Code', monospace",

  textColor: '#e8e4ff',
  textInverseColor: '#020617',
  textMutedColor: '#9090b0',

  barTextColor: '#9090b0',
  barHoverColor: '#e8e4ff',
  barSelectedColor: '#c621e5',
  barBg: '#0d0f1e',

  inputBg: '#0a0c1a',
  inputBorder: '#2a2a4a',
  inputTextColor: '#e8e4ff',
  inputBorderRadius: 8,
});
