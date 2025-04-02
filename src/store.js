import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice'; // Import the theme slice reducer

// Create the Redux store
const store = configureStore({
  reducer: {
    theme: themeReducer, // Add the theme reducer
  },
});

export default store;