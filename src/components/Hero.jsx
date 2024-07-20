
import React from "react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-sm text-primary-300 ring-1 ring-primary/30">
              Strive Protein · New
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Fuel Your Fitness.
              <br />
              <span className="text-primary-400">Power Your Performance.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Premium protein supplements designed to help you build strength, recover faster,
              and stay at your peak every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-2xl bg-primary-600 px-5 py-3 font-medium shadow-glow transition hover:translate-y-[-1px] hover:shadow-lg"
              >
                Shop Now
              </a>
              <a
                href="#features"
                className="rounded-2xl border border-white/15 px-5 py-3 font-medium transition hover:bg-white/5"
              >
                Explore Products
              </a>
            </div>
            <div className="mt-6 text-sm text-white/60">
              Free shipping on orders over ₹999 · 30‑day satisfaction guarantee
            </div>
          </div>

          <div className="relative">
            <div className="gradient-border p-2">
              <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
                <img
                  src="/src/assets/jar-placeholder.svg"
                  alt="Strive Protein Jar"
                  className="mx-auto h-80 w-auto"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full bg-primary-600/30 blur-3xl md:block" />
            <div className="absolute -top-6 -right-8 hidden h-24 w-24 rounded-full bg-accent/30 blur-3xl md:block" />
          </div>
        </div>
      </div>
    </header>
  );
}
