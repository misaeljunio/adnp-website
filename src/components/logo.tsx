type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 44, className = "" }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Circle background */}
      <circle cx="22" cy="22" r="22" fill="#0976B2" />
      {/* Cross */}
      <rect x="20" y="9" width="4" height="26" rx="2" fill="white" />
      <rect x="11" y="18" width="22" height="4" rx="2" fill="white" />
      {/* Sand dot accent at top of cross */}
      <circle cx="22" cy="9" r="3" fill="#DBC19C" />
    </svg>
  );
}

type LogoFullProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function LogoFull({ variant = "dark", className = "" }: LogoFullProps) {
  const textColor = variant === "light" ? "white" : "#735748";
  const subTextColor = variant === "light" ? "rgba(255,255,255,0.75)" : "#0976B2";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={44} />
      <div className="leading-tight">
        <p
          style={{ color: subTextColor, fontFamily: "var(--font-oswald), sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600 }}
        >
          Igreja
        </p>
        <p
          style={{ color: textColor, fontFamily: "var(--font-oswald), sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.05em", lineHeight: 1.1 }}
        >
          ADNP
        </p>
      </div>
    </div>
  );
}
