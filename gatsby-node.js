const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  const { data } = await graphql(`
    query {
      strapi {
        products {
          data {
            attributes {
              name
              description
              path
            }
          }
        }
      }
    }
  `)
  data.strapi.products.data.forEach(edge => {
    createPage({
      path: `${edge.attributes.path}`,
      component: blogPostTemplate,
      context: {
        title: edge.attributes.description,
      },
    })
  })
}
