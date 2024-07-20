
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} Strive Protein. Stronger Every Day.
          </div>
          <nav className="flex gap-5 text-sm text-white/70">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#products" className="hover:text-white">Shop</a>
            <a href="#features" className="hover:text-white">Why Us</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
