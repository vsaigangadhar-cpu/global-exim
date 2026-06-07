import Link from 'next/link';
import Logo from './Logo';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter, ArrowUpRight, Send } from 'lucide-react';
import { products } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="relative gradient-deep text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-blue-light/10 blur-3xl" />

      <div className="relative container pt-20 pb-10">
        {/* Newsletter / CTA bar */}
        <div className="grid lg:grid-cols-2 gap-10 items-center pb-14 mb-14 border-b border-white/10">
          <div>
            <span className="eyebrow-light">Stay in the loop</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold mt-4 text-balance text-white">Market insights, harvest updates & export news - delivered quarterly.</h3>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <input type="email" placeholder="your@company.com" className="flex-1 lg:max-w-sm h-12 px-4 rounded-md bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-green-light focus:border-transparent" />
            <button type="submit" className="btn-primary !py-3"><Send className="w-4 h-4" />Subscribe</button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 text-white/60 text-sm leading-[1.7] max-w-sm">
              An Indian export house connecting verified farmer networks with discerning global buyers - across 25+ countries on 5 continents. Built on quality, transparency and reliability.
            </p>
            <div className="flex gap-2 mt-7">
              {[Linkedin, Twitter, Facebook, Instagram].map((I, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-md border border-white/15 hover:bg-brand-green-light hover:border-brand-green-light flex items-center justify-center transition-all" aria-label="social">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-[13px] uppercase tracking-[0.14em] text-white mb-5">Navigate</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {[{h:'/',l:'Home'},{h:'/about',l:'About'},{h:'/products',l:'Products'},{h:'/why-choose-us',l:'Why Us'},{h:'/contact',l:'Contact'}].map(i => (
                <li key={i.h}><Link href={i.h} className="hover:text-white transition-colors">{i.l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-[13px] uppercase tracking-[0.14em] text-white mb-5">Products</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {products.map(p => (
                <li key={p.slug}><Link href={`/products/${p.slug}`} className="hover:text-white transition-colors inline-flex items-center gap-1">{p.name}<ArrowUpRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 transition-all" /></Link></li>
              ))}
              <li><Link href="/contact" className="hover:text-white transition-colors">Custom Sourcing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Private Label</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-[13px] uppercase tracking-[0.14em] text-white mb-5">Headquarters</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-brand-green-light flex-shrink-0" /><span>Globeon Exim HQ,<br/>Hyderabad, Telangana<br/>India - 500001</span></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-brand-green-light flex-shrink-0" /><a href="mailto:info@globeonexim.com" className="hover:text-white">info@globeonexim.com</a></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-brand-green-light flex-shrink-0" /><a href="tel:+919999999999" className="hover:text-white">+91 99999 99999</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Globeon Exim. All Rights Reserved.</p>
          <p className="flex items-center gap-4"><span>IEC · APEDA · FSSAI · ISO 22000</span><span className="hidden md:inline">•</span><span>Crafted for Global Trade</span></p>
        </div>
      </div>
    </footer>
  );
}
