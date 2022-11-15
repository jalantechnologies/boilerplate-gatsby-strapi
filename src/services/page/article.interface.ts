import ServiceResponse from '../api/response.service';

export interface ArtilceService {
  getArticlesData: (articleId: string) => Promise<ServiceResponse<any>>;
}
