import axios from 'axios';
import store from 'src/redux/index';
import type { INews } from 'src/types/news';
import { format } from 'date-fns';
import mapStateInParams from 'src/helpers/getQueryString';
import type { Weather } from 'src/types/weather';

const {
  REACT_APP_NEWS_API_URL: baseUrl,
  REACT_APP_NEWS_API_KEY: apiKey,
  REACT_APP_WEATHER_API_URL: baseWeatherUrl,
  REACT_APP_WEATHER_API_KEY: weatherApiKey
} = process.env;

const baseTimeoutTime = 8000;

// eslint-disable-next-line
export const axiosNewsInstance = axios.create({
  timeout: baseTimeoutTime,
  baseURL: baseUrl,
  params: {
    domains: 'yandex.ru'
  }
});

export const axiosWeatherInstance = axios.create({
  timeout: baseTimeoutTime,
  baseURL: baseWeatherUrl,
  params: {
    days: 5,
    aqi: 'no',
    alerts: 'no',
  }
});

axiosNewsInstance.defaults.headers.common.Authorization = apiKey;

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
      settings: { pageSize: NumberPageSize },
      news: { currentPage: NumbreCurrentPage },
      newsFilters
    } = this.getState();
    const pageSize = String(NumberPageSize);
    const currentPage = String(NumbreCurrentPage);
    const query: string[] = mapStateInParams({ ...newsFilters, pageSize, currentPage });
    return `${query.length ? '/?' : ''}${query.join('&')}`;
  }
  // eslint-disable-next-line
  async getAllNews() {
    try {
      const { data } = await axiosNewsInstance.get<INews>(`/everything${this.getQueryParams()}`);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  // eslint-disable-next-line
  async getWeather(location: string) {
    try {
      const { data } = await axiosWeatherInstance.get<Weather>(`/forecast.json?key=${weatherApiKey}&q=${location}`);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default new API();
