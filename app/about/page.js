'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Globe2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { icon: '🌱', title: 'Integrity', desc: 'Transparent dealings and honest sourcing at every step.' },
    { icon: '🏆', title: 'Quality First', desc: 'Uncompromising standards in product, packaging and process.' },
    { icon: '🤝', title: 'Partnership', desc: 'Long-term relationships with farmers and global buyers.' },
    { icon: '🌍', title: 'Sustainability', desc: 'Eco-conscious sourcing and packaging for a healthier planet.' },
    { icon: '⚡', title: 'Reliability', desc: 'On-time delivery, every shipment, every time.' },
    { icon: '🎓', title: 'Continuous Learning', desc: 'Evolving with global standards and buyer expectations.' },
  ];
  return (
    <>
      <section className="gradient-soft border-b border-slate-100">
        <div className="container py-20 md:py-24 text-center max-w-3xl">
          <span className="eyebrow">About Globeon Exim</span>
          <h1 className="heading-xl mt-3">Bridging Indian Excellence with the World</h1>
          <p className="lead mt-5">A new generation of Indian export company combining traditional sourcing wisdom with modern quality systems and global logistics.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
              <Image src="https://images.pexels.com/photos/20841297/pexels-photo-20841297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900" alt="Indian agriculture" fill className="object-cover" />
            </div>
            <div className="absolute hidden md:flex -mt-20 ml-10 bg-white rounded-2xl shadow-card p-5 items-center gap-4 max-w-[280px]">
              <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center text-white text-xl font-bold">10+</div>
              <div><p className="font-display font-bold text-brand-blue">Years of Trade</p><p className="text-xs text-slate-500">Combined export experience</p></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="eyebrow">Company Overview</span>
            <h2 className="heading-lg mt-3">From Indian Farms to Global Tables</h2>
            <p className="text-slate-600 mt-5 leading-relaxed">Globeon Exim is an India-based export company specializing in premium agricultural and natural products. We connect carefully selected Indian producers — from organic moringa cultivators in the south to turmeric farmers in central India — with discerning buyers across 25+ countries.</p>
            <p className="text-slate-600 mt-4 leading-relaxed">Our integrated approach combines direct farm sourcing, rigorous quality control, modern packaging facilities, and a global logistics network. The result: consistent, certified and competitively-priced products you can trust.</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-7">
              {['IEC Registered Exporter','APEDA & Spices Board Member','Direct Farmer Network','Global Logistics Partners','Lab-Tested Quality Reports','Custom Private Labeling'].map(i => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />{i}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-slate-50 to-white">
        <div className="container grid md:grid-cols-3 gap-7">
          {[
            { icon: Target, title: 'Our Mission', desc: 'To deliver authentic, premium-quality Indian agricultural products to global markets through ethical sourcing, transparent processes and unwavering reliability.' },
            { icon: Eye, title: 'Our Vision', desc: 'To become the most trusted name in Indian agro-exports — recognized for quality, sustainability and the strong bridge we build between Indian farmers and the world.' },
            { icon: Heart, title: 'Our Promise', desc: 'Every shipment carries our commitment: certified quality, on-time delivery and a partnership that lasts well beyond the first order.' },
          ].map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-elevated p-8">
              <div className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center mb-5"><c.icon className="w-7 h-7 text-white" /></div>
              <h3 className="font-display text-2xl font-bold text-brand-blue">{c.title}</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Our Core Values</span>
            <h2 className="heading-lg mt-3">Principles That Define Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="card-elevated p-7">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-display text-xl font-bold text-brand-blue">{v.title}</h3>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-white to-slate-50">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="eyebrow">Global Trade Commitment</span>
            <h2 className="heading-lg mt-3">A World-Class Standard, Delivered Globally</h2>
            <p className="text-slate-600 mt-5 leading-relaxed">From the moment a buyer reaches out to the moment our products reach their warehouse, every step is owned end-to-end. Our team handles documentation, certification, packaging, and global logistics so our partners can focus on their business.</p>
            <div className="flex items-center gap-3 mt-7">
              <Globe2 className="w-6 h-6 text-brand-green" />
              <p className="font-display font-semibold text-brand-blue">Active in North America, Europe, Middle East, Southeast Asia & Africa</p>
            </div>
            <Link href="/contact" className="btn-primary mt-7">Start a Conversation<ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-square rounded-3xl overflow-hidden shadow-card">
            <Image src="https://images.pexels.com/photos/24246926/pexels-photo-24246926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900" alt="Global shipping" fill className="object-cover" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
