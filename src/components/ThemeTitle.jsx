import React from 'react';

const ThemeTitle = ({ isDarkMode }) => {
  return (
    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
      Tema Actual: {isDarkMode ? 'Oscuro' : 'Claro'}
    </h1>
  );
};

export default ThemeTitle;
