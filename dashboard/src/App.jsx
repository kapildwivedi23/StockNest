import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <>
     <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
