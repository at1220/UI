import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create();
    this.handleError = this.handleError.bind(this);
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
    // // using Interceptors
    instance.interceptors.request.use(async config => {
      config.headers = {
        authorization: 'Bearer ' + this.token,
      };
      return config;
    });
  }

  setToken(token) {
    this.token = token;
  }

  async handleSuccess(response) {
    return response.data;
  }

  async handleError(error) {
    // console.log(error, error.response, 'check in axiosService');

    if (!error.response) {
      return new Promise((resolve, reject) => {
        resolve({message: 'khum load dc api lay'});
      });
    }

    if ([404, 502, 503].includes(error.response.status)) {
      return new Promise((resolve, reject) => {
        resolve({message: error.response.data});
      });
    }

    // if (error.response.status === 401) {
    //   return new Promise((resolve, reject) => {
    //     resolve(error.res);
    //   });
    // }

    if (error.response) {
      return new Promise((resolve, reject) => {
        resolve(error.response.data);
      });
    }
    if (error.request) {
      return new Promise.reject(error.request);
    }
  }

  get(url) {
    return this.instance.get(url);
  }

  postFormData(url, body) {
    return this.instance.post(url, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
        //'Authorization':
        // authorization:  + token, //the token is a variable which holds the token
      },
    });
  }

  putFormData(url, body) {
    return this.instance.put(url, body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url, body) {
    return this.instance.delete(url, {
      data: body,
    });
  }
}

export default new AxiosService();
