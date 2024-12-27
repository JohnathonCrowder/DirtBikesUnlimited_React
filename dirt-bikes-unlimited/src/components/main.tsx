import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initScrollAnimations();
  initSmoothScroll();
  initParallaxEffects();
  initServiceCardHover();
  animateHeroContent();
  initMobileMenu();
});

function initNavbarScroll() {
  const navbar = document.querySelector<HTMLElement>(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
}

function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll<HTMLElement>(".parallax");
  parallaxElements.forEach((el) => {
    const speed = parseFloat(el.dataset.speed || "0.5");
    gsap.to(el, {
      backgroundPositionY: () => window.innerHeight * speed * -1,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

function initScrollAnimations() {
  gsap.utils.toArray<HTMLElement>(".fade-in").forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onComplete: () => {
        gsap.set(element, { opacity: 1, y: 0 });
      },
    });
  });

  const serviceCards = gsap.utils.toArray<HTMLElement>(".service-card");
  gsap.from(serviceCards, {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".service-grid",
      start: "top 75%",
    },
    onComplete: () => {
      gsap.set(serviceCards, { opacity: 1, y: 0 });
    },
  });
}

function initSmoothScroll() {
  const links = document.querySelectorAll<HTMLAnchorElement>("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      if (targetId) {
        gsap.to(window, {
          duration: 1,
          scrollTo: targetId,
          ease: "power2.inOut",
        });
      }
    });
  });
}

function initServiceCardHover() {
  const cards = document.querySelectorAll<HTMLElement>(".service-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        y: -10,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      });
    });
  });
}

function initMobileMenu() {
  const mobileMenuToggle = document.querySelector<HTMLElement>(
    ".mobile-menu-toggle"
  );
  const navLinks = document.querySelector<HTMLElement>(".nav-links");

  if (!mobileMenuToggle || !navLinks) return;

  mobileMenuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuToggle.classList.toggle("active");
  });
}

function animateHeroContent() {
  const heroContent = document.querySelector<HTMLElement>(".hero-content");
  if (!heroContent) return;

  const children = Array.from(heroContent.children);
  gsap.set(children, { opacity: 0, y: 50 });
  gsap.to(children, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.2,
    ease: "power2.out",
  });
}
