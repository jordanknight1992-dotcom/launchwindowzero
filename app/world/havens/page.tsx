'use client';

import { motion } from 'framer-motion';
import LorePage from '@/components/LorePage';
import FadeIn from '@/components/FadeIn';
import { loreContent } from '@/content/lore';

export default function HavensPage() {
  const { network, havens } = loreContent;

  return (
    <LorePage label="Coalition Archive" title={network.heading} lead={network.lead}>
      {/* Network intro */}
      <FadeIn>
        <p className="font-body text-base sm:text-[17px] text-starlight/70 leading-[1.85] mt-12 mb-16">
          {network.intro}
        </p>
      </FadeIn>

      {/* Network features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
        {network.features.map((feature, index) => (
          <FadeIn key={feature.title} delay={index * 0.08}>
            <div className="p-6 border border-white/5 rounded-sm bg-white/[0.01]">
              <h3 className="font-display text-lg font-light text-starlight/70 mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-starlight/60 leading-relaxed">
                {feature.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Section divider */}
      <FadeIn>
        <div className="text-center mb-16">
          <div className="section-line mb-6" />
          <p className="font-mono text-[10px] tracking-[0.3em] text-nebula/70 uppercase">
            Haven Registry
          </p>
        </div>
      </FadeIn>

      {/* Individual Haven profiles */}
      <div className="space-y-10">
        {havens.map((haven) => (
          <FadeIn key={haven.id} delay={0.05}>
            <motion.div
              whileHover={{ borderColor: 'rgba(59, 130, 246, 0.2)' }}
              className="border border-white/5 rounded-sm overflow-hidden bg-white/[0.01] transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-center gap-4 px-6 py-3 border-b border-white/5 bg-white/[0.01]">
                <span className="font-mono text-[10px] tracking-[0.15em] text-nebula/60">
                  {haven.id}
                </span>
                <span className="font-display text-lg font-light text-starlight/80">
                  {haven.name}
                </span>
                <span className="font-mono text-[9px] tracking-[0.15em] text-starlight/70 ml-auto uppercase hidden sm:inline">
                  {haven.specialization}
                </span>
              </div>

              {/* Body */}
              <div className="px-6 py-5 space-y-4">
                {/* Location and Population row */}
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                      Location
                    </p>
                    <p className="font-body text-sm text-starlight/72">
                      {haven.location}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                      Population
                    </p>
                    <p className="font-body text-sm text-starlight/72">
                      {haven.population}
                    </p>
                  </div>
                  <div className="sm:hidden">
                    <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                      Specialization
                    </p>
                    <p className="font-body text-sm text-starlight/72">
                      {haven.specialization}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                    Primary Function
                  </p>
                  <p className="font-body text-sm text-starlight/65 leading-relaxed">
                    {haven.function}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                    Architecture
                  </p>
                  <p className="font-body text-sm text-starlight/65 leading-relaxed">
                    {haven.visual}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                    Cultural Identity
                  </p>
                  <p className="font-body text-sm text-starlight/65 leading-relaxed">
                    {haven.culture}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.15em] text-nebula/65 uppercase mb-1">
                    Environmental Design
                  </p>
                  <p className="font-body text-sm text-starlight/62 leading-relaxed italic">
                    {haven.environment}
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
