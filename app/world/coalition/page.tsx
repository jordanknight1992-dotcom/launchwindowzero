'use client';

import LorePage from '@/components/LorePage';
import FadeIn from '@/components/FadeIn';
import { loreContent } from '@/content/lore';

export default function CoalitionPage() {
  const { coalition } = loreContent;

  return (
    <LorePage label="Coalition Archive" title={coalition.heading} lead={coalition.lead}>
      <FadeIn>
        <p className="font-body text-base sm:text-[17px] text-starlight/70 leading-[1.85] mt-12 mb-10">
          {coalition.intro}
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="font-body text-base sm:text-[17px] text-starlight/65 leading-[1.85] mb-16">
          {coalition.structure}
        </p>
      </FadeIn>

      {/* Section divider */}
      <FadeIn delay={0.15}>
        <div className="text-center mb-12">
          <div className="section-line mb-6" />
          <p className="font-mono text-[10px] tracking-[0.3em] text-nebula/70 uppercase">
            Structural Pillars
          </p>
        </div>
      </FadeIn>

      <div className="space-y-8">
        {coalition.pillars.map((pillar, index) => (
          <FadeIn key={pillar.title} delay={index * 0.1}>
            <div className="border-l-2 border-nebula/10 pl-6">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-[10px] text-nebula/70 tracking-[0.2em]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl font-light text-starlight/75">
                  {pillar.title}
                </h3>
              </div>
              <p className="font-body text-sm sm:text-base text-starlight/62 leading-relaxed">
                {pillar.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </LorePage>
  );
}
