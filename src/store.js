import { configureStore } from '@reduxjs/toolkit'
import { categories } from './components/state/categories/categories'

export const store = configureStore({
  reducer: {
    categories: categories.reducer,
  },
})
