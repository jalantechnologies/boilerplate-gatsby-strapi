const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      strapi {
        articles {
          data {
            attributes {
              Author
              Description
              Media {
                data {
                  attributes {
                    url
                  }
                }
              }
              Seo {
                Description
                Title
                Favicon {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              Title
              createdAt
              publishedAt
              updatedAt
              SubTitle
            }
          }
        }
      }
    }
  `);

  data.strapi.articles.data.forEach(edge => {
    createPage({
      path: `articles/${edge.attributes.Title.split(' ')
        .join('-')
        .toLowerCase()}`,
      component: path.resolve('src/templates/article-page-template.tsx'),
      context: {
        article: edge.attributes,
      },
      defer: true,
    });
  });
};
