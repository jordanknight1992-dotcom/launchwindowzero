'use client';

import { motion } from 'framer-motion';
import LorePage from '@/components/LorePage';
import FadeIn from '@/components/FadeIn';
import { loreContent } from '@/content/lore';

export default function SettlementsPage() {
  const { settlements } = loreContent;

  return (
    <LorePage label="Coalition Archive" title={settlements.heading} lead={settlements.lead}>
      <FadeIn>
        <p className="font-body text-base sm:text-[17px] text-starlight/70 leading-[1.85] mt-12 mb-10">
          {settlements.intro}
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="font-body text-base sm:text-[17px] text-starlight/65 leading-[1.85] mb-16">
          {settlements.significance}
        </p>
      </FadeIn>

      <div className="space-y-10">
        {settlements.locations.map((loc, index) => (
          <FadeIn key={loc.name} delay={index * 0.1}>
            <motion.div
              whileHover={{ borderColor: 'rgba(59, 130, 246, 0.2)' }}
              className="border border-white/5 rounded-sm overflow-hidden bg-white/[0.01] transition-all duration-500"
            >
              <div className="flex items-center gap-4 px-6 py-3 border-b border-white/5 bg-white/[0.01]">
                <span className="font-mono text-[10px] tracking-[0.15em] text-nebula/60">
                  {loc.designation}
                </span>
                <span className="font-display text-lg font-light text-starlight/80">
                  {loc.name}
                </span>
                <span className="font-mono text-[9px] tracking-[0.15em] text-starlight/70 ml-auto uppercase">
                  {loc.body} — Off-World Biome
                </span>
              </div>

              <div className="px-6 py-5 space-y-4">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                    Population
                  </p>
                  <p className="font-body text-sm text-starlight/72">
                    {loc.population}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                    Function
                  </p>
                  <p className="font-body text-sm text-starlight/65 leading-relaxed">
                    {loc.function}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                    Architecture
                  </p>
                  <p className="font-body text-sm text-starlight/65 leading-relaxed">
                    {loc.visual}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                    Culture
                  </p>
                  <p className="font-body text-sm text-starlight/65 leading-relaxed">
                    {loc.culture}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                    Identity
                  </p>
                  <p className="font-body text-sm text-starlight/62 leading-relaxed italic">
                    {loc.identity}
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </LorePage>
  );
}
