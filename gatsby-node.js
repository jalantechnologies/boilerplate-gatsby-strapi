const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
  {
    strapi {
      pages {
        data {
          attributes {
            title
            relativeUrl
            seo {
              metaDescription
              metaTitle
              metaImage {
                data {
                  attributes {
                    url
                    name
                  }
                }
              }
            }
            hero {
              ... on STRAPI_ComponentHeroHero {
                id
                header {
                  title
                  label
                }
                images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                text
              }
            }
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
        `src/template/welcome-page-templates.tsx`
      ),
      context: {
        title:edge.attributes.title,
        metaTitle:edge.attributes.seo.metaTitle,
        metaDescription:edge.attributes.seo.metaDescription,
        metaImage: process.env.STRAPI_API_URL + edge.attributes.seo.metaImage.data.attributes.url,
        heroDesc:edge.attributes.hero[0].text,
        heroTitle:edge.attributes.hero[0].header.title,
        heroImg:process.env.STRAPI_API_URL + edge.attributes.hero[0].images.data[0].attributes.url,
      },
    })
  })
}
