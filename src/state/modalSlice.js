import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  order: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.order = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.order = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer; 