import * as React from 'react'
import { graphql } from 'gatsby'
import WelcomePageTemplate from '../template/welcome-page-templates'
import { getPageContext } from '../utils/get-page-context'

declare type IndexPageProps = {
  data: any
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const pageData = data?.strapi?.pages?.data?.[0]
  const pageContext = getPageContext(pageData)
  return <WelcomePageTemplate pageContext={pageContext} />
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
`
