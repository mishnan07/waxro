import React from 'react'
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';


const App = () => {
  return (
    <div className='bg-black'>
     <BrowserRouter >
       <Routes >
        <Route path='/*' element={<Home />}/>
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
