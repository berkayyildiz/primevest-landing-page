export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const primary = light ? "#ffffff" : "#0c2340";
  const accent = light ? "#8ec8e8" : "#1a8fc4";
  const accentLight = light ? "#b0ddf0" : "#6cb8d9";

  return (
    <svg
      viewBox="0 0 280 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Primevest Investment"
    >
      {/* Icon - chart with arrow in circle */}
      <g transform="translate(2, 2) scale(0.56)">
        {/* Circular arc */}
        <path
          d="M15 85 C15 85, 10 45, 50 25 C50 25, 85 45, 85 85"
          stroke={accent}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Bar chart */}
        <rect x="30" y="55" width="10" height="30" rx="2" fill={accentLight} />
        <rect x="45" y="42" width="10" height="43" rx="2" fill={accent} />
        <rect x="60" y="30" width="10" height="55" rx="2" fill={primary} />
        {/* Arrow */}
        <path
          d="M35 45 L65 18 L72 12"
          stroke={primary}
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="75,5 78,18 65,15" fill={primary} />
      </g>

      {/* Text */}
      <g transform="translate(62, 0)">
        <text
          x="0"
          y="28"
          fill={primary}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="24"
          fontWeight="800"
          letterSpacing="2.5"
        >
          PRIMEVEST
        </text>
        <text
          x="0"
          y="50"
          fill={accent}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="16"
          fontWeight="600"
          letterSpacing="4"
        >
          INVESTMENT
        </text>
      </g>
    </svg>
  );
}
