import { createContext, useContext } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const fakeAuth = { user: null }
  return <AuthContext.Provider value={fakeAuth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
