interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'line';
  className?: string;
}

export default function SectionDivider({ variant = 'curve', className = '' }: SectionDividerProps) {
  if (variant === 'line') {
    return (
      <div className={`flex justify-center py-2 ${className}`}>
        <div
          style={{
            width: '48px',
            height: '1px',
            backgroundColor: 'var(--color-border)',
          }}
        />
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div className={`w-full overflow-hidden leading-[0] ${className}`} style={{ transform: 'rotate(180deg)' }}>
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: '40px' }}
        >
          <path
            d="M0,20 C200,40 400,0 600,20 C800,40 1000,0 1200,20 L1200,40 L0,40 Z"
            fill="var(--color-bg-alt)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: '40px' }}
      >
        <path
          d="M0,20 C200,40 400,0 600,20 C800,40 1000,0 1200,20 L1200,40 L0,40 Z"
          fill="var(--color-bg)"
        />
      </svg>
    </div>
  );
}
