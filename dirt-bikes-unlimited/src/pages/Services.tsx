import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import servicesHero from "../assets/images/hero-dirt-bike.jpg";
import customerAvatar from "../assets/images/customer-avatar.jpg";
import product1 from "../assets/images/shop/product1.jpg";
import product2 from "../assets/images/shop/product2.jpg";
import product3 from "../assets/images/shop/product3.jpg";

const Services: React.FC = () => {
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
        "Keep your bike running smoothly with our thorough tune-up service. Includes oil change, filter replacement, and essential adjustments.",
      features: [
        "Oil & Filter Change",
        "Brake Inspection",
        "Tire Pressure Check",
      ],
      link: "#",
    },
    {
      icon: "fas fa-cogs",
      title: "Engine Overhauls",
      description:
        "From minor repairs to complete rebuilds, our certified mechanics will breathe new life into your engine with precision and care.",
      features: [
        "Cylinder Reconditioning",
        "Crankshaft Repair",
        "Valve Adjustment",
      ],
      link: "#",
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Performance Upgrades",
      description:
        "Take your ride to the next level with our custom performance enhancements. Boost power, improve handling, and dominate the track.",
      features: ["Engine Tuning", "Exhaust Upgrades", "Suspension Mods"],
      link: "#",
    },
  ];

  const serviceProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We discuss your bike's needs and your performance goals.",
    },
    {
      step: 2,
      title: "Comprehensive Inspection",
      description:
        "Our experts thoroughly examine your bike, identifying any issues.",
    },
    {
      step: 3,
      title: "Detailed Quote",
      description:
        "We provide a transparent, itemized quote for all required services.",
    },
    {
      step: 4,
      title: "Expert Service",
      description:
        "Our skilled mechanics perform all necessary work with precision.",
    },
    {
      step: 5,
      title: "Quality Assurance",
      description:
        "We rigorously test to ensure everything is perfect before delivery.",
    },
  ];

  const pricingPlans = [
    {
      title: "Basic Tune-Up",
      price: "From $99",
      features: ["Oil Change", "Filter Replacement", "Basic Adjustments"],
    },
    {
      title: "Engine Rebuild",
      price: "From $599",
      features: [
        "Complete Teardown",
        "Parts Replacement",
        "Reassembly & Testing",
      ],
    },
    {
      title: "Performance Package",
      price: "From $299",
      features: ["Engine Tuning", "Exhaust Upgrade", "Suspension Adjustment"],
    },
    {
      title: "Full Restoration",
      price: "Custom Quote",
      features: ["Frame Repair", "Engine Rebuild", "Custom Paint Job"],
    },
  ];

  const productSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const featuredProducts = [
    { name: "Pro Series X2 Handlebars", price: "$129.99", image: product1 },
    { name: "DirtMaster H7 Helmet", price: "$299.99", image: product2 },
    { name: "SuperGrip Off-Road Tires", price: "$89.99 each", image: product3 },
  ];

  return (
    <>
      {/* Services Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center bg-fixed text-white flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${servicesHero})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-5xl md:text-6xl font-heading font-bold mb-4"
            data-aos="fade-up"
          >
            Expert Dirt Bike Services
          </h1>
          <p
            className="text-xl md:text-2xl mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From tune-ups to full rebuilds, we keep your bike at peak
            performance
          </p>
          <a
            href="#services-overview"
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl text-accent mb-4">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="mb-4">{service.description}</p>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
                <a href={service.link} className="text-accent hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Our Proven Service Process
          </h2>
          <div className="flex flex-wrap justify-between">
            {serviceProcess.map((step, index) => (
              <div
                key={index}
                className="w-full md:w-1/5 text-center mb-8"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-center"
            data-aos="fade-up"
          >
            <img
              src={customerAvatar}
              alt="Happy Customer"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <blockquote className="text-xl italic mb-4">
              "The team at Dirt Bikes Unlimited are true professionals. They
              transformed my old XR400 into a beast! Couldn't be happier with
              the service and results."
            </blockquote>
            <cite className="text-lg font-semibold">
              - Alex Rider, Amateur Motocross Racer
            </cite>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Transparent Pricing
          </h2>
          <p className="text-center text-xl mb-12">
            We believe in fair and upfront pricing. Here are our starting prices
            for common services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <h4 className="text-2xl font-semibold mb-2">{plan.title}</h4>
                <p className="text-3xl font-bold text-accent mb-4">
                  {plan.price}
                </p>
                <ul className="text-left mb-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="mb-2">
                      <i className="fas fa-check text-accent mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            * Prices may vary depending on bike model and specific requirements.
            We always provide a detailed quote before beginning any work.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-heading font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Featured Products
          </h2>
          <div data-aos="fade-up" data-aos-delay="200">
            <Slider {...productSliderSettings}>
              {featuredProducts.map((product, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-accent font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Ready to Elevate Your Ride?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our expert team is standing by to take your dirt bike to the next
            level.
          </p>
          <a
            href="/contact"
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
          >
            Book Your Service Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
