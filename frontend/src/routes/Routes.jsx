import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home.jsx';
import Test from '../pages/Test.jsx';
import Shop from '../pages/Shop/Shop.jsx';
import Favorites from "../pages/Favorites.jsx";
import About from '../pages/About/About.jsx';

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default routes
