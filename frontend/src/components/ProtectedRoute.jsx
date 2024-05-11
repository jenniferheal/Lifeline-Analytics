import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    auth().catch(() => setIsAuthenticated(false))
  }, [isAuthenticated])

  const auth = async () => {
    const token = localStorage.getItem('jwtToken')
    if (!token) {
      setIsAuthenticated(false)
      return
    }

    const decoded = jwtDecode(token)
    const tokenExpiration = decoded.exp
    const now = Date.now() / 1000

    if (tokenExpiration < now) {
      setIsAuthenticated(false)
    } else {
      setIsAuthenticated(true)
    }
  }

  if (isAuthenticated === null) {
    return null
  }
  return isAuthenticated ? children : <Navigate to='/login' />
}
