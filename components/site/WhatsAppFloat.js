'use client';

import whatsapp from '@/app/public/whatsapp.png';
import Image from 'next/image';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hello%20Globeon%20Exim%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] shadow-card flex items-center justify-center group transition-all hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src={whatsapp}
        alt="WhatsApp"
        width={100}
        height={100}
        priority
        className="object-fit"
      />

      <span className="absolute right-16 bg-white text-slate-800 text-sm font-medium rounded-lg shadow-card opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}