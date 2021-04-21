import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories } from './thunk'

export const CATEGORIES_SUCCESS = 'success'
export const CATEGORIES_LOADING = 'loading'
export const CATEGORIES_ERROR = 'error'

const initialState = { status: CATEGORIES_LOADING, categories: [] }

export const categories = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.status = CATEGORIES_SUCCESS
        state.categories = action.payload
      } else {
        state.status = CATEGORIES_ERROR
        state.categories = []
      }
    },
    [fetchCategories.pending]: state => {
      state.status = CATEGORIES_LOADING
      state.categories = []
    },
    [fetchCategories.rejected]: state => {
      state.status = CATEGORIES_ERROR
      state.categories = []
    },
  },
})
