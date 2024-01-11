import { ReactNode, createContext, useContext, useState } from 'react'

import { themes } from '../styles'

interface IThemeContext {
  theme: typeof themes.dark
  toggle: () => void
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

interface ThemeProviderProps {
  children: ReactNode
}

export function ContextThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(themes.dark)

  function toggle() {
    setTheme(({ title }) => (title === 'dark' ? themes.light : themes.dark))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
