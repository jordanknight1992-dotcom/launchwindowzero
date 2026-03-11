'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';
import Navigation from './Navigation';
import Starfield from './Starfield';
import FadeIn from './FadeIn';
import Footer from './Footer';

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
  return (
    <main>
      <Starfield />
      <Navigation />

      <section className="pt-32 pb-8 sm:pt-40 sm:pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-starlight/20 hover:text-nebula/50 transition-colors uppercase mb-8"
            >
              &larr; {backLabel}
            </Link>
            <p className="font-mono text-[11px] tracking-[0.3em] text-nebula/50 uppercase mb-4">
              {label}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-light tracking-wide text-starlight/90 mb-6">
              {title}
            </h1>
            <div className="section-line mb-8" />
            {lead && (
              <p className="font-display text-xl sm:text-2xl font-light italic text-starlight/45 max-w-2xl">
                {lead}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6">{children}</div>
      </section>

      <Footer />
    </main>
  );
}
