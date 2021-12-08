import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type ChangeEventInput = React.ChangeEventHandler<HTMLInputElement>
export type ChangeEventForm = React.FormEventHandler<HTMLFormElement>

export interface IMenuListNav {
  name: string
  icon: IconProp
  subMenu?: string[]
}
