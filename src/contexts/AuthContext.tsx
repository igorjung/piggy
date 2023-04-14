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
  userToken: undefined
})

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isUserLogged, setIsUserLogged] = useState(false)
  const [userToken, setUserToken] = useState()

  useEffect(() => {
  }, [])

  return (
    <AuthContext.Provider value={{ isUserLogged, userToken }}>
      {children}
    </AuthContext.Provider>
  )

}