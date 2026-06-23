import { useEffect, useState } from 'react';

interface PreloaderProps {
  onZoomStart: () => void;
  onComplete: () => void;
}

export default function Preloader({ onZoomStart, onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<'outline' | 'fill' | 'text' | 'zoom'>('outline');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('fill'), 400),
      setTimeout(() => setPhase('text'), 1800),
      setTimeout(() => {
        setPhase('zoom');
        onZoomStart();
      }, 2950),
      setTimeout(() => onComplete(), 3650),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onZoomStart, onComplete]);

  const isFilling = phase === 'fill' || phase === 'text' || phase === 'zoom';
  const showText = phase === 'text' || phase === 'zoom';
  const isZooming = phase === 'zoom';

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg)',
        opacity: isZooming ? 0 : 1,
        transform: isZooming ? 'scale(2.2)' : 'scale(1)',
        filter: isZooming ? 'blur(8px)' : 'blur(0px)',
        transition: isZooming
          ? 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 700ms cubic-bezier(0.4, 0, 0.2, 1)'
          : 'none',
        pointerEvents: isZooming ? 'none' : 'auto',
        willChange: 'transform, opacity, filter',
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{
          transform: isZooming ? 'scale(0.9)' : 'scale(1)',
          transition: isZooming
            ? 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)'
            : 'none',
        }}
      >
        <svg
          viewBox="0 0 90 110"
          className="w-[120px] h-[147px] sm:w-[140px] sm:h-[171px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="preloader-glass">
              <path d="M18,10 L22,95 Q22,100 27,100 L63,100 Q68,100 68,95 L72,10 Z" />
            </clipPath>
            <linearGradient id="preloader-liquid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent-hover)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Glass outline */}
          <path
            d="M18,10 L22,95 Q22,100 27,100 L63,100 Q68,100 68,95 L72,10"
            stroke="var(--color-text)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 600,
              strokeDashoffset: isFilling || showText ? 0 : 600,
              animation: phase === 'outline' ? 'preloader-draw 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none',
              opacity: isZooming ? 0 : 1,
              transition: 'opacity 300ms ease-out',
            }}
          />

          {/* Liquid fill group — clipped to glass */}
          <g clipPath="url(#preloader-glass)">
            {/* Main liquid body */}
            <rect
              x="18"
              y="10"
              width="54"
              height="90"
              fill="url(#preloader-liquid)"
              style={{
                transform: isFilling ? 'translateY(0)' : 'translateY(90px)',
                transition: phase === 'fill'
                  ? 'transform 1400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  : 'none',
                animation: showText && !isZooming ? 'preloader-liquid-inertia 400ms cubic-bezier(0.34, 1.56, 0.64, 1) 1' : 'none',
              }}
            />

            {/* Liquid surface wave */}
            {isFilling && !isZooming && (
              <path
                d="M-30,0 Q-22,-3 -15,0 T0,0 T15,0 T30,0 T45,0 T60,0 T75,0 T90,0 T105,0 T120,0 L120,6 L-30,6 Z"
                fill="var(--color-accent-hover)"
                opacity="0.35"
                style={{
                  transform: isFilling ? 'translateY(0)' : 'translateY(90px)',
                  transition: phase === 'fill'
                    ? 'transform 1400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    : 'none',
                  animation: isFilling ? 'preloader-wave 3s ease-in-out infinite' : 'none',
                }}
              />
            )}

            {/* Subtle vertical reflection */}
            <rect
              x="32"
              y="25"
              width="8"
              height="50"
              rx="4"
              fill="white"
              style={{ animation: 'preloader-glow 4s ease-in-out infinite' }}
            />
          </g>
        </svg>

        {/* Brand text — fade + slight upward reveal */}
        <div
          className="mt-2 text-center"
          style={{
            opacity: showText ? 1 : 0,
            transform: showText ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 150ms ease-out, transform 350ms ease-out',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(18px, 3vw, 24px)',
              letterSpacing: '0.15em',
              color: 'var(--color-text)',
            }}
          >
            ENTRE TRAGOS
          </span>
        </div>
      </div>
    </div>
  );
}
