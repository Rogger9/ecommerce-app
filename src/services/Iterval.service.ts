export const Interval = {
  set (handler: () => void, timeout: number): number {
    return window.setInterval(handler, timeout)
  },
  clear (interval: number) {
    return window.clearInterval(interval)
  }
}
