import * as React from 'react';
import { SEO, Hero } from '../components';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { getMediaUrl } from '../utils/get-media-url';
import { ArticleServiceImpl } from '../services/page/article.service';

const engine = new Styletron();

const ArticlePageTemplate: React.FC = ({ pageContext }) => {
  const [serverData, setServerData] = React.useState<any>({});

  React.useEffect(() => {
    const getData = async () => {
      const pageObj = new ArticleServiceImpl();
      const { data } = await pageObj.getArticlesData(pageContext.articleId);
      setServerData(data);
    };
    getData();
  }, []);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <SEO
          title={serverData?.data?.attributes?.seo[0]?.metaTitle}
          description={serverData?.data?.attributes?.seo[0]?.metaDescription}
          metaImage={getMediaUrl(
            serverData?.data?.attributes?.seo[0]?.metaImage.data.attributes?.url
          )}
        />
        <Hero
          heroDesc={serverData?.data?.attributes?.description}
          heroTitle={serverData?.data?.attributes?.title}
          imgSrc={getMediaUrl(
            serverData?.data?.attributes?.mediaImage.data.attributes?.url
          )}
        />
      </BaseProvider>
    </StyletronProvider>
  );
};

export default ArticlePageTemplate;
