import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { slug, quantity, product } = action.payload;
      const existingItem = state.items.find((item) => item.slug === slug);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ slug, quantity, product });
      }
    },
    updateQuantity: (state, action) => {
      const { slug, delta } = action.payload;
      const item = state.items.find((item) => item.slug === slug);
      if (item) {
        item.quantity = Math.max(1, item.quantity + delta);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.slug !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 