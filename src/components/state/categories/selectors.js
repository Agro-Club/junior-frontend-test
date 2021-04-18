import { CATEGORIES_SUCCESS } from './categories'

export const getCategories = state => {
  if (state.categories.status === CATEGORIES_SUCCESS) {
    return state.categories.categories
  }

  return []
}

export const getCategoriesStatus = state => state.categories.status
