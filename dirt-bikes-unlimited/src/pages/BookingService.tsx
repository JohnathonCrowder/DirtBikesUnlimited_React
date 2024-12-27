import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import hero image
import bookingHero from "../assets/images/hero-dirt-bike.jpg";

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  bikeModel: string;
  bikeYear: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  description: string;
}

const BookingService: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    bikeModel: "",
    bikeYear: "",
    serviceType: "Basic Tune-Up",
    preferredDate: "",
    preferredTime: "",
    description: "",
  });

  const serviceTypes = [
    "Basic Tune-Up",
    "Oil Change",
    "Engine Rebuild",
    "Suspension Service",
    "Tire Change",
    "Performance Upgrades",
    "Brake Service",
    "General Repair",
    "Custom Work",
  ];

  const availableTimeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(formData);
    // Reset form
    alert("Booking request submitted successfully! We'll contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      bikeModel: "",
      bikeYear: "",
      serviceType: "Basic Tune-Up",
      preferredDate: "",
      preferredTime: "",
      description: "",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center bg-fixed text-white text-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bookingHero})`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-5xl md:text-6xl font-heading font-bold mb-4"
            data-aos="fade-up"
          >
            Book Your Service
          </h1>
          <p
            className="text-xl md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Schedule your maintenance or repair with our expert team
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Bike Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  Bike Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="bikeModel"
                    >
                      Bike Model *
                    </label>
                    <input
                      type="text"
                      id="bikeModel"
                      name="bikeModel"
                      required
                      value={formData.bikeModel}
                      onChange={handleChange}
                      placeholder="e.g., Honda CRF450R"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="bikeYear"
                    >
                      Year *
                    </label>
                    <input
                      type="text"
                      id="bikeYear"
                      name="bikeYear"
                      required
                      value={formData.bikeYear}
                      onChange={handleChange}
                      placeholder="e.g., 2022"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Service Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  Service Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="serviceType"
                    >
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="preferredDate"
                    >
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="preferredTime"
                    >
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select a time</option>
                      {availableTimeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="description"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please describe any specific issues or concerns..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
                >
                  Book Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="fas fa-clock text-4xl text-accent mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Service Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="text-center">
              <i className="fas fa-phone text-4xl text-accent mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Emergency Service</h3>
              <p>24/7 Emergency Line:</p>
              <p>(555) 987-6543</p>
            </div>
            <div className="text-center">
              <i className="fas fa-tools text-4xl text-accent mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Express Service</h3>
              <p>Same-day service available</p>
              <p>for minor repairs and maintenance</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingService;
