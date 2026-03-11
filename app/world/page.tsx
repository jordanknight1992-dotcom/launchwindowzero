'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Starfield from '@/components/Starfield';
import FadeIn from '@/components/FadeIn';
import Transmit from '@/components/Transmit';
import Footer from '@/components/Footer';
import { loreContent } from '@/content/lore';

const sections = [
  {
    href: '/world/collapse',
    label: '01',
    title: 'Humanity After Collapse',
    desc: 'How environmental collapse forced a species to rebuild civilization beneath engineered skies.',
  },
  {
    href: '/world/havens',
    label: '02',
    title: 'The Haven Network',
    desc: 'Fourteen biospheres. Twelve on Earth, two beyond. A distributed civilization connected through infrastructure and will.',
  },
  {
    href: '/world/settlements',
    label: '03',
    title: 'Off-World Settlements',
    desc: 'The first permanent steps of a species leaving its home planet. Selene. Ares Reach.',
  },
  {
    href: '/world/coalition',
    label: '04',
    title: 'The Coalition',
    desc: 'The governing framework holding the Haven Network together. Stability maintained through energy, mobility, and information.',
  },
  {
    href: '/world/phenomena',
    label: '05',
    title: 'Known Phenomena',
    desc: 'Space is not empty. It is structured. Early exploration has revealed patterns humanity does not yet understand.',
  },
];

export default function WorldPage() {
  const { havens, settlements } = loreContent;

  return (
    <main>
      <Starfield />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-mono text-[11px] tracking-[0.3em] text-nebula/50 uppercase mb-4">
              Coalition Archive
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-starlight/90 mb-6">
              The Haven Network
            </h1>
            <div className="section-line mb-8" />
            <p className="font-body text-base sm:text-lg text-starlight/40 leading-relaxed max-w-2xl mx-auto">
              A public archive documenting the survival and reconstruction of
              human civilization. Twelve sealed biospheres on Earth. Two
              settlements beyond. One species learning what it means to live
              beneath skies it built.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Haven quick-access grid */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-nebula/40 uppercase">
                Haven Registry
              </p>
              <Link
                href="/world/havens"
                className="font-mono text-[10px] tracking-[0.15em] text-starlight/20 hover:text-nebula/50 transition-colors uppercase"
              >
                View Full Profiles &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {havens.map((haven, index) => (
              <FadeIn key={haven.id} delay={index * 0.03}>
                <Link href="/world/havens" className="block group">
                  <motion.div
                    whileHover={{
                      borderColor: 'rgba(59, 130, 246, 0.25)',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    }}
                    transition={{ duration: 0.2 }}
                    className="p-4 border border-white/5 rounded-sm bg-white/[0.01] h-full"
                  >
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-mono text-[9px] tracking-[0.15em] text-nebula/50">
                        {haven.id}
                      </span>
                    </div>
                    <p className="font-display text-sm font-light text-starlight/75 group-hover:text-starlight/90 transition-colors mb-1">
                      {haven.name}
                    </p>
                    <p className="font-mono text-[8px] tracking-[0.1em] text-starlight/20 uppercase leading-tight">
                      {haven.specialization}
                    </p>
                    <p className="font-body text-[10px] text-starlight/15 mt-2">
                      {haven.location}
                    </p>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
            {/* Off-world cards */}
            {settlements.locations.map((loc, index) => (
              <FadeIn key={loc.designation} delay={(havens.length + index) * 0.03}>
                <Link href="/world/settlements" className="block group">
                  <motion.div
                    whileHover={{
                      borderColor: 'rgba(59, 130, 246, 0.25)',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    }}
                    transition={{ duration: 0.2 }}
                    className="p-4 border border-white/5 border-l-2 border-l-nebula/10 rounded-sm bg-white/[0.01] h-full"
                  >
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-mono text-[9px] tracking-[0.15em] text-nebula/50">
                        {loc.designation}
                      </span>
                      <span className="font-mono text-[7px] tracking-[0.15em] text-amber-400/25 uppercase">
                        Off-World
                      </span>
                    </div>
                    <p className="font-display text-sm font-light text-starlight/75 group-hover:text-starlight/90 transition-colors mb-1">
                      {loc.name}
                    </p>
                    <p className="font-mono text-[8px] tracking-[0.1em] text-starlight/20 uppercase leading-tight">
                      {loc.body}
                    </p>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <FadeIn>
        <div className="max-w-3xl mx-auto px-6">
          <div className="section-line mb-4" />
          <p className="font-mono text-[10px] tracking-[0.3em] text-nebula/30 uppercase text-center mb-12">
            Explore the Archive
          </p>
        </div>
      </FadeIn>

      {/* Section navigation links */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          {sections.map((section, index) => (
            <FadeIn key={section.href} delay={index * 0.06}>
              <Link href={section.href} className="block group">
                <motion.div
                  whileHover={{
                    x: 6,
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative p-5 sm:p-6 border border-white/5 rounded-sm bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[11px] text-nebula/40 tracking-[0.2em] flex-shrink-0">
                      {section.label}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-display text-xl sm:text-2xl font-light text-starlight/80 group-hover:text-starlight transition-colors duration-300 mb-1">
                        {section.title}
                      </h2>
                      <p className="font-body text-sm text-starlight/25 leading-relaxed">
                        {section.desc}
                      </p>
                    </div>
                    <span className="font-mono text-starlight/15 group-hover:text-nebula/50 transition-colors flex-shrink-0">
                      &rarr;
                    </span>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <Transmit />
      <Footer />
    </main>
  );
}
