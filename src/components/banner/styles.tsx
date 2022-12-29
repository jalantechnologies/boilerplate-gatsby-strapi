import { StyleObject } from 'styletron-react';
import theme from '../../page-layouts/theme';

export const carousalIndicatorStyles: StyleObject = {
  cursor: 'pointer',
  fontSize: theme.sizing.scale1400,
};

export const buttonStyles: StyleObject = {
  padding: theme.sizing.scale1200,
  borderRadius: theme.sizing.scale700,
  ':hover': {
    backgroundColor: theme.colors.borderSelected,
  },
};
