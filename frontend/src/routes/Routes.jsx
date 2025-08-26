import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";
import Test from "../pages/Test.jsx";
import Shop from "../pages/Shop/Shop.jsx";
import Favorites from "../pages/Favorites.jsx";
import About from "../pages/About/About.jsx";
import EmailUpdate from "../components/EmailUpdate.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import Contact from "../pages/Contact.jsx";
import Blogs from "../pages/Blog/Blogs.jsx";
import Blog from "../pages/Blog/Blog.jsx";
import Category from "../pages/Shop/Category.jsx";

// Layout with BOTH components
const BothLayout = () => (
  <>
    <Outlet /> {/* 👈 This is important */}
    <EmailUpdate />
    <ImageSlider />
  </>
);

// Layout with ONLY EmailUpdate
const EmailLayout = () => (
  <>
    <Outlet />
    <EmailUpdate />
  </>
);

const SlidingLayout = () => (
  <>
    <Outlet />
    <ImageSlider />
  </>
)

// Layout with NONE
const NoneLayout = () => (
  <>
    <Outlet />
  </>
);

const routes = () => {
  return (
    <Routes>
      {/* Pages with BOTH */}
      <Route element={<BothLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/test" element={<Test />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/shop/:category" element={<Category />} />
      </Route>

      {/* Pages with ONLY EmailUpdate */}
      <Route element={<EmailLayout />}>
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      {/* Pages with ONLY ImageSlider */}
      <Route element={<SlidingLayout />}>
        <Route path="/about" element={<About />} />
      </Route>

      {/* Pages with NONE */}
      <Route element={<NoneLayout />}>
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:blogTitle" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default routes;
