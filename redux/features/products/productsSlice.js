import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import Cookies from 'js-cookie'

// get the list of products starts here
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { getState }) => {
    // const accessToken = Cookies.get('authToken')

    // if (!accessToken) {
    //   throw new Error('Access token not found')
    // }
    const response = await axios.get(
      'https://api.ebsalar.com/api/v1/front/product/',
      {
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,
        // },
      }
    )
    return response.data
  }
)
// get the list of products finishes here
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    entities: [],
    isLoading: false,
    isError: false,
    filters: {
      category: 'all',
    },
  },
  reducers: {
    setCategoryFilter: (state, action) => {
      state.filters.category = action.payload
    },
    resetFilters: (state) => {
      state.filters.category = 'all'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.entities = action.payload.results
        state.isLoading = false
        state.isError = false
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.entities = []
        state.isLoading = false
        state.isError = true
      })
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
      })
  },
})
export const { setCategoryFilter, resetFilters } = productsSlice.actions
export default productsSlice.reducer
