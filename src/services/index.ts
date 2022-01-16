export class Services {
  static getLocalStorage (key: string) {
    return window.localStorage.getItem(key)
  }

  static setLocalStorage (key: string, value: string) {
    return window.localStorage.setItem(key, value)
  }
}
