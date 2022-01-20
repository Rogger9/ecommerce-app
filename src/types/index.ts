import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type ChangeEventInput = React.ChangeEventHandler<HTMLInputElement>
export type ChangeEventForm = React.FormEventHandler<HTMLFormElement>
export type MouseEventLiElement = React.MouseEventHandler<HTMLLIElement>

export interface IProducts {
  id?: number
  name: string
  category?: string
  description: string
  imageURL: string
  price: number
  stock: number
  brand: string
}

export interface IMenuListNav {
  name: string
  icon: IconProp
  subMenu?: string[]
  normalSize?: boolean
}

export interface GenericKeyString<T> {
  [key: string]: T
}
