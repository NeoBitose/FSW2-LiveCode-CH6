import { useState } from 'react'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import NavbarTailwind from './components/navbar/navbarTailwind';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/about",
//     element: <About />
//   },
//   {
//     path: "/not-found",
//     element: <NotFound />
//   }
// ])

function App() {
  return (
    // <>
    //   <RouterProvider router={router} />
    // </>
    <>
      <NavbarTailwind/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
