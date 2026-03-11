'use client';

import FadeIn from './FadeIn';
import { siteContent } from '@/content/site';

export default function Discovery() {
  const { discovery } = siteContent;

  return (
    <section id="discovery" className="relative py-32 sm:py-40">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="section-line mb-12" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-wide text-starlight/90 mb-10">
            {discovery.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-display text-2xl sm:text-3xl font-light italic text-starlight/50 mb-8">
            {discovery.lead}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="font-body text-base sm:text-lg text-starlight/40 leading-relaxed max-w-2xl mx-auto">
            {discovery.body}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
