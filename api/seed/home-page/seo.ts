import { Common } from '../common';

export const getSeo = async () => {
  const id = await Common.getFavicon();

  return {
    Title: 'Sunny Energy',
    Description:
      'Sunny Energy is the leading solar energy company in Arizona. We’ve installed thousands of solar systems for residential customers. ',
    Favicon: id,
    Metas: [
      {
        Name: 'viewport',
        Content: 'width=device-width, initial-scale=1',
      },
    ],
  };
};
