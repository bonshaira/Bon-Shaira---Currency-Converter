import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { darkMode: false }, // Initial state for the theme
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode; // Toggle the darkMode value
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions; // Export the action
export default themeSlice.reducer; // Export the reducer