
import React from "react";

const quotes = [
  { name: "Rohan", role: "Gym Trainer", text: "Tastes amazing and helped me gain lean muscle in just 8 weeks!" },
  { name: "Priya", role: "Athlete", text: "Finally a supplement that doesn’t upset my stomach. Love the vanilla!" },
  { name: "Arjun", role: "Fitness Enthusiast", text: "Affordable, clean ingredients, and noticeable results." },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Trusted by Fitness Enthusiasts</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <figure key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <blockquote className="text-white/85">“{q.text}”</blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              — {q.name}, {q.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
