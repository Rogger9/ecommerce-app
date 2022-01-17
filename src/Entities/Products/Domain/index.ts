import { IProducts } from '../../../types'

export class Product implements IProducts {
  name: string
  description: string
  imageURL: string
  price: number
  stock: number

  constructor (name: string, description: string, imageURL: string, price: number, stock: number) {
    this.name = name
    this.description = description
    this.imageURL = imageURL
    this.price = price
    this.stock = stock
  }
}
