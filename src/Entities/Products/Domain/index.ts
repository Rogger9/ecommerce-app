import { IProducts } from '../../../types'

export class Product implements IProducts {
  id: number
  name: string
  category: string
  description: string
  imageURL: string
  price: number
  stock: number
  brand: string

  constructor (id: number, name: string, category: string, description: string, imageURL: string, price: number, stock: number, brand: string) {
    this.id = id
    this.name = name
    this.category = category
    this.description = description
    this.imageURL = imageURL
    this.price = price
    this.stock = stock
    this.brand = brand
  }
}
