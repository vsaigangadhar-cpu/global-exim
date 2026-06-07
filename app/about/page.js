'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Globe2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { num: '01', title: 'Integrity', desc: 'Transparent dealings and honest sourcing at every step.' },
    { num: '02', title: 'Quality First', desc: 'Uncompromising standards in product, packaging and process.' },
    { num: '03', title: 'Partnership', desc: 'Long-term relationships with farmers and global buyers.' },
    { num: '04', title: 'Sustainability', desc: 'Eco-conscious sourcing and packaging for a healthier planet.' },
    { num: '05', title: 'Reliability', desc: 'On-time delivery, every shipment, every time.' },
    { num: '06', title: 'Continuous Learning', desc: 'Evolving with global standards and buyer expectations.' },
  ];
  return (
    <>
      <section className="bg-brand-paper border-b border-ink-900/5">
        <div className="container pt-20 pb-24 md:pt-24 md:pb-28 max-w-4xl">
          <span className="eyebrow">About Globeon Exim</span>
          <h1 className="h-display mt-6 text-balance">Bridging Indian excellence with the world.</h1>
          <p className="lead mt-7 max-w-2xl">A new generation of Indian export company combining traditional sourcing wisdom with modern quality systems and global logistics infrastructure.</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-6 relative pb-12 lg:pb-0">
            <div className="img-frame aspect-[4/5] shadow-elev">
              <Image src="https://images.pexels.com/photos/20841297/pexels-photo-20841297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1100" alt="Indian agriculture" fill className="object-cover" />
            </div>
            <div className="absolute left-4 right-4 sm:left-auto sm:-right-2 lg:-right-10 -bottom-2 lg:-bottom-8 bg-white rounded-xl shadow-card p-5 sm:p-6 flex items-center gap-4 sm:gap-5 border border-ink-900/5 z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md gradient-green flex items-center justify-center text-white text-xl sm:text-2xl font-display font-bold flex-shrink-0">10+</div>
              <div><p className="font-display font-bold text-ink-900">Years of Trade</p><p className="text-[10px] sm:text-xs text-ink-400 uppercase tracking-[0.15em] mt-1">Combined Experience</p></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-6">
            <span className="eyebrow">Company Overview</span>
            <h2 className="h-1 mt-5 text-balance">From Indian farms to global tables.</h2>
            <p className="text-ink-500 mt-6 leading-[1.8]">Globeon Exim is an India-based export company specializing in premium agricultural and natural products. We connect carefully selected Indian producers — from organic moringa cultivators in the south to turmeric farmers in central India — with discerning buyers across 25+ countries.</p>
            <p className="text-ink-500 mt-4 leading-[1.8]">Our integrated approach combines direct farm sourcing, rigorous quality control, modern packaging facilities, and a global logistics network. The result: consistent, certified and competitively-priced products you can trust.</p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-8">
              {['IEC Registered Exporter','APEDA & Spices Board Member','Direct Farmer Network','Global Logistics Partners','Lab-Tested Quality Reports','Custom Private Labeling'].map(i => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-ink-700"><CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />{i}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-brand-paper">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-px bg-ink-900/10 rounded-2xl overflow-hidden border border-ink-900/10">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To deliver authentic, premium-quality Indian agricultural products to global markets through ethical sourcing, transparent processes and unwavering reliability.' },
              { icon: Eye, title: 'Our Vision', desc: 'To become the most trusted name in Indian agro-exports — recognized for quality, sustainability and the strong bridge we build between Indian farmers and the world.' },
              { icon: Heart, title: 'Our Promise', desc: 'Every shipment carries our commitment: certified quality, on-time delivery and a partnership that lasts well beyond the first order.' },
            ].map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white p-10">
                <div className="w-12 h-12 rounded-md gradient-blue flex items-center justify-center mb-7"><c.icon className="w-6 h-6 text-white" /></div>
                <h3 className="font-display text-2xl font-bold text-ink-900">{c.title}</h3>
                <p className="text-ink-500 mt-3 leading-[1.7]">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div><span className="eyebrow">Core Values</span><h2 className="h-1 mt-5 text-balance">Principles that define us.</h2></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="surface-card-hover p-8">
                <span className="font-display font-bold text-brand-green text-sm tracking-[0.25em]">{v.num}</span>
                <h3 className="font-display text-xl font-bold text-ink-900 mt-6">{v.title}</h3>
                <p className="text-ink-500 mt-2 text-sm leading-[1.7]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-paper">
        <div className="container grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-6">
            <span className="eyebrow">Global Trade Commitment</span>
            <h2 className="h-1 mt-5 text-balance">A world-class standard, delivered globally.</h2>
            <p className="text-ink-500 mt-6 leading-[1.8]">From the moment a buyer reaches out to the moment our products reach their warehouse, every step is owned end-to-end. Our team handles documentation, certification, packaging, and global logistics so partners can focus on their core business.</p>
            <div className="flex items-center gap-3 mt-7"><Globe2 className="w-5 h-5 text-brand-green" /><p className="font-display font-semibold text-ink-900">Active across North America, Europe, Middle East, SEA & Africa</p></div>
            <Link href="/contact" className="btn-primary mt-8">Start a Conversation<ArrowUpRight className="w-4 h-4" /></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-6 img-frame aspect-[4/3] shadow-elev">
            <Image src="https://images.pexels.com/photos/24246926/pexels-photo-24246926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900" alt="Global shipping" fill className="object-cover" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
