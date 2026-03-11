'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Starfield from '@/components/Starfield';
import Footer from '@/components/Footer';
import { chapterOne } from '@/content/chapter-one';

type ParagraphItem =
  | string
  | { type: 'system'; lines: string[] }
  | { type: 'divider' };

export default function ChapterOnePage() {
  return (
    <main>
      <Starfield />
      <Navigation />

      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-mono text-[11px] tracking-[0.3em] text-nebula/80 uppercase mb-4">
              Chapter {chapterOne.number}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-starlight/90 mb-6">
              {chapterOne.title}
            </h1>
            <div className="section-line" />
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-2xl mx-auto px-6 chapter-text">
          {(chapterOne.paragraphs as ParagraphItem[]).map((item, index) => {
            if (typeof item === 'string') {
              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.6 }}
                  className="font-body text-base sm:text-[17px] text-starlight/55 leading-[1.85]"
                >
                  {item}
                </motion.p>
              );
            }

            if (item.type === 'divider') {
              return (
                <div
                  key={index}
                  className="flex justify-center gap-3 my-12 text-starlight/65"
                >
                  <span>&#9679;</span>
                  <span>&#9679;</span>
                  <span>&#9679;</span>
                </div>
              );
            }

            if (item.type === 'system') {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="system-readout"
                >
                  {item.lines.map((line, li) => (
                    <div key={li}>{line}</div>
                  ))}
                </motion.div>
              );
            }

            return null;
          })}

          <div className="mt-20 text-center">
            <div className="section-line mb-8" />
            <p className="font-mono text-[11px] tracking-[0.2em] text-starlight/70 uppercase mb-6">
              End of Chapter One
            </p>
            <Link
              href="/#signup"
              className="btn-glow inline-block px-8 py-3.5 bg-nebula/80 hover:bg-nebula text-white font-body text-sm tracking-widest uppercase rounded transition-all"
            >
              Subscribe for Chapter Two
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
