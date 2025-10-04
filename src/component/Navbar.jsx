import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Logo from '../assets/Logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCartContext();

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
     
      <div className="bg-lime-300 text-black text-sm font-semibold overflow-hidden border-b">
        <div className="py-1 whitespace-nowrap animate-pulse text-center">
          +++ OPEN FOR NEW COLLECTION +++ OPEN FOR NEW COLLECTION +++
          OPEN FOR NEW COLLECTION +++
        </div>
      </div>

     
      <nav className="h-16 flex items-center justify-between px-4 md:px-10">
        {/* Logo */}
        <div className="font-bold text-lg tracking-wide flex items-center">
          <img src={Logo} alt="Logo" className="h-10"/>
          <Link to="/">COLLUSION</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/catalogpage">CATALOG</Link></li>
          <li><Link to="/about">ABOUT BRAND</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
    
          <Link to="/cart" className="relative flex items-center gap-2 text-sm font-medium">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/catalogpage"
            className="hidden md:block bg-black text-white px-4 py-2 font-semibold hover:bg-gray-800 transition"
          >
            SHOP ALL NEW
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* 🔸 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md animate-slide-down">
          <ul className="flex flex-col space-y-4 p-6 font-medium">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
            </li>
            <li>
              <Link to="/catalogpage" onClick={() => setIsOpen(false)}>CATALOG</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT BRAND</Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setIsOpen(false)}>BLOG</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
            </li>
            <li>
              <Link
                to="/catalogpage"
                className="block bg-black text-white py-2 font-semibold text-center rounded-md hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                SHOP ALL NEW
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
