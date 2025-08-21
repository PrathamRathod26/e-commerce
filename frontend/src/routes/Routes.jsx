import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home.jsx';
import Test from '../pages/Test.jsx';
import Shop from '../pages/Shop.jsx';
import Favorites from "../pages/Favorites.jsx";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default routes
