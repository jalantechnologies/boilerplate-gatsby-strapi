export const getRouteUrl = (title: string): string => {
  return title
    .split(' ')
    .join('-')
    .toLowerCase();
};

export const getArticleUrl = (title: string) => `/articles/${getRouteUrl(title)}`;
