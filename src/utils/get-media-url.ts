export const getMediaUrl = (url: string): string => {
  const isProdEnv = process.env.NODE_ENV === 'production'
  const apiUrl = process.env.STRAPI_API_URL

  return isProdEnv ? url : `${apiUrl}${url}`;
};
