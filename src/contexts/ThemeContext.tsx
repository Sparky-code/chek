import React, { createContext, useContext } from 'react'

import { theme } from '../styles/theme'

const ThemeContext = createContext(theme)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
)

export const useTheme = () => useContext(ThemeContext)
