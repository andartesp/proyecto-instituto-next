import Link from 'next/link';
import './globals.css'; // Esto es para el diseño

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <nav className="p-4 bg-zinc-900 flex justify-between items-center border-b border-red-700">
          <h1 className="font-bold">IES CURA VALERA</h1>
          <ul className="flex gap-4">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/noticias">Noticias</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        
        {children}
      </body>
    </html>
  );
}