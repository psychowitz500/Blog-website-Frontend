
import React from "react";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Products from "./components/Products.jsx";
import Testimonials from "./components/Testimonials.jsx";
import BigCTA from "./components/BigCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="relative">
      {/* background grid & subtle radial mask */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-grid bg-[size:18px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,white,transparent_70%)]" />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <BigCTA />
      <Footer />
    </main>
  );
}
