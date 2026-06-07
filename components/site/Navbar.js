'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Phone, Mail, Award } from 'lucide-react';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/why-choose-us', label: 'Why Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <div className="hidden md:block bg-ink-900 text-white/80 text-[11px]">
        <div className="container flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-brand-green-light" />IEC Certified · APEDA · Spices Board Registered Exporter</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:info@globeonexim.com" className="inline-flex items-center gap-1.5 hover:text-white"><Mail className="w-3.5 h-3.5" />info@globeonexim.com</a>
            <a href="tel:+919999999999" className="inline-flex items-center gap-1.5 hover:text-white"><Phone className="w-3.5 h-3.5" />+91 99999 99999</a>
          </div>
        </div>
      </div>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-ink-900/5 shadow-[0_1px_0_rgba(15,23,42,0.04)]' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="container flex items-center justify-between h-[72px]">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className={`relative px-4 py-2 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors ${active ? 'text-brand-blue' : 'text-ink-700 hover:text-brand-blue'}`}>
                  {l.label}
                  <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-brand-green origin-left transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0'}`} />
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary !py-3 !px-5 text-[12px]">Send Inquiry<ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-md hover:bg-ink-900/5" aria-label="Menu">
            {open ? <X className="w-6 h-6 text-ink-900" /> : <Menu className="w-6 h-6 text-ink-900" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-ink-900/5 bg-white">
            <div className="container py-5 flex flex-col gap-1">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link key={l.href} href={l.href} className={`px-4 py-3 rounded-md text-sm font-medium uppercase tracking-wider ${active ? 'text-brand-blue bg-accent' : 'text-ink-700 hover:bg-ink-900/5'}`}>{l.label}</Link>
                );
              })}
              <Link href="/contact" className="btn-primary mt-3 w-full">Send Inquiry<ArrowUpRight className="w-4 h-4" /></Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
