require('dotenv').config({
 path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
 apiURL: process.env.STRAPI_API_URL,
 accessToken: process.env.STRAPI_TOKEN,
 collectionTypes: ['article', 'page'],
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
  `gatsby-plugin-typescript`,
  `gatsby-plugin-styled-components`,
  {
   resolve: `gatsby-omni-font-loader`,
   options: {
    enableListener: true,
    preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
    web: [
     {
      name: `Anton`,
      file: `https://fonts.googleapis.com/css2?family=Anton&display=swap`,
     },
     {
      name: `Roboto Condensed`,
      file: `https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet`,
     },
    ],
   },
  },
 ],
}
