'use client';

import Link from 'next/link';
import { siteContent } from '@/content/site';

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-display text-lg tracking-widest text-starlight/40 uppercase mb-1">
              Launch Window Zero
            </p>
            <p className="font-body text-xs text-starlight/20 italic">
              {footer.tagline}
            </p>
          </div>

          <div className="flex items-center gap-8">
            {footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-xs tracking-wider text-starlight/30 hover:text-starlight/60 transition-colors duration-300 uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {['X', 'IG', 'GR'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm text-starlight/30 hover:text-nebula-glow hover:border-nebula/30 transition-all duration-300 font-mono text-[10px]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-[11px] text-starlight/15">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
