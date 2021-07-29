import axios from 'axios';
import store from 'src/redux/index';
import type { INews } from 'src/types/News';
import { format } from 'date-fns';

const {
  REACT_APP_API_URL: baseUrl,
  REACT_APP_API_KEY: apiKey,
} = process.env;

// eslint-disable-next-line
export const axiosInstance = axios.create({
  timeout: 8000,
  baseURL: baseUrl,
  params: {
    domains: 'yandex.ru'
  }
});

axiosInstance.defaults.headers.common.Authorization = apiKey;

class API {
  // eslint-disable-next-line
  constructor() {
    // INITIAL REQ AND RES OBSERVE
    // axiosInstance.interceptors.request.use(() => {
    // // return что то
    // })
    // axiosInstance.interceptors.response.use(() => {
    // // return что то
    // })
  }
    // eslint-disable-next-line
  private getState() {
    return store.getState();
  }

  private getQueryParams() {
    const {
      settings: { pageSize },
      news: { currentPage },
      newsFilters: {
        from, to
      }
    } = this.getState();
    const queryParams = [];
    if (pageSize) {
      queryParams.push(`?pageSize=${pageSize}`);
    }
    if (currentPage) {
      queryParams.push(`page=${currentPage}`);
    }
    if (from) {
      queryParams.push(`from=${from}`);
    }
    if (to) {
      queryParams.push(`to=${to}`);
    }
    return `${queryParams.join('&')}`;
  }
  // eslint-disable-next-line
  async getAllNews() {
    try {
      const { data } = await axiosInstance.get<INews>(`/everything${this.getQueryParams()}`);
      return data;
    } catch (e) {
      return Promise.reject(new Error(e as string));
    }
  }
}

export default new API();
