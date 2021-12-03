const { body } = document

export const BodyDocument = {
  get (name: string) {
    return body.getAttribute(name)
  },
  set (name: string, value: string) {
    return body.setAttribute(name, value)
  }
}
