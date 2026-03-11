'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Navigation from './Navigation';
import Starfield from './Starfield';
import FadeIn from './FadeIn';
import Footer from './Footer';

const loreNav = [
  { href: '/world/collapse', label: 'Collapse' },
  { href: '/world/havens', label: 'Havens' },
  { href: '/world/settlements', label: 'Settlements' },
  { href: '/world/coalition', label: 'Coalition' },
  { href: '/world/phenomena', label: 'Phenomena' },
];

interface LorePageProps {
  label: string;
  title: string;
  lead?: string;
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
}

export default function LorePage({
  label,
  title,
  lead,
  children,
  backHref = '/world',
  backLabel = 'Archive Index',
}: LorePageProps) {
  const pathname = usePathname();
  const currentIndex = loreNav.findIndex((n) => n.href === pathname);
  const prevSection = currentIndex > 0 ? loreNav[currentIndex - 1] : null;
  const nextSection =
    currentIndex < loreNav.length - 1 ? loreNav[currentIndex + 1] : null;

  return (
    <main>
      <Starfield />
      <Navigation />

      <section className="pt-32 pb-4 sm:pt-40 sm:pb-6">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Back link + section tabs */}
            <div className="flex items-center justify-between mb-8">
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-starlight/70 hover:text-nebula/80 transition-colors uppercase"
              >
                &larr; {backLabel}
              </Link>
            </div>

            {/* Section navigation tabs */}
            <div className="flex flex-wrap gap-1 mb-10">
              {loreNav.map((nav) => (
                <Link
                  key={nav.href}
                  href={nav.href}
                  className={`px-3 py-1.5 font-mono text-[9px] tracking-[0.15em] uppercase rounded-sm transition-all duration-200 ${
                    pathname === nav.href
                      ? 'text-nebula-glow/90 bg-nebula/10 border border-nebula/20'
                      : 'text-starlight/55 hover:text-starlight/72 border border-transparent hover:border-white/5'
                  }`}
                >
                  {nav.label}
                </Link>
              ))}
            </div>

            <p className="font-mono text-[11px] tracking-[0.3em] text-nebula/80 uppercase mb-4">
              {label}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-light tracking-wide text-starlight/90 mb-6">
              {title}
            </h1>
            <div className="section-line mb-8" />
            {lead && (
              <p className="font-display text-xl sm:text-2xl font-light italic text-starlight/70 max-w-2xl">
                {lead}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">{children}</div>
      </section>

      {/* Prev / Next navigation */}
      {(prevSection || nextSection) && (
        <FadeIn>
          <div className="max-w-3xl mx-auto px-6 pb-24">
            <div className="border-t border-white/5 pt-8 flex items-center justify-between">
              {prevSection ? (
                <Link
                  href={prevSection.href}
                  className="group inline-flex items-center gap-3 font-body text-sm text-starlight/60 hover:text-starlight/60 transition-colors"
                >
                  <span className="text-starlight/65 group-hover:text-nebula/80 transition-colors">
                    &larr;
                  </span>
                  <span>{prevSection.label}</span>
                </Link>
              ) : (
                <span />
              )}
              {nextSection ? (
                <Link
                  href={nextSection.href}
                  className="group inline-flex items-center gap-3 font-body text-sm text-starlight/60 hover:text-starlight/60 transition-colors"
                >
                  <span>{nextSection.label}</span>
                  <span className="text-starlight/65 group-hover:text-nebula/80 transition-colors">
                    &rarr;
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </FadeIn>
      )}

      <Footer />
    </main>
  );
}
