import { SET_THEME } from '../types'

export const setTheme = (mode: string) => ({
  type: SET_THEME,
  payload: mode,
})
