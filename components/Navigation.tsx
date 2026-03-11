'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const worldSubLinks = [
  { label: 'Collapse', href: '/world/collapse' },
  { label: 'Havens', href: '/world/havens' },
  { label: 'Settlements', href: '/world/settlements' },
  { label: 'Coalition', href: '/world/coalition' },
  { label: 'Phenomena', href: '/world/phenomena' },
];

const navLinks = [
  { label: 'World', href: '/world', children: worldSubLinks },
  { label: 'Story', href: '/#discovery' },
  { label: 'Crew', href: '/#crew' },
  { label: 'Author', href: '/#author' },
  { label: 'Archive', href: '/archive' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [worldOpen, setWorldOpen] = useState(false);
  const [mobileWorldOpen, setMobileWorldOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setWorldOpen(false);
    setMenuOpen(false);
    setMobileWorldOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setWorldOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setWorldOpen(false), 150);
  };

  const isWorldActive = pathname.startsWith('/world');

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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`font-body text-sm tracking-wider transition-colors duration-300 inline-flex items-center gap-1.5 ${
                    isWorldActive
                      ? 'text-nebula-glow/80'
                      : 'text-starlight/72 hover:text-nebula-glow'
                  }`}
                >
                  {link.label}
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`transition-transform duration-200 ${worldOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M1.5 3L4 5.5L6.5 3" />
                  </svg>
                </Link>

                <AnimatePresence>
                  {worldOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-void/95 backdrop-blur-xl border border-white/8 rounded-sm overflow-hidden shadow-2xl"
                    >
                      <div className="py-2">
                        <Link
                          href="/world"
                          className="block px-5 py-2 font-mono text-[9px] tracking-[0.2em] text-nebula/70 uppercase hover:text-nebula/70 transition-colors"
                        >
                          Archive Index
                        </Link>
                        <div className="mx-4 border-t border-white/5 my-1" />
                        {worldSubLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-5 py-2.5 font-body text-sm tracking-wider transition-all duration-200 ${
                              pathname === sub.href
                                ? 'text-nebula-glow/90 bg-nebula/5'
                                : 'text-starlight/70 hover:text-starlight/80 hover:bg-white/[0.03]'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm tracking-wider text-starlight/72 hover:text-nebula-glow transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/#signup"
            className="btn-glow font-body text-sm tracking-wider px-5 py-2 border border-nebula/40 rounded text-nebula-glow hover:bg-nebula/10 transition-all duration-300"
          >
            Join
          </Link>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-void/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileWorldOpen(!mobileWorldOpen)}
                      className={`w-full text-left font-body text-sm tracking-wider py-3 transition-colors flex items-center justify-between ${
                        isWorldActive
                          ? 'text-nebula-glow/80'
                          : 'text-starlight/60 hover:text-nebula-glow'
                      }`}
                    >
                      {link.label}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 8 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={`transition-transform duration-200 ${mobileWorldOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M1.5 3L4 5.5L6.5 3" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {mobileWorldOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <Link
                            href="/world"
                            onClick={() => setMenuOpen(false)}
                            className="block pl-5 py-2 font-mono text-[9px] tracking-[0.2em] text-nebula/70 uppercase"
                          >
                            Archive Index
                          </Link>
                          {worldSubLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMenuOpen(false)}
                              className={`block pl-5 py-2.5 font-body text-sm tracking-wider transition-colors ${
                                pathname === sub.href
                                  ? 'text-nebula-glow/90'
                                  : 'text-starlight/65 hover:text-starlight/70'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-sm tracking-wider text-starlight/60 hover:text-nebula-glow transition-colors py-3"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/#signup"
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm tracking-wider px-5 py-2 mt-2 border border-nebula/40 rounded text-nebula-glow text-center hover:bg-nebula/10 transition-all"
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
