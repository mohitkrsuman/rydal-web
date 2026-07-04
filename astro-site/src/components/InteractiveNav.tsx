import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Safety', href: '#safety' },
  { name: 'Dashboard', href: '#dashboard' },
  { name: 'Waitlist', href: '#waitlist' },
];

export default function InteractiveNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const mobileMenu =
    isOpen && mounted
      ? createPortal(
          <>
            <button
              type="button"
              className="fixed inset-0 z-[55] bg-dark-bg/95 backdrop-blur-xl md:hidden cursor-default"
              aria-label="Close menu"
              onClick={close}
            />

            <div className="fixed inset-x-0 top-20 bottom-0 z-[60] md:hidden overflow-y-auto bg-dark-bg border-t border-dark-border">
              <div className="px-6 py-8 flex flex-col min-h-full">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-hero-accent">// Menu</span>
                  <button
                    type="button"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark-text-secondary hover:text-white transition-colors"
                    onClick={close}
                  >
                    Close
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col space-y-6 uppercase text-xl font-black italic">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="hover:text-hero-accent transition-colors py-2 border-b border-dark-border/50"
                      onClick={close}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>

                <a
                  href="#waitlist"
                  className="mt-10 px-6 py-4 bg-hero-accent text-white text-center hover:bg-opacity-90 transition-all rounded-sm uppercase tracking-tighter italic font-black"
                  onClick={close}
                >
                  Join Beta
                </a>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className="md:hidden relative z-[70] text-white p-2 rounded-sm hover:bg-dark-surface/80 transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {mobileMenu}
    </>
  );
}
