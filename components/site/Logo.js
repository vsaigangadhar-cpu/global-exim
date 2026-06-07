import Link from 'next/link';

export default function Logo({ variant = 'dark' }) {
  const isLight = variant === 'light';
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative w-10 h-10 rounded-xl gradient-blue flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
        <svg viewBox="0 0 32 32" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="16" cy="16" r="11" strokeLinecap="round" />
          <path d="M5 16h22M16 5c3 3.5 4.5 7 4.5 11S19 24.5 16 27M16 5c-3 3.5-4.5 7-4.5 11S13 24.5 16 27" strokeLinecap="round" />
        </svg>
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-brand-green-light border-2 border-white" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold text-lg tracking-tight ${isLight ? 'text-white' : 'text-brand-blue'}`}>Globeon<span className="text-brand-green">.</span>Exim</span>
        <span className={`text-[10px] uppercase tracking-[0.18em] font-medium mt-0.5 ${isLight ? 'text-white/70' : 'text-slate-500'}`}>Global Trade Partner</span>
      </div>
    </Link>
  );
}
