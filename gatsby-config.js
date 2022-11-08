require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: `http://localhost:1337`,
  accessToken: "51d648e6df4a8c9e41ad8963e880cee784b488214ad98e38f4f048bd8b7759edcad86e9c255df95ac0aa9c290d6a1c334ba31e56df05e4bbcca265bb74c61eeaf3091c00c592605464295f94639b021342acc7dd09bb13a69dbea744dd5a7bd2c536f98f600a8206baf1fc80aba6a0aa4802c89f0b7d239b7fa0bb33d8684ecf",
  collectionTypes: ['product'],
  singleTypes: [],
}

module.exports = {
  siteMetadata: {
    title: `boilerplate-gatsby-strapi`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
        ignore: [`**/\.*`],
      },
      __key: 'images',
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'STRAPI',
        fieldName: 'strapi',
        url: 'http://localhost:1337/graphql',
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
