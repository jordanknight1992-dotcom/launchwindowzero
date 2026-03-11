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
  return (
    <main>
      <Starfield />
      <Navigation />

      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
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

      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          {sections.map((section, index) => (
            <FadeIn key={section.href} delay={index * 0.08}>
              <Link href={section.href} className="block group">
                <motion.div
                  whileHover={{
                    x: 8,
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative p-6 sm:p-8 border border-white/5 rounded-sm bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-[11px] text-nebula/40 tracking-[0.2em] pt-1 flex-shrink-0">
                      {section.label}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-light text-starlight/80 group-hover:text-starlight transition-colors duration-300 mb-2">
                        {section.title}
                      </h2>
                      <p className="font-body text-sm text-starlight/30 leading-relaxed">
                        {section.desc}
                      </p>
                    </div>
                    <span className="font-mono text-starlight/15 group-hover:text-nebula/50 transition-colors ml-auto flex-shrink-0 pt-1">
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
