/**
 * Generic simplified class to be used by specific sub classes
 * Used to fetch, create and delete cookies
 * @class CookiesService
 */
class CookiesService {
  // private property
  #prefix;

  constructor(prefix) {
    // Add a generic prefix to cookies names to avoid conflict
    // or pass a new prefix everytime a sub class uses this service
    this.#prefix = prefix || 'prefix-';
  }

  /**
   * Get value from cookie
   * @param {string} key - Identifiable name to fetch associated value
   * @returns {(string|boolean)} Returns value if exists or false
   * @memberof CookiesService
   */
  get = (key) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${this.#prefix + key}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || false;
    } else {
      return false;
    }
  };

  /**
   * Set new cookie with default 30 days expiration time
   * @param {string} key - Identifiable string to use when fetching this cookie
   * @param {string} value - Content to save in a cookie
   * @param {number} [expirationDays=365] - Cookie in lives in days
   * @returns {boolean} Confirmation state of updated cookie
   * @memberof CookiesService
   */
  set = (key, value, expirationDays = 365) => {
    try {
      const date = new Date();
      date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
      const expires = 'expires=' + date.toUTCString();
      document.cookie = `${this.#prefix + key}=${value}; ${expires}; path=/`;
      return true;
    } catch (e) {
      return false;
    }
  };

  /**
   * We delete a cookie by setting the expirationDate in the past
   * @param {string} key - Identifiable string to use when fetching this cookie
   * @returns {boolean} - Confirmation state of deleted cookie
   * @memberof CookiesService
   */
  delete = (key) => {
    try {
      return this.set(this.#prefix + key, '', 0);
    } catch (e) {
      return false;
    }
  };
}

/**
 * Accepting cookies is a basic functionality for public applications
 * @class AcceptCookiesService
 * @extends {CookiesService}
 */
export class AcceptCookiesService extends CookiesService {
  acceptedCookies;

  constructor() {
    super();

    this.acceptedCookies = this.getCookieAcception();
  }

  /**
   * Fetch acceptance cookie
   * @memberof AcceptCookiesService
   */
  getCookieAcception = () => {
    return this.get('accepted-cookies');
  };

  /**
   * Update or create a new acceptance cookie
   * @memberof AcceptCookiesService
   */
  setCookieAcception = (value) => {
    return this.set('accepted-cookies', value);
  };
}

/**
 * Remembering the previous select language is good for the experience of a recurrent user
 * @class LanguageCookiesService
 * @extends {AcceptCookiesService}
 */
export class LanguageCookiesService extends AcceptCookiesService {
  constructor() {
    super();
  }

  /**
   * Fetch language cookie
   * @memberof LanguageCookiesService
   */
  getLanguage = () => {
    return this.get('site-language');
  };

  /**
   * Update or create a new language cookie if the user has accepted in keeping cookies
   * @memberof LanguageCookiesService
   */
  setLanguage = (language) => {
    if (this.acceptedCookies) return this.set('site-language', language);
    return;
  };
}
