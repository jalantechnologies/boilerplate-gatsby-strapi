import { uploadFile } from '../upload-file';

export const getBanners = async () => {
  const banner = await uploadFile('banner.jpg');

  return [
    {
      H1: 'Arizona’s Most Trusted Solar Provider',
      H2:
        'Award-Winning Service | Leading Solar Technology | Unmatched Warranties',
      Background: banner[0].id,
    },
  ];
};
