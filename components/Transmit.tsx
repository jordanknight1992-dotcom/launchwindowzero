'use client';

import FadeIn from './FadeIn';
import { loreContent } from '@/content/lore';

export default function Transmit() {
  const { contact } = loreContent;

  return (
    <section className="relative py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="section-line mb-8" />
          <h3 className="font-display text-2xl font-light text-starlight/70 mb-3">
            {contact.heading}
          </h3>
          <p className="font-body text-sm text-starlight/30 mb-6">
            {contact.subheading}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="btn-glow inline-block px-6 py-2.5 border border-nebula/30 rounded text-nebula-glow/70 hover:text-nebula-glow font-mono text-xs tracking-widest transition-all duration-300"
          >
            {contact.email}
          </a>
          <p className="font-body text-[11px] text-starlight/15 mt-4 italic">
            {contact.note}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
