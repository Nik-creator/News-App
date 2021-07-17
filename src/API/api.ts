import axios from 'axios';
import store from 'src/redux/index';
import type { INews } from 'src/types/News';

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

  // можем обращаться только внутри этого класса
  // eslint-disable-next-line
  private getState() {
    return store.getState();
  }
  // eslint-disable-next-line
  async getAllNews() {
    try {
      const { data } = await axiosInstance.get<INews>('/everything');
      return data;
    } catch {
      return Promise.reject(new Error('Ошибка запроса'));
    }
  }
}

export default new API();
