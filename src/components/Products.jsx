
import React from "react";

const products = [
  { name: "Whey Protein (Chocolate)", price: "₹2,499", info: "24g protein · 5.5g BCAA · 0 added sugar" },
  { name: "Plant Protein (Vegan Blend)", price: "₹2,199", info: "21g protein · pea + brown rice · soy-free" },
  { name: "Mass Gainer Pro", price: "₹2,999", info: "50g protein · high-calorie clean carbs" },
];

export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Our Bestsellers</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-white/70">
        Clean labels, great taste, and results you can feel.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="aspect-[4/3] w-full rounded-xl bg-white/5">
              <img src="/src/assets/jar-mini.svg" alt={p.name} className="mx-auto h-full object-contain p-6" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="text-sm text-white/60">{p.info}</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">{p.price}</div>
                <a href="#cta" className="mt-2 inline-block rounded-xl bg-primary-600 px-3 py-2 text-sm font-medium">Add to Cart</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
