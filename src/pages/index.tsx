import { Block } from 'baseui/block'
import { DisplayLarge } from 'baseui/typography'
import * as React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import { Image } from '../components/image'
import {ArticleBox, SEO} from '../components';
import { Grid, Cell } from 'baseui/layout-grid'
import {graphql} from 'gatsby';
import {getMediaUrl} from '../utils/get-media-url'

declare type IndexPageProps = {
  data: any
}

const engine = new Styletron()

const IndexPage: React.FC<IndexPageProps> = ({data}) => {
 
  const title = data?.strapi?.pages?.data?.[0]?.attributes?.title;
  const metaImage = data?.strapi?.pages?.data?.[0]?.attributes?.seo?.metaImage?.data?.attributes?.url;
  const metaTitle = data?.strapi?.pages?.data?.[0]?.attributes?.seo?.metaTitle;
  const metaDescription = data?.strapi?.pages?.data?.[0]?.attributes?.seo?.metaDescription;
  const pageMedia = data?.strapi?.pages?.data?.[0]?.attributes?.mediaImg?.data?.attributes?.url;
  const articles = data?.strapi?.articles?.data;

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Block style={{ width: '100%', height: '100vh', margin: '0' }}>
          <SEO title={metaTitle} metaImage={getMediaUrl(metaImage)} description={metaDescription} />
          <Block
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <DisplayLarge
              style={{
                fontSize: 100,
                fontWeight: 600,
                fontFamily: 'Anton',
                marginTop: '20px',
                marginBottom: '40px',
              }}
            >
              {title}
            </DisplayLarge>
            <Image
              width={250}
              height={250}
              src={getMediaUrl(pageMedia)}
            />
          </Block>
          <Block>
          </Block>
          <Block
            style={{
              fontSize: 40,
              fontWeight: 600,
              fontFamily: 'Anton',
              marginTop: '50px',
              marginLeft: 50,
            }}
          >
           Blog Posts
          </Block>
          <Block
            style={{
              backgroundColor: '#E5E9EC',
              height: 2,
              width: '90%',
              margin: 30,
            }}
          />
          <Block style={{width:'100%'}} >
            <Grid gridGutters={500}>
              {articles?.map((art,index)=>(
                  <Cell key={index} span={[1, 2, 3]}>
                  <ArticleBox id={art.id} title={art.attributes.title} imgSrc={getMediaUrl(art.attributes.mediaImage.data.attributes.url)} />
                 </Cell>
              ))}
            </Grid>
          </Block>
        </Block>
      </BaseProvider>
    </StyletronProvider>
  )
}


export const query = graphql`
  query {
    strapi {
      pages {
        data {
          attributes {
            title
            mediaImg {
              data {
                attributes {
                  url
                }
              }
            }
            seo {
              metaImage {
                data {
                  attributes {
                    url
                  }
                }
              }
              metaTitle
              metaDescription
            }
          }
        }
      }
      articles {
        data {
          id
          attributes {
            title
            mediaImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
