'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product, index = 0, layout = 'grid' }) {
  const num = String(index + 1).padStart(2, '0');
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}>
      <Link href={`/products/${product.slug}`} className="group block relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-900">
          <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
          <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
            <span className="font-display text-white/80 text-sm font-semibold tracking-[0.2em]">{num}</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light" />In Stock
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-green-light">{product.tagline}</p>
            <h3 className="font-display text-2xl md:text-[28px] font-bold text-white mt-2 leading-tight">{product.name}</h3>
            <div className="h-px bg-white/15 my-4" />
            <p className="text-sm text-white/70 leading-relaxed line-clamp-2">{product.short}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-white group-hover:gap-3 transition-all">
              <span>Discover</span>
              <span className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
