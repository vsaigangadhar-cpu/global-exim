'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe2, ShieldCheck, Truck, Users, Award, Leaf, PackageCheck, FileCheck2, Ship, Search, CheckCircle2, Compass, MapPin } from 'lucide-react';
import { products } from '@/lib/products';
import Counter from '@/components/site/Counter';
import Marquee from '@/components/site/Marquee';
import ProductCard from '@/components/site/ProductCard';

const stats = [
  { value: 25, suffix: '+', label: 'Countries Served' },
  { value: 50, suffix: '+', label: 'Quality Products' },
  { value: 99, suffix: '%', label: 'On-Time Delivery' },
  { value: 500, suffix: '+', label: 'Global Buyers' },
];

const pillars = [
  { num: '01', icon: Award, title: 'Premium Quality', desc: 'Hand-picked, lab-tested produce that meets the highest international food and pharma standards.' },
  { num: '02', icon: Globe2, title: 'Export Expertise', desc: 'A decade of expertise navigating documentation, compliance and global maritime logistics.' },
  { num: '03', icon: Truck, title: 'Timely Delivery', desc: 'Reliable supply chain partners ensuring on-schedule shipments to any global port.' },
  { num: '04', icon: Ship, title: 'Global Network', desc: 'Trusted partners across 25+ countries spanning five continents and growing.' },
  { num: '05', icon: Users, title: 'Customer Focus', desc: 'Dedicated account managers, flexible MOQs and proposals tailored to your business.' },
  { num: '06', icon: ShieldCheck, title: 'Trusted Partnerships', desc: 'Long-term relationships with FPOs, processors and global wholesale buyers.' },
];

