import React from 'react'
import "@fontsource-variable/mona-sans"; // Import the font
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  
  return (
    <div className=' min-h-screen text-white font-MonaSans-400 relative z-0'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
