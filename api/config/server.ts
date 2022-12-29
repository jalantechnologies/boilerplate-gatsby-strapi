export default ({ env }) => ({
  host: env('STRAPI_HOST'),
  port: env.int('STRAPI_PORT'),
  app: {
    keys: env.array('STRAPI_APP_KEYS'),
  },
});
