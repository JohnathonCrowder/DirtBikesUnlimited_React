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
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

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
        inStock: true,
      },
      {
        id: 2,
        name: "DirtMaster H7 Helmet",
        category: "Gear",
        price: 299.99,
        image: product2,
        description:
          "DOT certified helmet with advanced ventilation and comfort padding.",
        inStock: true,
      },
      {
        id: 3,
        name: "SuperGrip Off-Road Tires",
        category: "Parts",
        price: 89.99,
        image: product3,
        description:
          "All-terrain tires designed for maximum traction in muddy conditions.",
        inStock: false,
      },
      {
        id: 4,
        name: "RacePro Jersey",
        category: "Gear",
        price: 59.99,
        image: product4,
        description:
          "Lightweight, breathable jersey for optimal comfort during rides.",
        inStock: true,
      },
      {
        id: 5,
        name: "ShockMaster Suspension Kit",
        category: "Parts",
        price: 499.99,
        image: product5,
        description:
          "High-performance suspension kit for improved handling and comfort.",
        inStock: true,
      },
      {
        id: 6,
        name: "MotoTech Toolkit",
        category: "Accessories",
        price: 79.99,
        image: product6,
        description:
          "Comprehensive toolkit for on-the-go repairs and maintenance.",
        inStock: true,
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

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
    setIsCartOpen(false);
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
                    {product.inStock ? (
                      <button
                        className="bg-accent text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-colors duration-300"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <span className="text-red-500 font-semibold">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Button */}
      <button
        className="fixed bottom-4 right-4 bg-accent text-white p-4 rounded-full shadow-lg"
        onClick={() => setIsCartOpen(true)}
      >
        <i className="fas fa-shopping-cart"></i>
        <span className="ml-2">
          {cart.reduce((total, item) => total + item.quantity, 0)}
        </span>
      </button>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-grow ml-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-l"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="px-4 py-1 bg-gray-100">
                        {item.quantity}
                      </span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded-r"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="ml-4 text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))}
                <div className="mt-8">
                  <p className="text-xl font-bold">
                    Total: ${getTotalPrice().toFixed(2)}
                  </p>
                  <button
                    className="mt-4 w-full bg-accent text-white py-2 rounded-lg hover:bg-opacity-80 transition-colors duration-300"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
            <button
              className="mt-4 text-gray-600 hover:text-gray-800"
              onClick={() => setIsCartOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-1">
                  Shipping Address
                </label>
                <textarea
                  id="address"
                  className="w-full px-4 py-2 border rounded"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="card" className="block mb-1">
                  Credit Card Number
                </label>
                <input
                  type="text"
                  id="card"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <p className="text-xl font-bold">
                Total: ${getTotalPrice().toFixed(2)}
              </p>
              <button
                type="submit"
                className="w-full bg-accent text-white py-2 rounded-lg hover:bg-opacity-80 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    "Thank you for your purchase! This is a demo, so no actual transaction has occurred."
                  );
                  setIsCheckoutOpen(false);
                  setCart([]);
                }}
              >
                Complete Purchase
              </button>
            </form>
            <button
              className="mt-4 text-gray-600 hover:text-gray-800"
              onClick={() => setIsCheckoutOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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
