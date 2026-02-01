import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./Pages/About";
import Product from "./Pages/Product";
// import Contact from "./Pages/Contact";
// import SingleProduct from "./Pages/SingleProduct";
// import Cart from "./Pages/Cart";
import Navbar from "./component/Navbar";
// import CatalogPage from "./Pages/CatalogPage";
// import BlogPage from "./Pages/BlogPage";
import { CartProvider } from "./context/CartContext";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const CatalogPage = lazy(() => import("./Pages/CatalogPage"));
const Contact = lazy(() => import("./Pages/Contact"));
const BlogPage = lazy(() => import("./Pages/BlogPage"));
const SingleProduct = lazy(() => import("./Pages/SingleProduct"));
const Cart = lazy(() => import("./Pages/Cart"));
const Footer = lazy(() => import("./component/Footer"));


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalogpage" element={<CatalogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </Router>
    </CartProvider>
  );
};

export default App;
