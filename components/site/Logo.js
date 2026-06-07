import Link from 'next/link';

export default function Logo({ variant = 'dark' }) {
  const isLight = variant === 'light';
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-11 h-11 rounded-lg gradient-blue flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
        <svg viewBox="0 0 32 32" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="11.5" />
          <ellipse cx="16" cy="16" rx="4.5" ry="11.5" />
          <path d="M4.5 16h23" />
          <path d="M6 11h20M6 21h20" opacity="0.5" />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-brand-green-light ring-2 ring-white" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-bold text-[17px] tracking-tight ${isLight ? 'text-white' : 'text-ink-900'}`}>
          Globeon <span className={isLight ? 'text-brand-green-light' : 'text-brand-green'}>Exim</span>
        </span>
        <span className={`text-[9.5px] uppercase tracking-[0.28em] font-semibold mt-1 ${isLight ? 'text-white/60' : 'text-ink-400'}`}>Global Trade · Est. India</span>
      </div>
    </Link>
  );
}
