import axios from 'axios';

const {
  REACT_APP_API_URL: baseUrl,
} = process.env;

// eslint-disable-next-line
export const axiosInstance = axios.create({
  timeout: 8000,
  baseURL: baseUrl
});

class API {
  constructor() {
    // INITIAL REQ AND RES OBSERVE
    // axiosInstance.interceptors.request.use(() => {
    // 	// return что то
    // })
    // axiosInstance.interceptors.response.use(() => {
    // 	// return что то
    // })
  }

  // можем обращаться только внутри этого класса

  // private getState() {
	// 	return store.getState()
	// }
}
