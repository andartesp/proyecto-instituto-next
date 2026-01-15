import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#0f0f0f] text-white">
        <header className="py-10 text-center border-b border-zinc-800">
          <h1 className="text-3xl font-serif tracking-widest uppercase">IES CURA VALERA</h1>
          <p className="text-blue-400 text-xs font-bold tracking-widest mt-2">HUÉRCAL-OVERA (ALMERÍA)</p>
        </header>

        <Navbar />

        <main>{children}</main>
        
        <footer className="p-10 mt-10 bg-zinc-900 text-center text-zinc-500 text-sm border-t border-zinc-800">
          © 2026 IES Cura Valera | Proyecto Next.js
        </footer>
      </body>
    </html>
  );
}