import { PRODUCTS_SUCCESS } from './products'

export const getProducts = state => {
  if (state.products.status === PRODUCTS_SUCCESS) {
    return state.products.products
  }
  return []
}

export const getProductsStatus = state => state.products.status
