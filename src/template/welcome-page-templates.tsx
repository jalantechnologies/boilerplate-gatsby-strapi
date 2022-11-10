import * as React from 'react'
import { SEO, Hero } from '../components'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import { DisplayMedium } from 'baseui/typography'
import { getMediaUrl } from '../utils/get-media-url';
import { PageServiceImpl } from '../services/page/page.service'

const engine = new Styletron()

const WelcomePageTemplate:React.FC = ({serverData}) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div style={{display:'flex', justifyContent:'center', marginBottom:50, marginTop:100}} > 
        <DisplayMedium>{serverData.propData.data.attributes.title}</DisplayMedium>
        </div>
        <SEO title={serverData.propData.data.attributes.seo.metaTitle} description={serverData.propData.data.attributes.seo.metaDescription} metaImage={getMediaUrl(serverData.propData.data.attributes.seo.metaImage.data.attributes.url)} />
        <Hero heroDesc={serverData.propData.data.attributes.hero[0].text} heroTitle={serverData.propData.data.attributes.hero[0].title} imgSrc={getMediaUrl(serverData.propData.data.attributes.hero[0].images.data[0].attributes.url)} />
      </BaseProvider>
    </StyletronProvider>
  )
}

export async function getServerData({pageContext}) {
  const pageObj = new PageServiceImpl();
  const {data} = await pageObj.getPageData(pageContext.pageId);
  return {
    props: {
      propData: data,
    },
  }
}

export default WelcomePageTemplate
