'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, Loader2, CheckCircle2, Clock } from 'lucide-react';
import { products } from '@/lib/products';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', country: '', product: '', message: '' });
  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Web3Forms-ready integration: drop in your access_key to start receiving emails.
    // For MVP we simulate submission so demo works end-to-end.
    try {
      await new Promise(r => setTimeout(r, 1200));
      setStatus('success');
      setForm({ name: '', company: '', email: '', phone: '', country: '', product: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="gradient-soft border-b border-slate-100">
        <div className="container py-20 md:py-24 text-center max-w-3xl">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="heading-xl mt-3">Let&apos;s Build a Global Partnership</h1>
          <p className="lead mt-5">Share your requirements — our export team responds within 12 working hours with samples, quotes and a tailored proposal.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, label: 'Head Office', value: 'Globeon Exim HQ\nAhmedabad, Gujarat\nIndia — 380015', color: 'gradient-blue' },
              { icon: Mail, label: 'Email Us', value: 'info@globeonexim.com\nexport@globeonexim.com', color: 'gradient-green', href: 'mailto:info@globeonexim.com' },
              { icon: Phone, label: 'Call Us', value: '+91 99999 99999\nMon–Sat, 9 AM – 7 PM IST', color: 'gradient-blue', href: 'tel:+919999999999' },
              { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with our export team instantly', color: 'gradient-green', href: 'https://wa.me/919999999999' },
            ].map(c => (
              <a key={c.label} href={c.href || '#'} target={c.href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="card-elevated p-6 flex gap-4 items-start">
                <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}><c.icon className="w-6 h-6 text-white" /></div>
                <div><p className="font-display font-bold text-brand-blue">{c.label}</p><p className="text-sm text-slate-600 mt-1 whitespace-pre-line">{c.value}</p></div>
              </a>
            ))}
            <div className="card-elevated p-2 overflow-hidden">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                <iframe title="Globeon Exim location" src="https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed" className="absolute inset-0 w-full h-full border-0" loading="lazy" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-3">
            <div className="card-elevated p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2"><div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center"><Send className="w-5 h-5 text-white" /></div><h2 className="font-display text-2xl font-bold text-brand-blue">Send an Inquiry</h2></div>
              <p className="text-slate-600 text-sm mb-7">Fill in your details and we&apos;ll get back within 12 working hours.</p>
              {status === 'success' ? (
                <div className="py-14 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full gradient-green flex items-center justify-center mb-5"><CheckCircle2 className="w-8 h-8 text-white" /></div>
                  <h3 className="font-display text-2xl font-bold text-brand-blue">Inquiry Sent!</h3>
                  <p className="text-slate-600 mt-2 max-w-md mx-auto">Thank you for reaching out. Our export team will contact you within 12 working hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline mt-7 !py-2.5 !px-5">Send Another</button>
                </div>
              ) : (
                <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" required value={form.name} onChange={onChange('name')} />
                  <Field label="Company Name" value={form.company} onChange={onChange('company')} />
                  <Field label="Email" type="email" required value={form.email} onChange={onChange('email')} />
                  <Field label="Phone Number" type="tel" value={form.phone} onChange={onChange('phone')} />
                  <Field label="Country" required value={form.country} onChange={onChange('country')} />
                  <div>
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Product Interested In <span className="text-brand-green">*</span></label>
                    <select required value={form.product} onChange={onChange('product')} className="mt-1.5 w-full h-11 px-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light focus:border-transparent">
                      <option value="">Select a product...</option>
                      {products.map(p => <option key={p.slug} value={p.name}>{p.name}</option>)}
                      <option>Other / Multiple</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Your Message <span className="text-brand-green">*</span></label>
                    <textarea required value={form.message} onChange={onChange('message')} rows={4} className="mt-1.5 w-full px-3 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light focus:border-transparent resize-none" placeholder="Tell us about your requirements, quantities, destination port..." />
                  </div>
                  <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-slate-500 flex items-center gap-2"><Clock className="w-3.5 h-3.5" />Response within 12 working hours</p>
                    <button type="submit" disabled={status === 'loading'} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
                      {status === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" />Sending...</> : <>Send Inquiry<Send className="w-4 h-4" /></>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, ...rest }) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{label}{required && <span className="text-brand-green"> *</span>}</label>
      <input required={required} {...rest} className="mt-1.5 w-full h-11 px-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light focus:border-transparent" />
    </div>
  );
}
