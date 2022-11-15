import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface APIService {
  service: AxiosInstance;
}

class APIServiceImpl implements APIService {
  service: AxiosInstance;

  constructor() {
    this.service = axios.create({
      baseURL: process.env.STRAPI_API_URL,
    });
  }

  protected async get(path: string, config?: any): Promise<AxiosResponse> {
    return this.service.get(path, config);
  }

  protected async patch(path: string, payload: any): Promise<AxiosResponse> {
    return this.service.patch(path, payload);
  }

  protected async put(path: string, payload: any): Promise<AxiosResponse> {
    return this.service.put(path, payload);
  }

  protected async post(path: string, payload: any): Promise<AxiosResponse> {
    return this.service.post(path, payload);
  }

  protected async delete(path: string, payload: any): Promise<AxiosResponse> {
    return this.service.delete(path, payload);
  }
}

export default APIServiceImpl;
