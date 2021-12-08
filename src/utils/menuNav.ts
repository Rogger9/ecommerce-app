import { IMenuListNav } from '../types'

export const menuNav: IMenuListNav[] = [
  { name: 'Home', icon: 'home' },
  { name: 'Categories', icon: 'database', subMenu: ['Electronics', 'Smart TV', 'Cellphones', 'Clothes', 'Books', 'Sports'] },
  { name: 'Trending Products', icon: 'chart-bar' },
  { name: 'Brands', icon: 'bold' },
  { name: 'Services', icon: 'globe-americas' },
  { name: 'About', icon: 'info' }
]
