import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './thunk'

export const PRODUCTS_SUCCESS = 'success'
export const PRODUCTS_LOADING = 'loading'
export const PRODUCTS_ERROR = 'error'

const initialState = { status: PRODUCTS_LOADING, products: [] }

export const products = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      if (action.payload.results !== undefined) {
        state.status = PRODUCTS_SUCCESS
        state.products = action.payload.results
      } else {
        state.status = PRODUCTS_ERROR
        state.products = []
      }
    },
    [fetchProducts.pending]: state => {
      state.status = PRODUCTS_LOADING
      state.products = []
    },
    [fetchProducts.rejected]: state => {
      state.status = PRODUCTS_ERROR
      state.products = []
    },
  },
})
