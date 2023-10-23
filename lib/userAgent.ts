// @ts-nocheck

/**
 * Singleton for switching the userAgent string on the window.navigator API
 */
class UserAgent {
  constructor() {
    if (!UserAgent.__instance) {
      this.initialUserAgent = window.navigator.userAgent;
    }
    this._activeString = this.initialUserAgent;
  }

  /**
   * Get the current active string
   */
  get value() {
    return this._activeString;
  }

  /**
   * Determine if the this.
   */
  get isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      this.value
    );
  }

  /**
   * Set the userAgent string in the window.navigator.userAgent API.
   * Do not call this outside of preview mode! Setting userAgent string
  * will patch the prototype which we do NOT want to do in production.
   */
  update(string: string): void {
    if (string) {
      this._activeString = string;
      Object.defineProperty(window.navigator, 'userAgent', {
        value: string,
        configurable: true
      });
    }
  }

  /**
   * Set the userAgent string in the window.navigator.userAgent API.
   */
  reset(): void {
    this.update(this.initialUserAgent);
  }
}

export const userAgent = new UserAgent();
