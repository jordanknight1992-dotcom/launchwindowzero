'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Starfield from '@/components/Starfield';
import Footer from '@/components/Footer';
import { archiveEntries } from '@/content/archive';

export default function ArchivePage() {
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
              Restricted Access
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-light tracking-wide text-starlight/90 mb-4">
              Archive
            </h1>
            <p className="font-body text-sm text-starlight/30 mb-2">
              Telemetry fragments and research logs recovered from Fold transit
              corridors.
            </p>
            <p className="font-mono text-[10px] tracking-[0.15em] text-red-500/50 uppercase">
              Classification level: Restricted
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          {archiveEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group border border-white/5 rounded-sm bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500 overflow-hidden"
            >
              <div className="flex flex-wrap items-center gap-4 px-6 py-3 border-b border-white/5 bg-white/[0.01]">
                <span className="font-mono text-[10px] tracking-[0.15em] text-nebula/60">
                  {entry.id}
                </span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-starlight/20">
                  {entry.date}
                </span>
                <span
                  className={`font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm ${
                    entry.classification === 'LEVEL FIVE RESTRICTED'
                      ? 'text-red-400/70 bg-red-500/10 border border-red-500/20'
                      : 'text-amber-400/60 bg-amber-500/10 border border-amber-500/15'
                  }`}
                >
                  {entry.classification}
                </span>
              </div>

              <div className="px-6 py-5">
                <p className="font-mono text-[10px] tracking-[0.1em] text-starlight/20 mb-1">
                  Origin: {entry.origin}
                </p>
                <h3 className="font-display text-xl font-light text-starlight/80 mb-4">
                  {entry.title}
                </h3>
                <p className="font-body text-sm text-starlight/35 leading-relaxed">
                  {entry.content}
                </p>
              </div>

              <div className="px-6 py-2 border-t border-white/5 bg-white/[0.005]">
                <span className="font-mono text-[9px] tracking-[0.2em] text-starlight/15 uppercase">
                  Status: {entry.status}
                </span>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center py-12"
          >
            <p className="font-mono text-[11px] text-nebula/30 tracking-wider">
              <span className="animate-pulse">_</span> Additional entries
              require Level Five clearance
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
