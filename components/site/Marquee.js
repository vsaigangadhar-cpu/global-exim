export default function Marquee({ items = [] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden mask-fade-x">
      <div className="flex gap-14 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 font-display font-semibold text-ink-900/40 text-2xl md:text-3xl tracking-tight">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
