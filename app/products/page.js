'use client';
import { motion } from 'framer-motion';
import ProductCard from '@/components/site/ProductCard';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <>
      <section className="bg-brand-paper border-b border-ink-900/5">
        <div className="container pt-20 pb-24 md:pt-24 md:pb-28 max-w-4xl">
          <span className="eyebrow">Our Catalogue</span>
          <h1 className="h-display mt-6 text-balance">Premium products. Globally sourced.</h1>
          <p className="lead mt-7 max-w-2xl">A curated portfolio of certified agricultural and natural products, ready for export with full documentation, custom packaging and private-label options.</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink-400 font-semibold">{products.length} Products • Export Ready</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink-400 font-semibold">Custom MOQ Available</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-paper">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <span className="eyebrow mx-auto">Looking for Something Specific?</span>
            <h2 className="h-1 mt-5 text-balance">Custom sourcing for global buyers.</h2>
            <p className="lead mt-6 mx-auto">Beyond our catalogue, we source a wide range of Indian agricultural commodities on demand — pulses, grains, oilseeds, spices, herbal extracts and more.</p>
            <a href="/contact" className="btn-primary mt-8">Send Custom Inquiry</a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
