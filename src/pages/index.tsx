import * as React from 'react'
import { SEO } from '../components'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import {
    DisplayMedium,
  } from 'baseui/typography';

const engine = new Styletron()

const IndexPage = () => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <SEO title="home" />
        <DisplayMedium>
            Gatsby Strapi Boilerplate
        </DisplayMedium>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default IndexPage
