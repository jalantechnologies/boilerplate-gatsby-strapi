import * as React from 'react';
import { SEO, ArticleSection } from '../components';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { getMediaUrl } from '../utils/get-media-url';
import { ArticleServiceImpl } from '../services/page/article.service';

const engine = new Styletron();

const ArticlePageTemplate: React.FC = ({ serverData }) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <SEO
          title={serverData.propData.data.attributes.seo[0].metaTitle}
          description={
            serverData.propData.data.attributes.seo[0].metaDescription
          }
          metaImage={getMediaUrl(
            serverData.propData.data.attributes.seo[0].metaImage.data.attributes
              .url,
          )}
        />
        <ArticleSection
          heroDesc={serverData.propData.data.attributes.description}
          heroTitle={serverData.propData.data.attributes.title}
          imgSrc={getMediaUrl(
            serverData.propData.data.attributes.mediaImage.data.attributes.url,
          )}
        />
      </BaseProvider>
    </StyletronProvider>
  );
};

export async function getServerData({ pageContext }) {
  const pageObj = new ArticleServiceImpl();
  const { data } = await pageObj.getArticlesData(pageContext.articleId);
  return {
    props: {
      propData: data,
    },
  };
}

export default ArticlePageTemplate;
