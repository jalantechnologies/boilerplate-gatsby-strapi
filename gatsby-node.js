const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
 const { createPage } = actions
 const { data } = await graphql(`
  {
   strapi {
    articles {
     data {
      attributes {
       title
      }
      id
     }
    }
   }
  }
 `)

 data.strapi.articles.data.forEach(edge => {
  createPage({
   path: `articles/${edge.attributes.title
    .split(' ')
    .join('-')
    .toLowerCase()}`,
   component: path.resolve('src/template/article-page-template.tsx'),
   context: {
    articleId: edge.id,
   },
   defer: true,
  })
 })
}
