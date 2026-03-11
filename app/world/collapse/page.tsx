'use client';

import LorePage from '@/components/LorePage';
import FadeIn from '@/components/FadeIn';
import { loreContent } from '@/content/lore';

export default function CollapsePage() {
  const { collapse } = loreContent;

  return (
    <LorePage label="Coalition Archive" title={collapse.heading} lead={collapse.lead}>
      <div className="space-y-8 mt-12">
        {collapse.sections.map((section, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <p className="font-body text-base sm:text-[17px] text-starlight/45 leading-[1.85]">
              {section.text}
            </p>
          </FadeIn>
        ))}
      </div>
    </LorePage>
  );
}
