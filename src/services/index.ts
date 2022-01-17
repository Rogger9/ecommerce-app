export class Services {
  static getLocalStorage (key: string) {
    return window.localStorage.getItem(key)
  }

  static setLocalStorage (key: string, value: string) {
    return window.localStorage.setItem(key, value)
  }

  static setInterval (handler: () => void, timeout: number) {
    return window.setInterval(handler, timeout)
  }

  static clearInterval (interval: number) {
    return window.clearInterval(interval)
  }

  static setTheme (name: string, value: string) {
    return document.body.setAttribute(name, value)
  }

  static getTheme (name: string) {
    return document.body.getAttribute(name)
  }

  static async fetchData (url: string) {
    const res = await fetch(url)
    return res.json()
  }
}
