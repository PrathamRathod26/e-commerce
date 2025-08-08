import { Box, Typography } from '@mui/material'
import HeroSection from '../components/HeroSection'
import Section1 from '../components/Section1.jsx'
import Section2 from "../components/section2.jsx"
import Section3 from '../components/section3.jsx'
import Fotter from '../components/Fotter.jsx'
import React from 'react'

const Home = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Fotter />
    </Box>
  )
}

export default Home
