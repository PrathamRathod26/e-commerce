import React from 'react'
import { Box } from '@mui/material';
import Routes from './routes/routes.jsx';
import './animations/ImageSlider.css';

import NavBar from './components/NavBar.jsx';

const App = () => {
  return (
    <Box>
      <NavBar />
      <Routes />
    </Box>
  )
}

export default App
