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
          <span className="mx-8">{item}</span>
          <span className="text-white/40">•</span>
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-[#4B4139]">
      <div className="marquee-track flex w-max text-[#F4F4F4] py-3.5 shadow-sm">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex">
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}