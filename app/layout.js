import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-titulo",
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-corpo",
  display: "swap",
});

export const metadata = {
  title: "Histórificando — Currículo em Ação",
  description: "Simulação social de turma para aulas de História do Ensino Médio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${cormorantGaramond.variable} ${lora.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
