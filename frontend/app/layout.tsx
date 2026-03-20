import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Casillero Virtual | Premium Logistics",
  description: "Tu puerta al mundo. Gestión de carga y logística internacional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-poppins`}>
        {children}
      </body>
    </html>
  );
}
