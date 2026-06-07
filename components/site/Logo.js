import Image from 'next/image';
import Link from 'next/link';
import globeonLogo from '@/app/public/globeon.png';

export default function Logo({ variant = 'dark' }) {
  const isLight = variant === 'light';

  return (
    <Link href="/" className="flex items-center">
      <Image
        src={globeonLogo}
        alt="Globeon Exim"
        width={78}
        height={78}
        priority
        className="w-42 h-42 object-contain"
      />

      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-[17px] ${
            isLight ? 'text-white' : 'text-ink-900'
          }`}
        >
          Globeon{' '}
          <span className={isLight ? 'text-brand-green-light' : 'text-brand-green'}>
            Exim
          </span>
        </span>

        <span
          className={`text-[9.5px] uppercase tracking-[0.28em] font-semibold mt-1 ${
            isLight ? 'text-white/60' : 'text-ink-400'
          }`}
        >
          Global Trade · Est. India
        </span>
      </div>
    </Link>
  );
}