const processSteps = [
  { icon: Search, title: 'Sourcing', desc: 'Direct partnerships with verified Indian farmer producer organizations.' },
  { icon: ShieldCheck, title: 'Quality Verification', desc: 'Multi-stage lab testing for purity, potency, pesticides and metals.' },
  { icon: PackageCheck, title: 'Packaging', desc: 'Food-grade, durable, fully customizable packaging for long-haul shipping.' },
  { icon: FileCheck2, title: 'Documentation', desc: 'CoA, phyto-sanitary, customs and country-specific compliance handled.' },
  { icon: Ship, title: 'Global Delivery', desc: 'FCL, LCL, air freight - to your port, warehouse or doorstep worldwide.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO - editorial split */}
      <section className="relative overflow-hidden bg-brand-paper">
        <div className="absolute inset-0 grid-pattern-soft opacity-60" />
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-accent/50 to-transparent" />

        <div className="container relative pt-14 md:pt-20 pb-0">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7 pb-10 lg:pb-20">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-12 h-px bg-brand-green" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-green">Est. India · Trading Worldwide</span>
              </div>
              <h1 className="h-display text-balance">
                Connecting <span className="italic font-display text-brand-blue">Indian quality</span> to global markets.
              </h1>
              <p className="lead mt-7 max-w-xl">Globeon Exim is a trusted Indian export house delivering premium agricultural, herbal and natural products to discerning buyers - with the documentation, compliance and reliability that international trade demands.</p>
              <div className="flex flex-wrap gap-3 mt-9">
                <Link href="/products" className="btn-primary">Explore Products<ArrowUpRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-outline">Request a Quote</Link>
              </div>
              <div className="mt-12 pt-8 border-t border-ink-900/10 flex flex-wrap items-center gap-8">
                {[{n:'ISO',l:'22000 : 2018'},{n:'HACCP',l:'Certified'},{n:'USDA',l:'Organic'},{n:'FSSAI',l:'Licensed'}].map(b => (
                  <div key={b.n} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full border border-ink-900/10 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-brand-green" /></div>
                    <div className="leading-tight"><p className="font-display font-bold text-ink-900 text-sm">{b.n}</p><p className="text-[10.5px] uppercase tracking-[0.15em] text-ink-400">{b.l}</p></div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-5 relative pb-16 lg:pb-0">
              <div className="img-frame aspect-[4/5] shadow-elev">
                <Image src="https://images.unsplash.com/photo-1650056282577-7a2d707288a9?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Global trade and shipping" fill className="object-cover duotone-blue" priority />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/40 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Port of Mundra → World</span>
                  <Compass className="w-5 h-5" />
                </div>
              </div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="absolute left-4 right-4 sm:right-auto sm:left-auto sm:-left-2 lg:-left-10 -bottom-2 lg:-bottom-12 bg-white rounded-xl shadow-card p-5 sm:min-w-[220px] border border-ink-900/5 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md gradient-green flex items-center justify-center"><Leaf className="w-5 h-5 text-white" /></div>
                  <div><p className="text-[10px] uppercase tracking-[0.15em] text-ink-400 font-semibold">Origin</p><p className="font-display font-bold text-ink-900">Indian Farms</p></div>
                </div>
                <div className="h-px bg-ink-900/10 my-3" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md gradient-blue flex items-center justify-center"><MapPin className="w-5 h-5 text-white" /></div>
                  <div><p className="text-[10px] uppercase tracking-[0.15em] text-ink-400 font-semibold">Destination</p><p className="font-display font-bold text-ink-900">25+ Countries</p></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Marquee ticker */}
        <div className="relative mt-16 lg:mt-24 py-7 border-y border-ink-900/10 bg-white">
          <Marquee items={['Dubai','Rotterdam','Hamburg','Singapore','New York','London','Tokyo','Sydney','Johannesburg','São Paulo','Toronto','Riyadh']} />
        </div>
      </section>

      {/* STATS */}
      <section className="section-pad-sm bg-white">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0 lg:divide-x divide-ink-900/10">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="px-2 lg:px-8 text-center lg:text-left">
              <div className="font-display text-5xl md:text-6xl font-bold text-ink-900 tracking-tight leading-none"><Counter to={s.value} suffix={s.suffix} /></div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink-400 font-semibold mt-4">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS - editorial */}
      <section className="section-pad bg-brand-paper relative">
        <div className="absolute top-0 left-0 number-display ml-[-20px] mt-[-30px] hidden lg:block">01</div>
        <div className="container relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Catalogue</span>
              <h2 className="mt-5 text-balance text-4xl md:text-5xl font-bold text-ink-900">Selected with intent.<br/>Exported with precision.</h2>
            </div>
            <p className="text-ink-500 lg:max-w-sm">A focused portfolio of certified Indian agricultural and natural products - sourced direct from farm, processed to global specifications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/products" className="btn-outline">View Full Catalogue<ArrowUpRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE - editorial cards */}
      <section className="section-pad bg-white relative">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow">The Globeon Standard</span>
              <h2 className="mt-5 text-balance text-4xl md:text-5xl font-bold text-ink-900">Six reasons global buyers trust us as their long-term sourcing partner.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="lead">From farm contracts to last-mile delivery, we run an integrated operation - so buyers get one accountable partner, not a chain of intermediaries.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-900/10 rounded-2xl overflow-hidden border border-ink-900/10">
            {pillars.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white p-8 lg:p-10 group hover:bg-brand-paper transition-colors duration-500">
                <div className="flex items-start justify-between">
                  <span className="font-display font-bold text-brand-green text-sm tracking-[0.25em]">{w.num}</span>
                  <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all"><w.icon className="w-5 h-5 text-brand-blue group-hover:text-white" /></div>
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900 mt-12">{w.title}</h3>
                <p className="text-ink-500 text-sm mt-3 leading-[1.7]">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - timeline */}
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="eyebrow mx-auto">How We Work</span>
            <h2 className="h-1 mt-5 text-balance">A transparent journey from farm to global port.</h2>
          </div>
      <section className="section-pad bg-brand-paper">
        <div className="container">
          <div className="relative">
            <div className="hidden lg:block absolute top-[34px] left-[10%] right-[10%] h-px bg-ink-900/10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8">
              {processSteps.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="relative mx-auto w-[68px] h-[68px] mb-6">
                    <div className="absolute inset-0 rounded-full bg-white shadow-card flex items-center justify-center border border-ink-900/5"><s.icon className="w-7 h-7 text-brand-blue" /></div>
                    <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-brand-green text-white text-[11px] font-bold flex items-center justify-center">{i + 1}</div>
                  </div>
                  <h3 className="font-display font-bold text-ink-900 text-base uppercase tracking-[0.08em]">{s.title}</h3>
                  <p className="text-ink-500 text-sm mt-3 leading-[1.7] max-w-[200px] mx-auto">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER - image w/ overlay */}
      <section className="py-24">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden">
            <Image src="https://images.pexels.com/photos/24246926/pexels-photo-24246926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900" alt="Global shipping" width={2000} height={900} className="w-full h-[420px] md:h-[480px] object-cover" />
            <div className="absolute inset-0 gradient-deep opacity-90" />
            <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
            <div className="absolute inset-0 flex items-center">
              <div className="container">
                <div className="max-w-3xl text-white">
                  <span className="eyebrow-light">Begin a Partnership</span>
                  <h2 className="font-display text-display-xl font-bold leading-[1.05] mt-5 text-balance text-white">Ready to source quality products from India?</h2>
                  <p className="text-white/70 mt-5 text-base md:text-lg max-w-xl">Get a personalized quote, free samples and complete export support from our team - within 24 hours.</p>
                  <div className="flex flex-wrap gap-3 mt-8">
                    <Link href="/contact" className="btn-primary">Contact Us<ArrowUpRight className="w-4 h-4" /></Link>
                    <Link href="/products" className="btn-ghost-light">Browse Products</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
