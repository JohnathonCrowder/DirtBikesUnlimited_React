import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Import images
import heroDirtBike from "../assets/images/hero-dirt-bike.jpg";
import testimonialAvatar from "../assets/images/customer-avatar.jpg";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      icon: "fas fa-wrench",
      title: "Basic Tune-Up",
      description:
        "Keep your bike in top condition with our comprehensive tune-ups.",
      link: "/services",
    },
    {
      icon: "fas fa-cogs",
      title: "Engine Overhauls",
      description:
        "Complete engine rebuilds and repairs for all dirt bike models.",
      link: "/services",
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Performance Upgrades",
      description: "Custom enhancements to take your ride to the next level.",
      link: "/services",
    },
    {
      icon: "fas fa-tools",
      title: "Repair & Restoration",
      description:
        "From minor fixes to complete restorations, we've got you covered.",
      link: "/services",
    },
  ];

  const statistics = [
    { value: "25+", label: "Years Experience" },
    { value: "15,000+", label: "Bikes Repaired" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  const whyChooseUs = [
    {
      icon: "fas fa-certificate",
      title: "Certified Mechanics",
      description:
        "All our mechanics are certified and have over 10 years of experience.",
    },
    {
      icon: "fas fa-clock",
      title: "Quick Turnaround",
      description:
        "Most repairs completed within 24-48 hours. Get back on your bike fast!",
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Fair Pricing",
      description:
        "Transparent pricing, no hidden fees. We're always upfront about costs.",
    },
  ];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-fixed text-white text-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroDirtBike})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="hero-content">
            <h1
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
              data-aos="fade-up"
            >
              Expert Repairs for Your Dirt Bike Dreams
            </h1>
            <p
              className="text-xl md:text-2xl mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Professional service, lightning-fast turnaround, unbeatable
              expertise.
            </p>
            <div className="space-x-4" data-aos="fade-up" data-aos-delay="400">
              <Link
                to="/services"
                className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Banner */}
      <div className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <i className="fas fa-clock mr-2"></i>
            <span>Open 7 Days: 8am - 6pm</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-phone mr-2"></i>
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>1876 N Glenstone Ave, Springfield, MO</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Our Expert Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <i className={`${service.icon} text-5xl text-accent mb-4`}></i>
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="mb-4">{service.description}</p>
                <Link to={service.link} className="text-accent hover:underline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 flex flex-wrap justify-around text-center">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Why Choose DBU?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <i className={`${reason.icon} text-5xl text-accent mb-4`}></i>
                <h4 className="text-2xl font-heading font-semibold mb-4">
                  {reason.title}
                </h4>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            What Our Riders Say
          </h2>
          <Slider {...testimonialSettings}>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <p className="text-xl italic mb-4">
                "These guys treat every bike like it's their own. I won't trust
                my KTM with anyone else. Seriously impressed!"
              </p>
              <strong className="text-lg">
                — Mike Johnson, Pro-Amateur Rider
              </strong>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
              <p className="text-xl italic mb-4">
                "Professional service from start to finish. They brought my
                vintage Honda back to life!"
              </p>
              <strong className="text-lg">
                — Sarah Lee, Vintage Bike Collector
              </strong>
            </div>
          </Slider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-heading font-bold mb-4"
            data-aos="fade-up"
          >
            Ready to Experience the DBU Difference?
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Schedule your service today and see why we're the most trusted name
            in dirt bike repair!
          </p>
          <Link
            to="/contact"
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Book Your Service
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
