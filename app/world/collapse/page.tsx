'use client';

import LorePage from '@/components/LorePage';
import FadeIn from '@/components/FadeIn';
import { loreContent } from '@/content/lore';

export default function CollapsePage() {
  const { collapse } = loreContent;

  return (
    <LorePage label="Coalition Archive" title={collapse.heading} lead={collapse.lead}>
      <div className="space-y-12 mt-12">
        {collapse.sections.map((section, index) => (
          <FadeIn key={index} delay={index * 0.08}>
            <div>
              {section.heading && (
                <h3 className="font-display text-xl font-light text-starlight/65 mb-4">
                  {section.heading}
                </h3>
              )}
              <p className="font-body text-base sm:text-[17px] text-starlight/70 leading-[1.85]">
                {section.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </LorePage>
  );
}
