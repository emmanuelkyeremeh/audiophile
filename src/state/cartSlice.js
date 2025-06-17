import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { slug, quantity, product } = action.payload;
      const existing = state.find((item) => item.slug === slug);
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.push({ slug, quantity, product });
      }
    },
    updateQuantity: (state, action) => {
      const { slug, quantity } = action.payload;
      const item = state.find((item) => item.slug === slug);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.slug !== action.payload);
    },
    clearCart: () => [],
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 