import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
    </>
  )
}

export default App
