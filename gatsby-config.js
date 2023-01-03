const isCIEnv = process.env.CI === 'true';

// dotenv will be only used in non-ci env
// ci is supposed to inject env variables directly
if (!isCIEnv) {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['article'],
  singleTypes: ['home-page'],
};

module.exports = {
  siteMetadata: {
    title: 'JTC | Website boilerplate',
    siteUrl: 'https://jalantechnologies.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styletron',
      options: {
        prefix: '_',
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: strapiConfig,
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'STRAPI',
        fieldName: 'strapi',
        url: `${process.env.STRAPI_API_URL}/graphql`,
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
        ],
        web: [
          {
            name: 'Bitter',
            file:
              'https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,900&family=Open+Sans&family=Raleway&display=swap',
          },
          {
            name: 'Raleway',
            file:
              'https://fonts.googleapis.com/css2?family=Raleway&display=swap',
          },
        ],
      },
    },
  ],
};
