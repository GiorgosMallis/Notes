import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  dark: {
    name: 'Dark',
    background: 'bg-gray-900',
    secondary: 'bg-gray-800',
    text: 'text-white',
    hover: 'hover:bg-gray-700'
  },
  navy: {
    name: 'Navy',
    background: 'bg-navy-900',
    secondary: 'bg-navy-800',
    text: 'text-white',
    hover: 'hover:bg-navy-700'
  },
  emerald: {
    name: 'Emerald',
    background: 'bg-emerald-900',
    secondary: 'bg-emerald-800',
    text: 'text-white',
    hover: 'hover:bg-emerald-700'
  },
  purple: {
    name: 'Purple',
    background: 'bg-purple-900',
    secondary: 'bg-purple-800',
    text: 'text-white',
    hover: 'hover:bg-purple-700'
  }
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : true;
  });

  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('themeVariant');
    return saved || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
    localStorage.setItem('themeVariant', currentTheme);
  }, [isDark, currentTheme]);

  const toggleTheme = () => setIsDark(!isDark);
  
  return (
    <ThemeContext.Provider value={{ 
      isDark, 
      toggleTheme, 
      currentTheme, 
      setCurrentTheme, 
      themes,
      theme: isDark ? themes[currentTheme] : null 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);