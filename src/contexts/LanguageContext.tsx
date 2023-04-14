import { 
  createContext, 
  useContext, 
  useState, 
  useEffect 
} from 'react';

import { BaseTextModel } from '@models'
import data from '../mocks/language'

interface LanguageContextProps {
  baseText: BaseTextModel
}
interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageContext = createContext<LanguageContextProps>({
  baseText: data['en']
})

export const useLanguageContext = () => {
  return useContext(LanguageContext)
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [baseText, setBaseText] = useState(data['en'])

  useEffect(() => {
    if (
      typeof navigator !== undefined 
      && navigator.language === 'pt-BR'
    ) {
      setBaseText(data['pt'])
    } else {
      setBaseText(data['en'])
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ baseText }}>
      {children}
    </LanguageContext.Provider>
  )

}