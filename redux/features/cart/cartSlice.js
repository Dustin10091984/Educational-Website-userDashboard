import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // This will hold {id, title, cost, quantity} for each product
  },
  reducers: {
    // Add to cart action
    addToCart: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId); // Filter out the item with the specified itemId
    },
    // Other actions such as removeFromCart can also be added here
    incrementQuantity: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (existingIndex >= 0 && state.items[existingIndex].quantity > 1) {
        state.items[existingIndex].quantity -= 1
      }
    },
    initializeCart: (state, action) => {
      state.items = action.payload
    },
  },
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart ,
  initializeCart,
} = cartSlice.actions
export default cartSlice.reducer
