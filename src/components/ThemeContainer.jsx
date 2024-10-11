import React from 'react';

const ThemeContainer = ({ isDarkMode, children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? '#1a202c' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      {children}
    </div>
  );
};

export default ThemeContainer;
