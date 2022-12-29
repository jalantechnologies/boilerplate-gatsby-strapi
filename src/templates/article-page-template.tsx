import * as React from 'react';
import PageLayout from '../page-layouts';
import { SEO } from '../components/seo';
import { ArticleAttributes } from '../types/article';
import ArticleSection from '../components/article/article-section';
import { Seo } from '../types/homepage';

declare type PageProps = {
  pageContext: any;
};

const ArticlePageTemplate: React.FC<PageProps> = ({ pageContext }) => {
  const article = pageContext.article as ArticleAttributes;
  const seo: Seo = pageContext.article.Seo[0] as Seo;

  return (
    <PageLayout>
      <SEO data={seo} />
      <ArticleSection article={article} />
    </PageLayout>
  );
};

export default ArticlePageTemplate;
