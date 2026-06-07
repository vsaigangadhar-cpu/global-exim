'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Package, Calendar, Award, MessageCircle, Mail } from 'lucide-react';
import { getProduct, products } from '@/lib/products';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const [activeImg, setActiveImg] = useState(0);
  if (!product) return notFound();

  return (
    <>
      <section className="gradient-soft border-b border-slate-100">
        <div className="container pt-10 pb-4">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-blue transition-colors"><ArrowLeft className="w-4 h-4" />All Products</Link>
        </div>
      </section>

      <section className="pb-12 pt-8 gradient-soft">
        <div className="container grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-card bg-white">
              <Image src={product.gallery[activeImg]} alt={product.name} fill className="object-cover" priority />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {product.gallery.map((g, i) => (
                <button key={i} onClick={() => setActiveImg(i)} className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-brand-green shadow-soft' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                  <Image src={g} alt={`${product.name} ${i+1}`} fill className="object-cover" sizes="150px" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="eyebrow">{product.tagline}</span>
            <h1 className="heading-lg mt-3">{product.name}</h1>
            <p className="lead mt-5">{product.description}</p>
            <div className="grid grid-cols-2 gap-4 mt-7">
              <div className="p-4 rounded-xl bg-white border border-slate-100"><div className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="w-4 h-4" />Availability</div><p className="font-display font-semibold text-brand-blue mt-1">{product.availability}</p></div>
              <div className="p-4 rounded-xl bg-white border border-slate-100"><div className="flex items-center gap-2 text-xs text-slate-500"><Award className="w-4 h-4" />Quality</div><p className="font-display font-semibold text-brand-blue mt-1">Export Grade A</p></div>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link href="/contact" className="btn-primary"><Mail className="w-4 h-4" />Send Inquiry</Link>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="btn-outline"><MessageCircle className="w-4 h-4" />WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid lg:grid-cols-3 gap-7">
          <div className="card-elevated p-7">
            <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center mb-4"><CheckCircle2 className="w-6 h-6 text-white" /></div>
            <h3 className="font-display text-xl font-bold text-brand-blue">Key Benefits</h3>
            <ul className="mt-4 space-y-3">
              {product.benefits.map(b => (
                <li key={b} className="flex gap-2.5 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />{b}</li>
              ))}
            </ul>
          </div>
          <div className="card-elevated p-7">
            <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center mb-4"><Package className="w-6 h-6 text-white" /></div>
            <h3 className="font-display text-xl font-bold text-brand-blue">Export Packaging</h3>
            <ul className="mt-4 space-y-3">
              {product.packaging.map(b => (
                <li key={b} className="flex gap-2.5 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-brand-blue-light flex-shrink-0 mt-0.5" />{b}</li>
              ))}
            </ul>
          </div>
          <div className="card-elevated p-7">
            <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center mb-4"><Award className="w-6 h-6 text-white" /></div>
            <h3 className="font-display text-xl font-bold text-brand-blue">Specifications</h3>
            <dl className="mt-4 space-y-2.5 text-sm">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 py-1.5 border-b border-slate-100 last:border-0"><dt className="text-slate-500">{k}</dt><dd className="text-slate-800 font-medium text-right">{v}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="text-center mb-10"><span className="eyebrow">Explore More</span><h2 className="heading-md mt-3">Related Products</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.filter(p => p.slug !== product.slug).map(p => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="card-elevated group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden"><Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="33vw" /></div>
                <div className="p-5"><h3 className="font-display text-lg font-bold text-brand-blue">{p.name}</h3><span className="text-brand-green text-sm font-semibold mt-2 inline-flex items-center gap-1">View <ArrowRight className="w-4 h-4" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
