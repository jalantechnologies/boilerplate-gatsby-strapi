import { createTheme } from 'baseui';

const primitives = {
  primary: '#1A202C',
  accent: '#F26C1B',
  primaryFontFamily: 'Raleway',
  color: '#525F7A',
};

export const overrides = {
  colors: {
    buttonPrimaryFill: primitives.accent,
    contentPrimary: '#ffffff',
    backgroundPrimary: '#1E2D53',
    backgroundSecondary: '#D9D9D9',
    transparentButton: '#00000050',
  },
  borders: {
    buttonBorderRadius: '4px',
    inputBorderRadius: '4px',
  },
  breakpoints: {
    small: 769,
    medium: 1024,
    large: 1216,
  },
  mediaQuery: {
    small: '@media screen and (min-width: 769px)',
    medium: '@media screen and (min-width: 1024px)',
    large: '@media screen and (min-width: 1216px)',
  },
};

export default createTheme(primitives, overrides);
