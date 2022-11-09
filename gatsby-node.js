const path = require(`path`)
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      strapi {
        pages {
          data {
            attributes {
              metaTitle
              description
              header
              preventIndexing
              relativeUrl
              structuredData
              title
              updatedAt
              createdAt
              templateName
            }
          }
        }
      }
    }
  `)
  data.strapi.pages.data.forEach(edge => {
    createPage({
      path: `${edge.attributes.relativeUrl}`,
      component: path.resolve(`src/templates/${edge.attributes.templateName}.tsx`),
      context: {
        metaTitle: edge.attributes.metaTitle,
        description: edge.attributes.description,
        header: edge.attributes.header,
        preventIndexing: edge.attributes.preventIndexing,
        relativeUrl: edge.attributes.relativeUrl,
        structuredData: edge.attributes.structuredData,
        title: edge.attributes.title,
        updatedAt: edge.attributes.updatedAt,
        createdAt: edge.attributes.createdAt
      },
    })
  })
}
