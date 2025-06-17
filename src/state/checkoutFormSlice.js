import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  zip: '',
  city: '',
  country: '',
  paymentMethod: 'e-Money',
  eMoneyNumber: '',
  eMoneyPin: '',
};

const checkoutFormSlice = createSlice({
  name: 'checkoutForm',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = checkoutFormSlice.actions;
export default checkoutFormSlice.reducer; 