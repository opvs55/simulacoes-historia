import { Playfair_Display, PT_Serif } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-titulo",
  display: "swap",
});
const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-corpo",
  display: "swap",
});

export const metadata = {
  title: "Módulo Simulações — Currículo em Ação",
  description: "Simulação social de turma para aulas de História do Ensino Médio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${playfairDisplay.variable} ${ptSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
