const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
  {
    strapi {
      pages {
        data {
          id
          attributes {
            relativeUrl
          }
        }
      }
    }
  }   
  `)

  data.strapi.pages.data.forEach(edge => {
    createPage({
      path: `${edge.attributes.relativeUrl}`,
      component: path.resolve(
        'src/template/welcome-page-templates.tsx'
      ),
      context: {
        pageId:edge.id,
      },
    })
  })
}
