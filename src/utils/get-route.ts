export const getRouteUrl = (title: string): string => {
  return title
    .split(' ')
    .join('-')
    .toLowerCase();
};
