// components/HeroSection.tsx
import React, { JSX } from "react";

export default function HeroSection(): JSX.Element {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-white">Supa</span>
          <span className="text-amber-500">Menu</span>
        </h1>
        <p className="mt-8">
          <h1 className="font-bold text-4xl mb-2">Register your restaurant on SupaMenu </h1>
          <p className="text-2xl mb-2 italic">for free and get more revenue!</p>
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          
          <button
            className="px-6 py-3 border-2 bg-amber-500 hover:bg-transparent border-amber-500 rounded-md font-semibold transition duration-300"
            type="button"
          >
            Register your Restaurant
          </button>
          <button
            className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition duration-300"
            type="button"
          >
            Restaurant already registered? Sign in
          </button>
        </div>
      </div>
    </section>
  );
}
