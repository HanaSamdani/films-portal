import { polyfill } from 'es6-promise';
import * as Observable from 'rxjs/observable/from';
import Axios from 'axios';

export default class API {
  static headers(options) {
    let requestHeaders = {};

    if(options.token) {
      requestHeaders['Authorization'] = `JWT ${options.token}`;
    }

    return requestHeaders;
  }

  static client(options) {
    return Axios.create({
      baseURL: options.host,
      timeout: options.timeout || 30000,
      headers: API.headers(options),
    });
  }

  static get(url, options) {
    const apiClient = API.client(options);
    return Observable.from(apiClient.get(url));
  }

  static post(url, params, options) {
    const apiClient = API.client(options);
    return Observable.from(apiClient.post(url, params));
  }

  static put(url, params, options) {
    const apiClient = API.client(options);
    return Observable.from(apiClient.put(url, params));
  }

  static delete(url, options) {
    const apiClient = API.client(options);
    return Observable.from(apiClient.delete(url));
  }

  static patch(url, params, options) {
    const apiClient = API.client(options);
    return Observable.from(apiClient.patch(url, params));
  }
}
