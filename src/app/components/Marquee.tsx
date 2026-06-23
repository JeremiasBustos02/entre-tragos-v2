interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const content = (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center shrink-0 uppercase tracking-[0.25em] text-[11px] font-semibold"
        >
          <span
            className="mx-8"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {item}
          </span>
          <span style={{ color: 'var(--color-border)' }}>•</span>
        </div>
      ))}
    </>
  );

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div
        className="marquee-track flex w-max py-3.5"
        style={{ color: 'var(--color-text)' }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex">
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}