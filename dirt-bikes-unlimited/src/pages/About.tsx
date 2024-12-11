import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import aboutHero from "../assets/images/about-hero.jpg";
import shopFront from "../assets/images/shop-front.jpg";
import johnRider from "../assets/images/john-rider.jpg";
import sarahJohnson from "../assets/images/sarah-johnson.jpg";
import mikeThompson from "../assets/images/mike-thompson.jpg";
import lisaChen from "../assets/images/lisa-chen.jpg";
import certHonda from "../assets/images/cert-honda.png";
import certYamaha from "../assets/images/cert-yamaha.png";
import certKtm from "../assets/images/cert-ktm.png";
import certSuzuki from "../assets/images/cert-suzuki.png";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamMembers = [
    { name: "John Rider", role: "Founder & Lead Mechanic", image: johnRider },
    {
      name: "Sarah Johnson",
      role: "Suspension Specialist",
      image: sarahJohnson,
    },
    {
      name: "Mike Thompson",
      role: "Engine Rebuild Expert",
      image: mikeThompson,
    },
    { name: "Lisa Chen", role: "Customer Service Manager", image: lisaChen },
  ];

  const certifications = [
    { name: "Honda Certified", image: certHonda },
    { name: "Yamaha Certified", image: certYamaha },
    { name: "KTM Certified", image: certKtm },
    { name: "Suzuki Certified", image: certSuzuki },
  ];

  const coreValues = [
    {
      icon: "fas fa-tools",
      title: "Expertise",
      description:
        "We continuously educate ourselves on the latest techniques and technologies to provide the best service possible.",
    },
    {
      icon: "fas fa-handshake",
      title: "Integrity",
      description:
        "We believe in honest, transparent business practices and always put our customers' needs first.",
    },
    {
      icon: "fas fa-users",
      title: "Community",
      description:
        "We foster a welcoming environment for all riders, from beginners to experts.",
    },
    {
      icon: "fas fa-medal",
      title: "Quality",
      description:
        "We use only the best parts and techniques to ensure your bike performs at its best.",
    },
  ];

  return (
    <>
      {/* About Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center bg-fixed text-white text-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${aboutHero})`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1
            className="text-5xl md:text-6xl font-heading font-bold mb-4"
            data-aos="fade-up"
          >
            Our Story
          </h1>
          <p
            className="text-xl md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Passionate about dirt bikes since 1998
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <h2 className="text-4xl font-heading font-bold mb-6">Who We Are</h2>
            <p className="mb-4">
              Dirt Bikes Unlimited is more than just a repair shop - we're a
              community of riders, racers, and enthusiasts dedicated to the
              world of off-road motorcycling. Founded in 1998 by John Rider, our
              shop has grown from a small garage operation to Springfield's
              premier destination for dirt bike sales, service, and
              customization.
            </p>
            <p>
              With over two decades of experience, we've built a reputation for
              excellence, integrity, and unparalleled expertise in dirt bike
              mechanics. Whether you're a weekend trail rider or a professional
              motocross racer, we have the knowledge and skills to keep your
              bike performing at its peak.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <img
              src={shopFront}
              alt="Dirt Bikes Unlimited Shop Front"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-heading font-bold text-center mb-8"
            data-aos="fade-up"
          >
            Our Mission
          </h2>
          <p
            className="text-xl text-center max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At Dirt Bikes Unlimited, our mission is to provide top-quality
            service, expert advice, and a welcoming community for dirt bike
            enthusiasts of all levels. We strive to keep you riding safely,
            performing optimally, and having the time of your life on two
            wheels.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-heading font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <i className={`${value.icon} text-5xl text-accent mb-4`}></i>
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  {value.title}
                </h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-heading font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Meet Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-heading font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Partnerships */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-heading font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Our Certifications & Partnerships
          </h2>
          <div
            className="flex flex-wrap justify-center items-center gap-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {certifications.map((cert, index) => (
              <img
                key={index}
                src={cert.image}
                alt={cert.name}
                className="h-16 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
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
            Let our expert team take care of your dirt bike needs.
          </p>
          <a
            href="/contact"
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
