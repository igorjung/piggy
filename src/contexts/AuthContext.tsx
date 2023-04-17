import { 
  createContext, 
  useContext, 
  useState, 
  useEffect 
} from 'react';

interface AuthContextProps {
  isUserLogged: boolean
  userToken: string | null
  isLoading: boolean
  login: (data: {email: string, password: string}) => void
  logout: () => void
}
interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({
  isUserLogged: false,
  userToken: null,
  isLoading: false,
  login: () => {},
  logout: () => {}
})

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isUserLogged, setIsUserLogged] = useState(false)
  const [userToken, setUserToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const setAuthData = () => {
    const localToken = localStorage.getItem('userToken')
    setIsUserLogged(!!localToken)
    setUserToken(localToken)
  }

  useEffect(() => {
    setIsLoading(true)
    setAuthData()
    setIsLoading(false)
  }, [])

  const login = (data: { email: string, password: string}) => {
    setIsLoading(true)
    console.log('Submited data: ', data)
    localStorage.setItem('userToken', 'abcd1234')
    setAuthData()
    setIsLoading(false)
  }

  const logout = () => {
    setIsLoading(true)
    localStorage.removeItem('userToken')
    setAuthData()
    setIsLoading(false)
  }

  return (
    <AuthContext.Provider value={{ 
      isUserLogged, 
      userToken,
      isLoading,
      login, 
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )

}