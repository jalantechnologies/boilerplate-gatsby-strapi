import * as React from 'react'
import { SEO, Hero } from '../components'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import { DisplayMedium } from 'baseui/typography'

const engine = new Styletron()

declare type WelcomePageTemplateProps = {
  pageContext: any
}

const WelcomePageTemplate: React.FC<WelcomePageTemplateProps> = ({
  pageContext,
}) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 50,
            marginTop: 100,
          }}
        >
          <DisplayMedium>{pageContext.title}</DisplayMedium>
        </div>
        <SEO
          title={pageContext.metaTitle}
          description={pageContext.metaDescription}
          metaImage={pageContext.metaImage}
        />
        <Hero
          heroDesc={pageContext.heroDesc}
          heroTitle={pageContext.heroTitle}
          imgSrc={pageContext.heroImg}
        />
      </BaseProvider>
    </StyletronProvider>
  )
}

export default WelcomePageTemplate
