'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-drift">
          <Image
            src="/images/starfield.jpeg"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-void/60" />
        <div className="absolute bottom-0 h-48 bg-gradient-to-t from-void to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <div className="relative w-64 sm:w-72 md:w-80 mx-auto aspect-[3/4.5] rounded-sm overflow-hidden shadow-2xl shadow-nebula/10">
            <Image
              src="/images/viewport.png"
              alt="Launch Window Zero book cover"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 border border-white/10 rounded-sm" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-starlight mb-6"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body text-lg sm:text-xl text-starlight/60 tracking-wider mb-4 italic"
        >
          {hero.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-body text-base sm:text-lg text-starlight/70 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {hero.hook}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#signup"
            className="btn-glow inline-block px-8 py-3.5 bg-nebula/90 hover:bg-nebula text-white font-body text-sm tracking-widest uppercase rounded transition-all duration-300"
          >
            {hero.ctaPrimary}
          </Link>
          <Link
            href="/chapter-one"
            className="btn-glow inline-block px-8 py-3.5 border border-starlight/20 hover:border-starlight/40 text-starlight/70 hover:text-starlight font-body text-sm tracking-widest uppercase rounded transition-all duration-300"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-starlight/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
