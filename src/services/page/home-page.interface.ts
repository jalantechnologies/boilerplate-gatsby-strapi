import ServiceResponse from '../api/response.service';

export interface HomePageService {
  getHomePage: () => Promise<ServiceResponse<any>>;
}
