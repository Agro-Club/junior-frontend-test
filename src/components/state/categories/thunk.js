import { getCategories } from '../../api'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const categories = await getCategories()
  return categories
})
