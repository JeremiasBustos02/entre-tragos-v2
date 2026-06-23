interface ServiceCurveProps {
  width?: number;
  opacity?: number;
  className?: string;
}

export default function ServiceCurve({
  width = 120,
  opacity = 0.3,
  className = '',
}: ServiceCurveProps) {
  const height = Math.round(width / 4);

  const d = `M 0 ${height * 0.5} C ${width * 0.3} ${height * 0.1}, ${width * 0.7} ${height * 0.9}, ${width} ${height * 0.5}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      className={className}
      aria-hidden="true"
    >
      <path
        d={d}
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}