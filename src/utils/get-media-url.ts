export const getMediaUrl = (url: string): string => {
  return process.env.STRAPI_API_URL + url;
};
