import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import './App.css'

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import NavbarTailwind from './components/navbar/navbarTailwind';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    setIsAuthenticated(false)
  }

  return (
    <>
      {isAuthenticated && <NavbarTailwind onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={ isAuthenticated ? <Home /> : <Navigate to="/login" />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={ isAuthenticated ? <Navigate to="/"/> : <Login />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  )
}

export default App
