import Link from 'next/link';
import Logo from './Logo';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { products } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] grid-pattern" />
      <div className="container relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-white/70 text-sm leading-relaxed">
              Trusted Indian export partner delivering premium agricultural and natural products to global markets with quality, integrity and on-time delivery.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Facebook, Instagram, Twitter].map((I, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-green-light flex items-center justify-center transition-colors" aria-label="social">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[{h:'/',l:'Home'},{h:'/about',l:'About Us'},{h:'/products',l:'Products'},{h:'/why-choose-us',l:'Why Choose Us'},{h:'/contact',l:'Contact Us'}].map(i => (
                <li key={i.h}><Link href={i.h} className="hover:text-brand-green-light transition-colors inline-flex items-center gap-1.5 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:ml-0 group-hover:opacity-100 transition-all" />{i.l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-5">Our Products</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {products.map(p => (
                <li key={p.slug}><Link href={`/products/${p.slug}`} className="hover:text-brand-green-light transition-colors">{p.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-5">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-brand-green-light flex-shrink-0" /><span>Globeon Exim HQ,<br/>Ahmedabad, Gujarat, India</span></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-brand-green-light flex-shrink-0" /><a href="mailto:info@globeonexim.com" className="hover:text-white">info@globeonexim.com</a></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-brand-green-light flex-shrink-0" /><a href="tel:+919999999999" className="hover:text-white">+91 99999 99999</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Globeon Exim. All Rights Reserved.</p>
          <p>Crafted for global trade • IEC Registered Exporter • Made in India</p>
        </div>
      </div>
    </footer>
  );
}
