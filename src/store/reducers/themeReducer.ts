import { SET_THEME } from '../types'

const initialState = {
  theme: 'dark',
}

export const themeReducer = (state = initialState, action: { type: string; payload: string }) => {
  switch (action.type) {
    case SET_THEME:
      return {
        theme: action.payload,
      }
    default:
      return state
  }
}
