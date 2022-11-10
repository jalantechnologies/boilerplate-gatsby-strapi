require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['page'],
  singleTypes: [],
}

module.exports = {
  siteMetadata: {
    title: `jalantechnologies-marketing-website-boilerplate`,
    siteUrl: `https://www.marketing-website-demo.jalantechnologies.com`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'STRAPI',
        fieldName: 'strapi',
        url: `${process.env.STRAPI_API_URL}/graphql`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-typescript`,
  ],
}
