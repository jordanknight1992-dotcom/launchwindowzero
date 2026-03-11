'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'World', href: '/world' },
  { label: 'Story', href: '/#discovery' },
  { label: 'Crew', href: '/#crew' },
  { label: 'Author', href: '/#author' },
  { label: 'Archive', href: '/archive' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-void/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg tracking-widest uppercase text-starlight/80 hover:text-starlight transition-colors"
        >
          LWZ
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-wider text-starlight/50 hover:text-nebula-glow transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#signup"
            className="btn-glow font-body text-sm tracking-wider px-5 py-2 border border-nebula/40 rounded text-nebula-glow hover:bg-nebula/10 transition-all duration-300"
          >
            Join
          </Link>
        </div>

        <button
          className="md:hidden text-starlight/60 hover:text-starlight"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-void/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-sm tracking-wider text-starlight/60 hover:text-nebula-glow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#signup"
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm tracking-wider px-5 py-2 border border-nebula/40 rounded text-nebula-glow text-center hover:bg-nebula/10 transition-all"
              >
                Join
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
