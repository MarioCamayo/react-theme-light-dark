import React from 'react';

const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      Cambiar a tema {isDarkMode ? 'claro' : 'oscuro'}
    </button>
  );
};

export default ThemeToggleButton;
