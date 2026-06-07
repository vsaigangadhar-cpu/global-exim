'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/why-choose-us', label: 'Why Choose Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-100' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="container flex items-center justify-between h-18 py-3">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active ? 'text-brand-blue bg-blue-50' : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'}`}>
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary !py-2.5 !px-5">Send Inquiry<ArrowRight className="w-4 h-4" /></Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-slate-100" aria-label="Menu">
          {open ? <X className="w-6 h-6 text-brand-blue" /> : <Menu className="w-6 h-6 text-brand-blue" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} className={`px-4 py-3 rounded-lg text-sm font-medium ${active ? 'text-brand-blue bg-blue-50' : 'text-slate-700 hover:bg-slate-50'}`}>{l.label}</Link>
              );
            })}
            <Link href="/contact" className="btn-primary mt-2 w-full">Send Inquiry<ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      )}
    </header>
  );
}
