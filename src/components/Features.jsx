
import React from "react";

const items = [
  {
    title: "High-Quality Ingredients",
    desc: "No fillers—just pure whey and essential nutrients for clean, efficient fuel.",
  },
  {
    title: "Faster Recovery",
    desc: "Scientifically formulated to support muscle repair after intense workouts.",
  },
  {
    title: "Great Taste",
    desc: "Delicious flavors you’ll actually look forward to—no chalky aftertaste.",
  },
  {
    title: "Trusted by Athletes",
    desc: "Backed by coaches and fitness professionals across the country.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        Why Choose <span className="text-primary-400">Strive Protein?</span>
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
        Thoughtfully crafted supplements to help you train harder, recover better, and perform longer.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:bg-white/[0.06]">
            <div className="text-lg font-semibold">{it.title}</div>
            <p className="mt-2 text-sm text-white/70">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
