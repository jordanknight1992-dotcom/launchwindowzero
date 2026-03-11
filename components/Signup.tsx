'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { siteContent } from '@/content/site';

export default function Signup() {
  const { signup } = siteContent;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="signup" className="relative py-32 sm:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl sm:text-4xl font-light tracking-wide text-starlight/90 mb-4">
            {signup.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-body text-sm sm:text-base text-starlight/65 mb-10">
            {signup.subheading}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8"
            >
              <p className="font-display text-xl text-nebula-glow mb-2">
                Transmission received.
              </p>
              <p className="font-body text-sm text-starlight/65">
                You will hear from us when the window opens.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder={signup.namePlaceholder}
                required
                className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded text-starlight/80 font-body text-sm tracking-wider placeholder:text-starlight/70 focus:outline-none focus:border-nebula/40 transition-colors duration-300"
              />
              <input
                type="email"
                placeholder={signup.emailPlaceholder}
                required
                className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 rounded text-starlight/80 font-body text-sm tracking-wider placeholder:text-starlight/70 focus:outline-none focus:border-nebula/40 transition-colors duration-300"
              />
              <button
                type="submit"
                className="btn-glow w-full px-8 py-3.5 bg-nebula/80 hover:bg-nebula text-white font-body text-sm tracking-widest uppercase rounded transition-all duration-300"
              >
                {signup.button}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
