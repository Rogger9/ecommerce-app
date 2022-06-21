import { GenericKeyString } from '@types'

const scampi = {
  '50': '#f4f4fa',
  '100': '#e6e6f3',
  '200': '#d3d2eb',
  '300': '#b3b3dd',
  '400': '#918fcb',
  '500': '#7b74bd',
  '600': '#6759ab',
  '700': '#66569f',
  '800': '#594a83',
  '900': '#483f69',
}

export const darkTheme: GenericKeyString<string> = {
  primary: scampi[700],
  secondary: scampi[800],
  text: scampi[50],
  contrast: scampi[500],
  shadow: `${scampi[900]}66`,
  green: '#3D805F',
  red: '#B74545',
}

export const lightTheme: GenericKeyString<string> = {
  primary: scampi[50],
  secondary: scampi[100],
  text: scampi[800],
  contrast: scampi[500],
  shadow: `${scampi[900]}66`,
  green: '#3D805F',
  red: '#B74545',
}

export interface ITheme {
  font: {
    family: string
    size: GenericKeyString<string>
  }
  colors: GenericKeyString<string>
  border: {
    radius: string
    solid?: string
  }
}

export const getTheme = (mode: GenericKeyString<string>): ITheme => ({
  font: {
    family:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    size: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
  },
  colors: mode,
  border: {
    radius: '4px',
    solid: `1px solid ${mode.contrast}`,
  },
})
