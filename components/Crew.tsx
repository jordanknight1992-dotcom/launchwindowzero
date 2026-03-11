'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import { siteContent } from '@/content/site';

export default function Crew() {
  const { crew } = siteContent;

  return (
    <section id="crew" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="section-line mb-12" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-light tracking-wide text-starlight/90 text-center mb-16">
            {crew.heading}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {crew.members.map((member, index) => (
            <FadeIn key={member.name} delay={0.1 + index * 0.08}>
              <motion.div
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 sm:p-8 border border-white/5 rounded-sm bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-nebula/0 group-hover:via-nebula/40 to-transparent transition-all duration-700" />

                <p className="font-mono text-[10px] tracking-[0.2em] text-nebula/80 uppercase mb-4">
                  {member.role}
                </p>

                <h3 className="font-display text-2xl font-light text-starlight/90 mb-4">
                  {member.name}
                </h3>

                <p className="font-body text-sm text-starlight/62 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
