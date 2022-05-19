import { createTheming } from '@callstack/react-theme-provider';

export const theme = {
  primary: '#005faf',
};

export type Theme = {
  theme: typeof theme;
};

export const { withTheme } = createTheming(theme);
