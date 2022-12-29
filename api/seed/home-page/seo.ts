import { Common } from '../common';

export const getSeo = async () => {
  const id = await Common.getFavicon();

  return {
    Title: 'JTC',
    Description: 'Description about page',
    Favicon: id,
    Metas: [
      {
        Name: 'viewport',
        Content: 'width=device-width, initial-scale=1',
      },
    ],
  };
};
