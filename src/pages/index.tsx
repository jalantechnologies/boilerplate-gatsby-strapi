import * as React from 'react'
import { SEO } from '../components'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import { graphql, useStaticQuery } from 'gatsby'
import { DisplayMedium, DisplayXSmall } from 'baseui/typography'

const engine = new Styletron()

const IndexPage = () => {
  const { strapi } = useStaticQuery(
    graphql`
      query {
        strapi {
          products {
            data {
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    `
  )

  const name = strapi.products.data[0].attributes.name
  const slug = strapi.products.data[0].attributes.slug

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <SEO title="home" />
        <DisplayMedium>{name}</DisplayMedium>
        <DisplayXSmall>{slug}</DisplayXSmall>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default IndexPage
