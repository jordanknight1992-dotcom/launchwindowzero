'use client';

import FadeIn from './FadeIn';
import Link from 'next/link';
import { siteContent } from '@/content/site';

export default function Book() {
  const { book } = siteContent;

  return (
    <section id="book" className="relative py-32 sm:py-40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="section-line mb-12" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-wide text-starlight/90 mb-10">
            {book.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-body text-base sm:text-lg text-starlight/65 leading-relaxed mb-8 max-w-2xl mx-auto">
            {book.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-nebula/20 rounded-sm bg-nebula/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-nebula animate-pulse-slow" />
            <span className="font-mono text-xs tracking-widest text-nebula/70 uppercase">
              {book.status}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="font-body text-sm text-starlight/60 mb-8">
            {book.statusDetail}
          </p>
          <Link
            href="#signup"
            className="btn-glow inline-block px-8 py-3.5 border border-starlight/15 hover:border-nebula/40 text-starlight/60 hover:text-starlight font-body text-sm tracking-widest uppercase rounded transition-all duration-300"
          >
            Get Early Access
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
