'use client';

import FadeIn from './FadeIn';
import { siteContent } from '@/content/site';

export default function Universe() {
  const { universe } = siteContent;

  return (
    <section id="universe" className="relative py-32 sm:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-membrane/20 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="section-line mb-12" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-wide text-starlight/90 text-center mb-16">
            {universe.heading}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {universe.concepts.map((concept, index) => (
            <FadeIn
              key={concept.title}
              delay={0.1 + index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="group">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-mono text-[10px] text-nebula/70 tracking-[0.3em]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl font-light text-starlight/80 group-hover:text-starlight transition-colors duration-500">
                    {concept.title}
                  </h3>
                </div>
                <p className="font-body text-sm sm:text-base text-starlight/62 leading-relaxed pl-10">
                  {concept.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
