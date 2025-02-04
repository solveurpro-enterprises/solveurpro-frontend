import React from 'react'
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/common/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  
  return (
    <div className='bg-black min-h-screen text-white'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
