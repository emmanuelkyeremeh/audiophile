import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import modalReducer from './modalSlice';
import checkoutFormReducer from './checkoutFormSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    checkoutForm: checkoutFormReducer,
  },
});

export default store; 