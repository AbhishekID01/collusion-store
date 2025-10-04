import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { AppProvider } from "./context/productContext";
import CatalogPage from "./Pages/CatalogPage";
import BlogPage from "./Pages/BlogPage";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <AppProvider>
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
          <Footer />
        </Router>
      </CartProvider>
    </AppProvider>
  );
};

export default App;
