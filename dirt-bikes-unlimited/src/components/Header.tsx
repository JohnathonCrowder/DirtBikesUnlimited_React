import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/dbu-logo.png";
import heroImage from "../assets/images/hero-dirt-bike.jpg";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-primary hover:text-accent transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-primary hover:text-accent transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/shop"
            className="text-primary hover:text-accent transition-colors duration-300"
          >
            Shop
          </Link>
        </div>

        <div className="flex-shrink-0">
          <Link to="/" className="logo">
            <img
              src={logo}
              alt="Dirt Bikes Unlimited Logo"
              className="h-20 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            to="/about"
            className="text-primary hover:text-accent transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-primary hover:text-accent transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            to="/booking"
            className="bg-accent text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-colors duration-300"
          >
            Book Service
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
