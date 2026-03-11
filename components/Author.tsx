'use client';

import Image from 'next/image';
import FadeIn from './FadeIn';
import { siteContent } from '@/content/site';

export default function Author() {
  const { author } = siteContent;

  return (
    <section id="author" className="relative py-32 sm:py-40">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="section-line mb-12" />
        </FadeIn>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <FadeIn direction="left" className="flex-shrink-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border border-white/10">
              <Image
                src={author.imagePath}
                alt={author.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-full border border-white/5" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-light tracking-wide text-starlight/90 mb-2">
                {author.name}
              </h2>
              <p className="font-mono text-[10px] tracking-[0.2em] text-nebula/80 uppercase mb-6">
                Author
              </p>
              <p className="font-body text-base text-starlight/65 leading-relaxed max-w-lg">
                {author.bio}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
