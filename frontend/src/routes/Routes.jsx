import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home.jsx';
import Test from '../pages/Test.jsx';
import { Box } from '@mui/material';

const routes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
  );
}

export default routes
