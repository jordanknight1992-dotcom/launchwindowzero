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
          <p className="font-body text-sm text-starlight/60 mb-8">
            {contact.subheading}
          </p>

          {/* Action prompts */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {contact.actions.map((action) => (
              <a
                key={action.label}
                href={`mailto:${contact.email}?subject=${encodeURIComponent(action.label)}`}
                className="group border border-white/5 hover:border-nebula/20 rounded-sm p-4 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300 text-left"
              >
                <p className="font-mono text-[10px] tracking-[0.15em] text-nebula/80 group-hover:text-nebula/70 uppercase mb-1 transition-colors">
                  {action.label}
                </p>
                <p className="font-body text-[12px] text-starlight/55 leading-relaxed">
                  {action.description}
                </p>
              </a>
            ))}
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="btn-glow inline-block px-6 py-2.5 border border-nebula/30 rounded text-nebula-glow/70 hover:text-nebula-glow font-mono text-xs tracking-widest transition-all duration-300"
          >
            {contact.email}
          </a>
          <p className="font-body text-[11px] text-starlight/65 mt-4 italic">
            {contact.note}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
