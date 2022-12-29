module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'",
            'https:',
          ],
          'script-src': [
            "'self'",
            "'unsafe-inline'",
            'cdn.jsdelivr.net',
            'strapi.io',
            `${env('STRAPI_APP_HOST') || env('STRAPI_HOST')}`,
          ],
          'img-src': [
            "'self'",
            'blob:',
            'data:',
            'cdn.jsdelivr.net',
            'strapi.io',
            `${env('STRAPI_APP_HOST') || env('STRAPI_HOST')}`,
            `${env('AWS_BUCKET')}.s3.amazonaws.com`,
          ],
        },
      }
    },
  },
  {
    name: 'strapi::body',
    config: {
      formLimit: '10mb', // modify here limit of the form body
      jsonLimit: '10mb', // modify here limit of the JSON body
      formidable: {
        // multipart data, modify here limit of uploaded file size
        // current - 200 mb
        maxFileSize: 200 * 1024 * 1024,
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::favicon',
  'strapi::public',
];
