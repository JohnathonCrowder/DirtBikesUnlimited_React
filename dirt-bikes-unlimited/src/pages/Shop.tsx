import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import shopHero from "../assets/images/shop-hero.jpg";
import product1 from "../assets/images/shop/product1.jpg";
import product2 from "../assets/images/shop/product2.jpg";
import product3 from "../assets/images/shop/product3.jpg";
import product4 from "../assets/images/shop/product4.jpg";
import product5 from "../assets/images/shop/product5.jpg";
import product6 from "../assets/images/shop/product6.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulating fetching products from an API
    const fetchedProducts: Product[] = [
      {
        id: 1,
        name: "Pro Series X2 Handlebars",
        category: "Parts",
        price: 129.99,
        image: product1,
        description:
          "High-quality aluminum handlebars for improved control and comfort.",
      },
      {
        id: 2,
        name: "DirtMaster H7 Helmet",
        category: "Gear",
        price: 299.99,
        image: product2,
        description:
          "DOT certified helmet with advanced ventilation and comfort padding.",
      },
      {
        id: 3,
        name: "SuperGrip Off-Road Tires",
        category: "Parts",
        price: 89.99,
        image: product3,
        description:
          "All-terrain tires designed for maximum traction in muddy conditions.",
      },
      {
        id: 4,
        name: "RacePro Jersey",
        category: "Gear",
        price: 59.99,
        image: product4,
        description:
          "Lightweight, breathable jersey for optimal comfort during rides.",
      },
      {
        id: 5,
        name: "ShockMaster Suspension Kit",
        category: "Parts",
        price: 499.99,
        image: product5,
        description:
          "High-performance suspension kit for improved handling and comfort.",
      },
      {
        id: 6,
        name: "MotoTech Toolkit",
        category: "Accessories",
        price: 79.99,
        image: product6,
        description:
          "Comprehensive toolkit for on-the-go repairs and maintenance.",
      },
    ];

    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
  }, []);

  const filterProducts = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const categories = ["All", "Parts", "Gear", "Accessories"];

  return (
    <>
      {/* Shop Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center bg-fixed text-white text-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${shopHero})`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-5xl md:text-6xl font-heading font-bold mb-4"
            data-aos="fade-up"
          >
            Shop Dirt Bike Essentials
          </h1>
          <p
            className="text-xl md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Quality parts, gear, and accessories for your ride
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div className="flex space-x-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full ${
                      activeCategory === category
                        ? "bg-accent text-white"
                        : "bg-white text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => filterProducts(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                data-aos="fade-up"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-accent">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="bg-accent text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8">
            We stock a wide range of products. Contact us for special orders or
            inquiries.
          </p>
          <a
            href="/contact"
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Shop;
