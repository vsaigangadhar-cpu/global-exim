'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Globe2, ShieldCheck, Truck, Users, Sparkles, Award, Leaf, PackageCheck, FileCheck2, Ship, Search, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { products } from '@/lib/products';

function Counter({ to, suffix = '', duration = 2000 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t - start) / duration);
            setN(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const stats = [
  { value: 25, suffix: '+', label: 'Countries Served', icon: Globe2 },
  { value: 50, suffix: '+', label: 'Quality Products', icon: Award },
  { value: 100, suffix: '%', label: 'On-Time Delivery', icon: Truck },
  { value: 500, suffix: '+', label: 'Happy Clients', icon: Users },
];

const whyChoose = [
  { icon: Award, title: 'Premium Quality', desc: 'Hand-picked, lab-tested produce that meets the highest international standards.' },
  { icon: Globe2, title: 'Export Expertise', desc: 'Decade of expertise navigating documentation, compliance and global logistics.' },
  { icon: Truck, title: 'Timely Delivery', desc: 'Reliable supply chain partners ensuring on-schedule shipments worldwide.' },
  { icon: Ship, title: 'Global Network', desc: 'Trusted partners across 25+ countries spanning 5 continents.' },
  { icon: Users, title: 'Customer Focus', desc: 'Dedicated account managers and flexible MOQs tailored to your business.' },
  { icon: ShieldCheck, title: 'Trusted Partnerships', desc: 'Long-term relationships with farmers, processors and global buyers.' },
];

const processSteps = [
  { icon: Search, title: 'Product Sourcing', desc: 'Direct partnerships with verified farmers across India\'s finest agricultural belts.' },
  { icon: ShieldCheck, title: 'Quality Verification', desc: 'Multi-stage lab testing for purity, potency, pesticides and heavy metals.' },
  { icon: PackageCheck, title: 'Export Packaging', desc: 'Food-grade, durable, customizable packaging for long-haul global shipping.' },
  { icon: FileCheck2, title: 'Export Documentation', desc: 'Complete handling of CoA, phyto, FSSAI, customs and country-specific paperwork.' },
  { icon: Ship, title: 'Global Delivery', desc: 'FCL, LCL, air freight — we deliver to your port, warehouse or doorstep worldwide.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-soft">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-blue-light/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-green/10 blur-3xl" />
        <div className="container relative pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-green/20 shadow-soft mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span className="text-xs font-semibold text-brand-blue">IEC Certified • APEDA Registered Exporter</span>
              </div>
              <h1 className="heading-xl">Connecting Indian Quality to <span className="relative inline-block"><span className="relative z-10 text-brand-green">Global Markets</span><svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 9C40 3 80 3 120 6C160 9 180 8 198 5" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" /></svg></span></h1>
              <p className="lead mt-6 max-w-xl">Trusted Export Partner for Agricultural and Natural Products. From Indian farms to international tables — delivered with quality, transparency and care.</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/products" className="btn-primary">Explore Products<ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-outline">Contact Us</Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-slate-200">
                {['ISO Certified','HACCP','USDA Organic','FSSAI'].map(b => (
                  <div key={b} className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-brand-green" />{b}</div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/5] md:aspect-[5/6]">
                <Image src="https://images.unsplash.com/photo-1650056282577-7a2d707288a9?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Global trade and shipping" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 via-transparent to-transparent" />
              </div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="absolute -left-4 md:-left-10 top-10 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3 max-w-[200px]">
                <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center"><Leaf className="w-6 h-6 text-white" /></div>
                <div><p className="text-xs text-slate-500">Premium</p><p className="font-display font-bold text-brand-blue">Farm Fresh</p></div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="absolute -right-4 md:-right-6 bottom-10 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center"><Globe2 className="w-6 h-6 text-white" /></div>
                <div><p className="text-xs text-slate-500">Exporting to</p><p className="font-display font-bold text-brand-blue">25+ Countries</p></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 flex items-center justify-center"><s.icon className="w-6 h-6 text-brand-blue" /></div>
              <div className="font-display text-4xl md:text-5xl font-bold text-brand-blue"><Counter to={s.value} suffix={s.suffix} /></div>
              <p className="text-sm text-slate-600 mt-1 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Our Specialty</span>
            <h2 className="heading-lg mt-3">Featured Products</h2>
            <p className="lead mt-4">Premium, lab-tested agricultural and natural products sourced directly from Indian farmlands.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p, i) => (
              <motion.div key={p.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={`/products/${p.slug}`} className="card-elevated block group overflow-hidden h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${p.color} opacity-0 group-hover:opacity-30 transition-opacity`} />
                  </div>
                  <div className="p-6">
                    <p className="eyebrow">{p.tagline}</p>
                    <h3 className="font-display text-2xl font-bold text-brand-blue mt-2 group-hover:text-brand-green transition-colors">{p.name}</h3>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">{p.short}</p>
                    <span className="inline-flex items-center gap-1.5 mt-5 text-brand-green font-semibold text-sm group-hover:gap-3 transition-all">View Details <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-pad bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">The Globeon Advantage</span>
            <h2 className="heading-lg mt-3">Why Choose Globeon Exim</h2>
            <p className="lead mt-4">Six reasons global buyers trust us as their long-term sourcing partner from India.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elevated p-7">
                <div className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center mb-5"><w.icon className="w-7 h-7 text-white" /></div>
                <h3 className="font-display text-xl font-bold text-brand-blue">{w.title}</h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">How We Work</span>
            <h2 className="heading-lg mt-3">Our Export Process</h2>
            <p className="lead mt-4">From farm to global port — a transparent, five-step journey of quality and accountability.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative">
                  <div className="relative mx-auto w-24 h-24 mb-5">
                    <div className="absolute inset-0 rounded-full gradient-green opacity-10" />
                    <div className="absolute inset-2 rounded-full bg-white shadow-card flex items-center justify-center"><s.icon className="w-9 h-9 text-brand-green" /></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-blue text-white text-sm font-bold flex items-center justify-center shadow-soft">{i + 1}</div>
                  </div>
                  <h3 className="font-display font-bold text-brand-blue">{s.title}</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden gradient-blue p-10 md:p-16">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-brand-green-light/20 blur-3xl" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-5"><Sparkles className="w-4 h-4" /><span className="text-xs font-semibold uppercase tracking-wider">Let&apos;s Connect</span></div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Ready to Source Quality Products from India?</h2>
                <p className="text-white/80 mt-4 text-lg">Get a personalized quote, samples and complete export support from our team within 24 hours.</p>
              </div>
              <Link href="/contact" className="bg-white text-brand-blue hover:bg-brand-green-light hover:text-white font-semibold px-8 py-4 rounded-xl shadow-card inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 whitespace-nowrap">Contact Us<ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
