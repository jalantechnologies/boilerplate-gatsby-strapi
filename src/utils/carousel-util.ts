import { overrides } from '../page-layouts/theme';

export const carouselResponsiveBreakPoints = {
  desktop: {
    breakpoint: { max: 3000, min: overrides.breakpoints.medium },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: {
      max: overrides.breakpoints.medium,
      min: overrides.breakpoints.small,
    },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: overrides.breakpoints.small, min: 0 },
    items: 1,
    partialVisibilityGutter: 10, // this is needed to tell the amount of px that should be visible.
  },
};
