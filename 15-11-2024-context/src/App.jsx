import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'

import './App.css'

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import NavbarTailwind from './components/navbar/navbarTailwind';
import { isTokenExpired } from '../utils/auth';
import { useAuth } from './context/AuthContext';

function App() {

  const {isAuthenticated, logout} = useAuth()

  return (
    <>
      {isAuthenticated && <NavbarTailwind onLogout={logout} />}
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
