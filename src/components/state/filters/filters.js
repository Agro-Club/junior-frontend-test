import { createSlice } from '@reduxjs/toolkit'

const initialState = { selectedCategories: [], isLimited: false, isNew: false, searchString: '' }

export const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addSelectedCategory: (state, action) => {
      state.selectedCategories = [...state.selectedCategories, action.payload.category]
    },
    removeSelectedCategory: (state, action) => {
      state.selectedCategories = state.selectedCategories.filter(category => {
        return category !== action.payload.category
      })
    },
    clearSelectedCategories: state => {
      state.selectedCategories = []
    },
    setIsLimited: (state, action) => {
      state.isLimited = action.payload.isLimited
    },
    setIsNew: (state, action) => {
      state.isNew = action.payload.isNew
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload.searchString
    },
  },
})
const { actions } = filters
export const {
  addSelectedCategory,
  removeSelectedCategory,
  clearSelectedCategories,
  setIsLimited,
  setIsNew,
  setSearchString,
} = actions
