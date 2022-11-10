import ServiceResponse from '../api/response.service';

export interface PageService {
  getPageData:(pageId:string)=> Promise<ServiceResponse<any>>;
}
