import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home.jsx';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default routes
