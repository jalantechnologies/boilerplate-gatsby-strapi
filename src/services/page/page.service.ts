import ServiceResponse from '../api/response.service'
import APIServiceImpl from '../api/api.service'
import { PageService } from './page.interface'

export class PageServiceImpl extends APIServiceImpl
  implements PageService {
  constructor() {
    super()
  }
  static readonly GET_PAGE_API = `${process.env.STRAPI_API_URL}/api/pages/:id?populate=seo,seo.metaImage,hero,hero.images`;
  
  async getPageData(pageId: string): Promise<ServiceResponse<any>> {
    try {
      const url = PageServiceImpl.GET_PAGE_API.replace(':id', pageId)
      const { data: res } = await this.get(url)
      return new ServiceResponse<any>(res)
    } catch (error) {
      return new ServiceResponse<any>(undefined, error)
    }
  }
}
