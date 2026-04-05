import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assembleia de Deus Novas de Paz",
  description: "Igreja ADNP — fé, esperança e comunhão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
