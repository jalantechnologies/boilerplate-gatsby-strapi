import * as React from 'react'
import { SEO } from '../components'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import { graphql, useStaticQuery } from 'gatsby'
import {
    DisplayMedium, DisplayXSmall
  } from 'baseui/typography';

const engine = new Styletron()

const IndexPage = () => {

  const { strapiProduct } = useStaticQuery(
    graphql`
      query {
        strapiProduct {
          name
          slug
        }
      }
    `
  )

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <SEO title="home" />
        <DisplayMedium>
            {strapiProduct.name}
        </DisplayMedium>
        <DisplayXSmall>
            {strapiProduct.slug}
        </DisplayXSmall>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default IndexPage
