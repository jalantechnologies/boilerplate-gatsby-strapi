import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

type SeoPropTypes = {
  description: string;
  metaImage: string;
  title: string;
};

export const SEO: FC<SeoPropTypes> = ({ description, metaImage, title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={metaImage} />
    </Helmet>
  );
};
