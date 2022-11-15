import { Block } from 'baseui/block'
import * as React from 'react'
import { Image } from '../components/image'
import { ArticleBox, SEO } from '../components'
import { graphql } from 'gatsby'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import { getMediaUrl } from '../utils/get-media-url'
import '../styles/index.css'

declare type IndexPageProps = {
  data: any
}

const engine = new Styletron()

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const title = data?.strapi?.pages?.data?.[0]?.attributes?.title
  const metaImage =
    data?.strapi?.pages?.data?.[0]?.attributes?.seo?.metaImage?.data?.attributes
      ?.url
  const metaTitle = data?.strapi?.pages?.data?.[0]?.attributes?.seo?.metaTitle
  const metaDescription =
    data?.strapi?.pages?.data?.[0]?.attributes?.seo?.metaDescription
  const pageMedia =
    data?.strapi?.pages?.data?.[0]?.attributes?.mediaImg?.data?.attributes?.url
  const articles = data?.strapi?.articles?.data

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Block className="block">
          <SEO
            title={metaTitle}
            metaImage={getMediaUrl(metaImage)}
            description={metaDescription}
          />
          <Block className="headDiv">
            <Block className="heading">{title}</Block>
            <Image width={250} height={250} src={getMediaUrl(pageMedia)} />
          </Block>
          <Block></Block>
          <Block
           className='blogSubHead'
          >
            Blog Posts
          </Block>
          <Block
           className='hr'
          />
          <Block className='articleBoxDiv'>
            {articles?.map((art, index) => (
              <ArticleBox
                key={index}
                id={art.id}
                title={art.attributes.title}
                imgSrc={getMediaUrl(
                  art.attributes.mediaImage.data.attributes.url
                )}
              />
            ))}
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
