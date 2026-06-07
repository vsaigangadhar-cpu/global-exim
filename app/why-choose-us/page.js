'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck2, Truck, Search, Headphones, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

const sections = [
  { icon: Award, title: 'Quality Standards', desc: 'Every batch passes through a rigorous quality protocol — organoleptic checks, micro-bio testing, heavy metals, pesticide residues and active compound analysis — documented with a Certificate of Analysis (CoA) for every shipment.', points: ['Multi-stage in-house and third-party testing','ISO, HACCP, FSSAI, USDA Organic certified','Batch-wise CoA for every export','Compliance with FDA, EU, GCC import standards'] },
  { icon: FileCheck2, title: 'Export Compliance', desc: 'We handle every document, certificate and approval so your shipment moves seamlessly through customs in any country. From phyto-sanitary to country-specific labeling — we\'ve got it covered.', points: ['IEC Registered Indian Exporter','APEDA & Spices Board member','Complete export documentation package','Phyto-sanitary & fumigation certificates'] },
  { icon: Truck, title: 'Reliable Logistics', desc: 'A vetted network of freight forwarders, shipping lines and last-mile partners ensures your cargo reaches its destination safely and on schedule — by sea, air or land.', points: ['FCL, LCL, air freight & courier options','Real-time shipment tracking','Trusted partnerships with Maersk, MSC, CMA-CGM','On-time delivery rate of 99%+'] },
  { icon: Search, title: 'Product Traceability', desc: 'Direct relationships with farmer producer organizations (FPOs) give us complete visibility from seed to shipment — a level of traceability global buyers demand and we deliver.', points: ['Farm-to-port traceability','Direct FPO sourcing partnerships','Documented harvest, processing & packing','QR-code based batch tracking (on request)'] },
  { icon: Headphones, title: 'Customer Support', desc: 'A dedicated account manager for every international client — supporting you across time zones with samples, documentation, logistics updates and after-sales care.', points: ['Dedicated export manager per account','Sample dispatch in 5–7 business days','Response within 12 working hours','Long-term partnership focus'] },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <section className="gradient-soft border-b border-slate-100">
        <div className="container py-20 md:py-24 text-center max-w-3xl">
          <span className="eyebrow">The Globeon Difference</span>
          <h1 className="heading-xl mt-3">Built on Quality. Trusted Globally.</h1>
          <p className="lead mt-5">Five pillars that make Globeon Exim a partner of choice for international buyers seeking premium Indian agricultural exports.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container space-y-20">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <div className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mb-5 shadow-soft"><s.icon className="w-8 h-8 text-white" /></div>
                <span className="eyebrow">0{i + 1} — Pillar</span>
                <h2 className="heading-md mt-2">{s.title}</h2>
                <p className="text-slate-600 mt-4 leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map(p => (
                    <li key={p} className="flex gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" /><span>{p}</span></li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-card">
                <Image src={[
                  'https://images.pexels.com/photos/34299/herbs-flavoring-seasoning-cooking.jpg?auto=compress&cs=tinysrgb&dpr=2&h=900',
                  'https://images.unsplash.com/photo-1650056282577-7a2d707288a9?crop=entropy&cs=srgb&fm=jpg&q=85',
                  'https://images.pexels.com/photos/24246926/pexels-photo-24246926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900',
                  'https://images.pexels.com/photos/36666146/pexels-photo-36666146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900',
                  'https://images.unsplash.com/photo-1529313780224-1a12b68bed16?crop=entropy&cs=srgb&fm=jpg&q=85',
                ][i]} alt={s.title} fill className="object-cover" sizes="50vw" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="relative rounded-3xl gradient-green p-10 md:p-14 text-white text-center overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <ShieldCheck className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="font-display text-3xl md:text-4xl font-bold">Partner with a Name You Can Trust</h2>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">Hundreds of global buyers rely on Globeon Exim for consistent quality and reliable supply. Let&apos;s start a conversation.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-7 bg-white text-brand-green hover:bg-brand-blue hover:text-white font-semibold px-7 py-3.5 rounded-xl shadow-card transition-all hover:-translate-y-0.5">Request a Quote <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
