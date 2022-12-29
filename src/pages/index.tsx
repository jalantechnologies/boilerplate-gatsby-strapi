import * as React from 'react';
import PageLayout from '../page-layouts';
import { getMediaUrl } from '../utils/get-media-url';
import { Homepage } from '../types/homepage';
import NavBar from '../components/nav-bar/nav-bar';
import { Hero } from '../components/banner/home-page-banner';
import { HomePageServiceImpl } from '../services/page/home-page.service';
import { Block } from 'baseui/block';
import { SEO } from '../components/seo';

declare type IndexPageProps = {
  serverData: any;
};

const IndexPage: React.FC<IndexPageProps> = ({ serverData }) => {
  const homepage = serverData.homePageData as Homepage;

  return (
    <PageLayout>
      <SEO
        data={homepage.data.attributes.Seo}
        // title={homepage.data.attributes.Seo.Title}
        // metaImage={getMediaUrl(
        //   homepage.data.attributes.Seo.Favicon.data.attributes.url,
        // )}
        // description={homepage.data.attributes.Seo.Description}
      />
      <Block position={'relative'}>
        <NavBar data={homepage.data.attributes.Header} />
        <Hero data={homepage.data.attributes.Banners} />
      </Block>
    </PageLayout>
  );
};

export const getServerData = async () => {
  const serviceObject = new HomePageServiceImpl();
  const { data } = await serviceObject.getHomePage();
  return {
    props: {
      homePageData: data,
    },
  };
};

export default IndexPage;
