import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white py-10">
      {/* ✅ Custom grid with wider first column */}
      <div className="w-full mx-auto  grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
        
     
        <div className="space-y-3 p-4 rounded-md">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Collusion Logo" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold tracking-wide">COLLUSION</h1>
          </div>
          <p className="text-gray-600 text-xl leading-relaxed">
            We believe that the beauty of fashion should <br /> be accessible to
            everyone — not just <br /> the privileged few.
          </p>
        </div>

   
        <div className="px-3">
          <h2 className="font-semibold text-lg mb-3 ">CATALOG</h2>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><Link to="/" className="hover:text-black transition">Home</Link></li>
            <li><Link to="/catalogpage" className="hover:text-black transition">Catalog</Link></li>
            <li><Link to="/about" className="hover:text-black transition">About Brand</Link></li>
            <li><Link to="/blog" className="hover:text-black transition">Blog</Link></li>
          </ul>
        </div>

    
        <div className="px-3">
          <h2 className="font-semibold text-lg mb-3">CONTACTS</h2>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><Link to="/contact" className="hover:text-black transition">Contact Us</Link></li>
            <li><Link to="/delivery" className="hover:text-black transition">Delivery</Link></li>
            <li><Link to="/faq" className="hover:text-black transition">FAQ</Link></li>
          </ul>
        </div>

        
        <div className="px-3">
          <h2 className="font-semibold text-lg mb-3">SOCIALS</h2>
          <div className="flex items-center gap-4 text-gray-700 text-sm">
            <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-400 rounded-full text-gray-700 hover:bg-black hover:text-white transition" aria-label="Website">LN</a>
            <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-400 rounded-full text-gray-700 hover:bg-black hover:text-white transition" aria-label="Instagram">IN</a>
            <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-400 rounded-full text-gray-700 hover:bg-black hover:text-white transition"
  aria-label="Facebook">FB</a>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Kumta, karnataka 581323
          </p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t pt-4 px-3 text-gray-500 text-sm bg-gray-50">
        © COLLUSION {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
