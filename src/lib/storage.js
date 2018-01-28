const KEYS = {
  jwt_token: 'jwt_token',
};

export default class Storage {
  static setAccessToken(token) {
    return localStorage.setItem(KEYS.jwt_token, token);
  }

  static getAccessToken() {
    return localStorage.getItem(KEYS.jwt_token);
  }

  static removeAccessToken() {
    return localStorage.removeItem(KEYS.jwt_token);
  }
}
