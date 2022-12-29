import { Homepage } from '../../types/homepage';
import APIServiceImpl from '../api/api.service';
import ServiceResponse from '../api/response.service';
import { HomePageService } from './home-page.interface';

const componentsData = [
  'Header',
  'Header.Logo',
  'Header.Menus',
  'Header.Menus.Submenus',
  'Header.Links',

  'Banners',
  'Banners.Background',
  'Banners.Link',

  'Logo',

  'Seo',
  'Seo.Favicon',
  'Seo.Metas',
];

export class HomePageServiceImpl extends APIServiceImpl
  implements HomePageService {
  static readonly GET_HOME_PAGE_API = `${
    process.env.STRAPI_API_URL
  }/api/home-page?populate=${componentsData.join(',')}`;

  async getHomePage(): Promise<ServiceResponse<Homepage>> {
    try {
      const url = HomePageServiceImpl.GET_HOME_PAGE_API;
      const { data: res } = await this.get(url);
      return new ServiceResponse<Homepage>(res);
    } catch (error) {
      return new ServiceResponse<Homepage>(undefined, error);
    }
  }
}
