
import React from "react";

export default function BigCTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="gradient-border p-0.5 rounded-2xl">
        <div className="rounded-2xl bg-white/[0.03] p-10 text-center backdrop-blur">
          <h3 className="text-2xl font-bold md:text-3xl">Start Your Fitness Journey Today</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            Choose the protein that works as hard as you do. Free shaker on your first order.
          </p>
          <a href="#products" className="mt-6 inline-block rounded-2xl bg-primary-600 px-6 py-3 font-semibold shadow-glow transition hover:translate-y-[-1px]">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
