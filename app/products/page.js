'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Package } from 'lucide-react';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <>
      <section className="gradient-soft border-b border-slate-100">
        <div className="container py-20 md:py-24 text-center max-w-3xl">
          <span className="eyebrow">Our Catalogue</span>
          <h1 className="heading-xl mt-3">Premium Products. Globally Sourced.</h1>
          <p className="lead mt-5">Explore our portfolio of carefully curated agricultural and natural products, ready for export with certifications and custom packaging.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((p, i) => (
              <motion.div key={p.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="card-elevated overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden group">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="eyebrow">{p.tagline}</p>
                    <h3 className="font-display text-2xl font-bold text-brand-blue mt-2">{p.name}</h3>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed flex-1">{p.short}</p>
                    <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-100">
                      <Link href={`/products/${p.slug}`} className="btn-primary !py-2.5 !px-5 text-sm flex-1">View Details<ArrowRight className="w-4 h-4" /></Link>
                      <Link href="/contact" className="w-11 h-11 rounded-lg border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors flex items-center justify-center flex-shrink-0" aria-label="Inquire"><Package className="w-5 h-5" /></Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
