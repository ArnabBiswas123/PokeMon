import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isOpen: false, // Initial state of the sidebar (true for open, false for closed)
  };
  const toggleSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      openModal: (state) => {
        state.isOpen = true;
      },
      closeModal: (state) => {
        state.isOpen = false;
      },
      toggleModal: (state) => {
        state.isOpen = !state.isOpen;
      },
    },
  });

  export const { openModal, closeModal, toggleModal } = toggleSlice.actions;
export default toggleSlice.reducer;