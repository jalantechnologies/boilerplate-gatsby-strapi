import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Seo } from '../../types/homepage';
import { getMediaUrl } from '../../utils/get-media-url';

type SeoPropTypes = {
  data: Seo;
};

export const SEO: FC<SeoPropTypes> = ({ data }) => {
  return (
    <Helmet>
      <title>{data.Title}</title>
      <meta name="description" content={data.Description} />
      <link rel="icon" href={getMediaUrl(data.Favicon.data.attributes.url)} />
      {data.Metas?.map(item => (
        <meta name={item.Name} content={item.Content} />
      ))}
    </Helmet>
  );
};
