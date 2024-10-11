import React, { useState } from 'react';
import ThemeContainer from './components/ThemeContainer';
import ThemeTitle from './components/ThemeTitle';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContainer isDarkMode={isDarkMode}>
      <ThemeTitle isDarkMode={isDarkMode} />
      <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <p style={{ marginTop: '1rem' }}>
        Haz clic en el botón para cambiar el tema.
      </p>
    </ThemeContainer>
  );
}

export default App;

