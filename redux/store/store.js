const { configureStore } = require('@reduxjs/toolkit')
import productsReducer from '../features/products/productsSlice'
import cartReducer from '../features/cart/cartSlice'
import ticketsReducer from '../features/tickets/ticketsSlice'

export const store = configureStore({
  reducer: {
    productsR: productsReducer,
    cartR: cartReducer,
    ticketsR: ticketsReducer,
  },
})
store.subscribe(() => {
  try {
    const currentCart = store.getState().cartR.items
    localStorage.setItem('cart', JSON.stringify(currentCart))
  } catch (error) {
    console.error('Could not serialize cart state:', error)
  }
})
