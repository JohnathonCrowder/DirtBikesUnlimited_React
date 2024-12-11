import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import contactHero from "../assets/images/contact-hero.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Basic Tune-Up",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      serviceType: "Basic Tune-Up",
      message: "",
    });
  };

  return (
    <>
      {/* Contact Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center bg-fixed text-white text-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${contactHero})`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-5xl md:text-6xl font-heading font-bold mb-4"
            data-aos="fade-up"
          >
            Contact Us
          </h1>
          <p
            className="text-xl md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We're here to answer your questions and get your bike running
            perfectly
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div data-aos="fade-right">
              <h3 className="text-3xl font-heading font-bold mb-6">
                Reach Out To Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-2xl text-accent mr-4 mt-1"></i>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Our Location</h4>
                    <p>
                      1876 N Glenstone Ave,
                      <br />
                      Springfield, MO 65803
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone text-2xl text-accent mr-4 mt-1"></i>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Phone Number</h4>
                    <p>(555) 123-4567</p>
                    <p>(555) 987-6543 (Emergency)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-envelope text-2xl text-accent mr-4 mt-1"></i>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Email Address
                    </h4>
                    <p>info@dirtbikesunlimited.com</p>
                    <p>repairs@dirtbikesunlimited.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-clock text-2xl text-accent mr-4 mt-1"></i>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Business Hours
                    </h4>
                    <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 4:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left">
              <h3 className="text-3xl font-heading font-bold mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="serviceType"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option>Basic Tune-Up</option>
                    <option>Engine Overhaul</option>
                    <option>Performance Upgrades</option>
                    <option>Repair & Restoration</option>
                    <option>Other (Please specify in message)</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your bike and how we can help..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3
            className="text-3xl font-heading font-bold text-center mb-8"
            data-aos="fade-up"
          >
            Find Us
          </h3>
          <div
            className="aspect-w-16 aspect-h-9"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.738173130894!2d-93.28501518439!3d37.23833797986025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf61f2db57c3c5%3A0x47d420da94442e5d!2s1876%20N%20Glenstone%20Ave%2C%20Springfield%2C%20MO%2065803!5e0!3m2!1sen!2sus!4v1652455159448!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dirt Bikes Unlimited Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
