import { getBanners } from './banners';
import { getHeader } from './header';
import { getSeo } from './seo';

export const getHomePage = async () => {
  const seo = await getSeo();
  const header = await getHeader();
  const banners = await getBanners();

  const date = new Date().toISOString();

  return {
    id: 1,
    createdAt: date,
    updatedAt: date,
    publishedAt: date,
    Seo: seo,
    Header: header,
    Banners: banners,
    createdBy: 1,
    updatedBy: 1,
  };
};
