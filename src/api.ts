import { booksProducts, cellphonesProducts, clothesProducts, electronicsProducts, smartTVProducts, sportsProducts, trendingProducts } from './utils/listProducts'
import { GenericKeyString, IProducts } from './types'

const listProducts: GenericKeyString<IProducts[]> = {
  electronics: electronicsProducts,
  'smart-tv': smartTVProducts,
  cellphones: cellphonesProducts,
  clothes: clothesProducts,
  books: booksProducts,
  sports: sportsProducts,
  'trending-products': trendingProducts
}

export class api {
  static search (query?: string): Promise<IProducts[]> {
    const result = query ? listProducts[query] : trendingProducts
    return new Promise(resolve => setTimeout(() => resolve(result), 600))
  }
}
