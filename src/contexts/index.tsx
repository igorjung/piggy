import { ThemeProvider } from 'styled-components'

import { theme } from '@styles/theme';

import { AuthProvider } from './AuthContext'
import { LanguageProvider } from './LanguageContext'

interface MainProviderProps {
  children: React.ReactNode
}

const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MainProvider

export * from './AuthContext'
export * from './LanguageContext'