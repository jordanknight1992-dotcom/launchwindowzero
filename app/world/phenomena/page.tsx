'use client';

import { motion } from 'framer-motion';
import LorePage from '@/components/LorePage';
import FadeIn from '@/components/FadeIn';
import { loreContent } from '@/content/lore';

export default function PhenomenaPage() {
  const { phenomena } = loreContent;

  return (
    <LorePage label="Coalition Archive" title={phenomena.heading} lead={phenomena.lead}>
      <FadeIn>
        <p className="font-body text-base sm:text-[17px] text-starlight/45 leading-[1.85] mt-12 mb-16">
          {phenomena.intro}
        </p>
      </FadeIn>

      <div className="space-y-8">
        {phenomena.entries.map((entry, index) => (
          <FadeIn key={entry.title} delay={index * 0.1}>
            <motion.div
              whileHover={{ borderColor: 'rgba(59, 130, 246, 0.15)' }}
              className="p-6 sm:p-8 border border-white/5 rounded-sm bg-white/[0.01] transition-all duration-500"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-[10px] text-amber-400/40 tracking-[0.2em]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl font-light text-starlight/75">
                  {entry.title}
                </h3>
              </div>
              <p className="font-body text-sm sm:text-base text-starlight/35 leading-relaxed pl-8">
                {entry.text}
              </p>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {/* Terminal */}
      <FadeIn delay={0.5}>
        <div className="text-center py-16">
          <p className="font-mono text-[11px] text-nebula/25 tracking-wider">
            <span className="animate-pulse">_</span> Further observations
            pending classification review
          </p>
        </div>
      </FadeIn>
    </LorePage>
  );
}
