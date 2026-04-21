import type { Preview } from '@storybook/react';
import '../src/tokens/tokens.css';
import tribTheme from './theme';

const preview: Preview = {
  parameters: {
    docs: {
      theme: tribTheme,
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#020617' },
        { name: 'surface', value: '#0d0f1e' },
        { name: 'elevated', value: '#1e1b4b' },
      ],
    },
    layout: 'padded',
  },
};

export default preview;
