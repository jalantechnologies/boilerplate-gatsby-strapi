import ServiceResponse from '../api/response.service';
import APIServiceImpl from '../api/api.service';
import { ArtilceService } from './article.interface';

export class ArticleServiceImpl extends APIServiceImpl
  implements ArtilceService {
  static readonly GET_ARTICLE_API = `${process.env.STRAPI_API_URL}/api/articles/:id?populate=mediaImage,Seo,Seo.Favicon`;

  async getArticlesData(pageId: string): Promise<ServiceResponse<any>> {
    try {
      const url = ArticleServiceImpl.GET_ARTICLE_API.replace(':id', pageId);
      const { data: res } = await this.get(url);
      return new ServiceResponse<any>(res);
    } catch (error) {
      return new ServiceResponse<any>(undefined, error);
    }
  }
}
