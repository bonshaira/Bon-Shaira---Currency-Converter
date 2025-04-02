import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../features/themeSlice'; // Import the toggle action

function ThemeToggle() {
  const darkMode = useSelector((state) => state.theme.darkMode); // Access the theme state
  const dispatch = useDispatch(); // Get the dispatch function

  return (
    <button onClick={() => dispatch(toggleDarkMode())}>
      {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
    </button>
  );
}

export default ThemeToggle;