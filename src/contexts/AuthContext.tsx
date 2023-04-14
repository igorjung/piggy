import { 
  createContext, 
  useContext, 
  useState, 
  useEffect 
} from 'react';

interface AuthContextProps {
  isUserLogged: boolean
  userToken?: string
}
interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps>({
  isUserLogged: false,
  userToken: undefined,
})

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isUserLogged, setIsUserLogged] = useState(false)
  const [userToken, setUserToken] = useState<string | undefined>()

  useEffect(() => {
    const localToken = localStorage.getItem('userToken')?.toString()
    setIsUserLogged(!!localToken !== undefined)
    setUserToken(localToken)
  }, [])

  return (
    <AuthContext.Provider value={{ isUserLogged, userToken }}>
      {children}
    </AuthContext.Provider>
  )

}