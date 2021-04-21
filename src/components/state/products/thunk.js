import { getProducts } from '../../api'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ isNew, isLimited, category, search }) => {
    const products = await getProducts(isNew, isLimited, category, search)
    return products
  }
)
