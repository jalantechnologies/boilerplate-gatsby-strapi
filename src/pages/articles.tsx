import * as React from 'react';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql } from 'gatsby';
import PageLayout from '../page-layouts';
import { getMediaUrl } from '../utils/get-media-url';
import { Button } from 'baseui/button';
import ArticleCard from '../components/article/article-card';

declare type IndexPageProps = {
  data: any;
};

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const articles = data?.strapi?.articles?.data as any[];
  return (
    <PageLayout>
      <Block>
        <FlexGrid
          flexGridColumnCount={[1, 1, 2, 3]}
          flexGridColumnGap="scale800"
          flexGridRowGap="scale800"
        >
          {articles?.map(art => (
            <FlexGridItem key={art.id}>
              <ArticleCard
                id={art.id}
                subTitle={art.attributes.SubTitle}
                title={art.attributes.Title}
                imgSrc={getMediaUrl(art.attributes.Media.data.attributes.url)}
              />
            </FlexGridItem>
          ))}
        </FlexGrid>
        <br />
      </Block>
    </PageLayout>
  );
};

export const query = graphql`
  query {
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
            SubTitle
            Title
            createdAt
            publishedAt
            updatedAt
          }
        }
      }
    }
  }
`;

export default IndexPage;
