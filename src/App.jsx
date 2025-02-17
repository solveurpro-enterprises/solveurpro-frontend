import React from 'react'
import "@fontsource-variable/mona-sans"; // Import the font
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.png'
import './App.css'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/common/Footer';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Services from './pages/Services';

function App() {
  
  return (
    <div className=' min-h-screen text-white font-MonaSans-400 relative overflow-hidden'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
