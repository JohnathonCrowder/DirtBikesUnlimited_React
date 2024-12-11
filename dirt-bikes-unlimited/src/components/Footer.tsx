import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Dirt Bikes Unlimited
          </h3>
          <p>Expert motorcycle repair and maintenance since 1998.</p>
        </div>
        <div>
          <h4 className="text-xl font-heading font-semibold mb-4">
            Quick Links
          </h4>
          <Link
            to="/services"
            className="block mb-2 hover:text-accent transition-colors duration-300"
          >
            Our Services
          </Link>
          <Link
            to="/about"
            className="block mb-2 hover:text-accent transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block mb-2 hover:text-accent transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
        <div>
          <h4 className="text-xl font-heading font-semibold mb-4">
            Contact Us
          </h4>
          <p className="mb-2">
            <i className="fas fa-map-marker-alt mr-2"></i> 1876 N Glenstone Ave,
            Springfield, MO 65803
          </p>
          <p className="mb-2">
            <i className="fas fa-phone mr-2"></i> (555) 123-4567
          </p>
          <p className="mb-2">
            <i className="fas fa-envelope mr-2"></i> info@dirtbikesunlimited.com
          </p>
        </div>
      </div>
      <div className="bg-secondary mt-8 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2023 Dirt Bikes Unlimited. All rights reserved.</p>
          <div className="space-x-4">
            <a
              href="#"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
