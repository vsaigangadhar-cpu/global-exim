'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck2, Truck, Search, Headphones, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const sections = [
  { num: '01', icon: Award, title: 'Quality Standards', img: 'https://images.pexels.com/photos/34299/herbs-flavoring-seasoning-cooking.jpg?auto=compress&cs=tinysrgb&dpr=2&h=900', desc: 'Every batch passes through a rigorous quality protocol — organoleptic checks, micro-bio testing, heavy metals, pesticide residues and active compound analysis — documented with a Certificate of Analysis (CoA) for every shipment.', points: ['Multi-stage in-house and third-party testing','ISO 22000, HACCP, FSSAI, USDA Organic certified','Batch-wise CoA for every export','Compliance with FDA, EU and GCC import standards'] },
  { num: '02', icon: FileCheck2, title: 'Export Compliance', img: 'https://images.unsplash.com/photo-1650056282577-7a2d707288a9?crop=entropy&cs=srgb&fm=jpg&q=85', desc: 'We handle every document, certificate and approval so your shipment moves seamlessly through customs in any country — from phyto-sanitary to country-specific labeling.', points: ['IEC Registered Indian Exporter','APEDA & Spices Board member','Complete export documentation package','Phyto-sanitary & fumigation certificates'] },
  { num: '03', icon: Truck, title: 'Reliable Logistics', img: 'https://images.pexels.com/photos/24246926/pexels-photo-24246926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900', desc: 'A vetted network of freight forwarders, shipping lines and last-mile partners ensures your cargo reaches its destination safely and on schedule — by sea, air or land.', points: ['FCL, LCL, air freight & courier options','Real-time shipment tracking','Trusted partners: Maersk, MSC, CMA-CGM','On-time delivery rate of 99%+'] },
  { num: '04', icon: Search, title: 'Product Traceability', img: 'https://images.pexels.com/photos/36666146/pexels-photo-36666146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900', desc: 'Direct relationships with farmer producer organizations (FPOs) give us complete visibility from seed to shipment — the level of traceability global buyers demand.', points: ['Farm-to-port traceability','Direct FPO sourcing partnerships','Documented harvest, processing & packing','QR-code based batch tracking (on request)'] },
  { num: '05', icon: Headphones, title: 'Customer Support', img: 'https://images.unsplash.com/photo-1529313780224-1a12b68bed16?crop=entropy&cs=srgb&fm=jpg&q=85', desc: 'A dedicated account manager for every international client — supporting you across time zones with samples, documentation, logistics updates and after-sales care.', points: ['Dedicated export manager per account','Sample dispatch within 5–7 business days','Response within 12 working hours','Long-term partnership focus'] },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <section className="bg-brand-paper border-b border-ink-900/5">
        <div className="container pt-20 pb-24 md:pt-24 md:pb-28 max-w-4xl">
          <span className="eyebrow">The Globeon Standard</span>
          <h1 className="h-display mt-6 text-balance">Built on quality. Trusted globally.</h1>
          <p className="lead mt-7 max-w-2xl">Five pillars that make Globeon Exim a partner of choice for international buyers seeking premium Indian agricultural exports.</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container space-y-24 md:space-y-32">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="lg:col-span-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display font-bold text-brand-green text-sm tracking-[0.3em]">{s.num}</span>
                  <span className="inline-block w-16 h-px bg-ink-900/15" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-400 font-semibold">Pillar</span>
                </div>
                <h2 className="h-1 text-balance">{s.title}</h2>
                <p className="text-ink-500 mt-6 leading-[1.8]">{s.desc}</p>
                <ul className="mt-8 space-y-3.5">
                  {s.points.map(p => (
                    <li key={p} className="flex gap-3 text-ink-700"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" /><span>{p}</span></li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 img-frame aspect-[5/4] shadow-elev">
                <Image src={s.img} alt={s.title} fill className="object-cover" sizes="50vw" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden gradient-deep p-12 md:p-16 text-white text-center">
            <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
            <ShieldCheck className="w-10 h-10 mx-auto mb-4 text-brand-green-light" />
            <h2 className="font-display text-display-lg font-bold text-balance">Partner with a name you can trust.</h2>
            <p className="mt-5 text-white/70 max-w-2xl mx-auto">Hundreds of global buyers rely on Globeon Exim for consistent quality and reliable supply. Let&apos;s start a conversation.</p>
            <Link href="/contact" className="btn-primary mt-9">Request a Quote<ArrowUpRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
