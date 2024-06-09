import React from 'react';
import "./style.scss";


const Mode = ({ changeColorMode, darkMode }) => {
  const handleToggle = () => {
    changeColorMode(!darkMode);
  };

  return (
    <button onClick={handleToggle} className={`mode-toggle ${darkMode ? 'dark' : 'light'}`}>
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default Mode;
