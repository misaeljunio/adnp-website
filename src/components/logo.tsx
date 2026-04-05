import Image from "next/image";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 44, className = "" }: LogoMarkProps) {
  return (
    <Image
      src="/adnp-website/logo.png"
      alt="ADNP Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}

type LogoFullProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function LogoFull({ variant = "dark", className = "" }: LogoFullProps) {
  const textColor = variant === "light" ? "white" : "#735748";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={44} />
      <div className="leading-tight">
        <p
          style={{ color: textColor, fontFamily: "var(--font-oswald), sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.05em", lineHeight: 1.1 }}
        >
          Assembleia de Deus
        </p>
        <p
          style={{ color: "#DBC19C", fontFamily: "var(--font-oswald), sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}
        >
          Novas de Paz
        </p>
      </div>
    </div>
  );
}
