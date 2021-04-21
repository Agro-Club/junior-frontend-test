import { configureStore } from '@reduxjs/toolkit'
import { categories, filters, products } from './components/state'

export const store = configureStore({
  reducer: {
    categories: categories.reducer,
    filters: filters.reducer,
    products: products.reducer,
  },
})
