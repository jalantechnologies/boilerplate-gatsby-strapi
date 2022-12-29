import { Common } from '../common';
import { uploadFile } from '../upload-file';

export const getArticle = async () => {
  const id = await Common.getFavicon();
  const banner = await uploadFile('banner.jpg');

  return {
    Title: 'first article',
    Description:
      '# Description\n \nThis is first blog added from strapi\n- Simple Markdown list\n- **Blod text**\n- _Italic_',
    createdAt: '2022-12-28T16:30:54.435Z',
    updatedAt: '2022-12-28T17:25:45.445Z',
    publishedAt: '2022-12-28T16:30:55.129Z',
    Author: 'Author name ',
    SubTitle: 'Subtitle',
    Seo: [
      {
        Title: 'first article',
        Description: 'data',
        Favicon: id,
        Metas: [{ Name: 'meta', Content: 'content' }],
      },
    ],
    Media: banner[0].id,
    createdBy: 1,
    updatedBy: 1,
  };
};
