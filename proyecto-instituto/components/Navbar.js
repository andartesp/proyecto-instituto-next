"use client";

import MenuItem from "./MenuItem";

export default function Navbar() {
  const menuInicio = [
    { texto: "Plan de Centro", href: "/plan-centro" },
    { texto: "Plan Actuación Digital", href: "/pad" },
    { texto: "Otros documentos internos", href: "/documentos" },
  ];

  const menuNoticias = [
    { texto: "Jefatura de estudios", href: "/jefatura-estudios" },
    {
      texto: "Plan de Igualdad y Escuela: espacio de Paz",
      href: "/plan-igualdad",
    },
    { texto: "Trofeo Director", href: "/trofeo-director" },
    { texto: "Adultos", href: "/adultos" },
    { texto: "Vídeos y fotos", href: "/media" },
  ];

  const menuOferta = [
    { texto: "Oferta educativa", href: "/oferta-educativa" },
    { texto: "Departamentos", href: "/departamentos" },
    { texto: "BTOPA", href: "/btopa" },
    { texto: "ESPA", href: "/espa" },
  ];

  const menuBiblioteca = [
    { texto: "BiblioWeb", href: "/biblioweb" },
    { texto: "Blog", href: "/biblioteca-blog" },
  ];

  return (
    <nav className="w-full flex justify-center px-4 py-2 relative z-40">
      <div
        className="
          w-[970px]
          h-[66px]
          flex items-center
          backdrop-blur-md
          bg-black/30
          border border-red-500/60
          rounded-xl
          shadow-xl
        "
      >
        <ul className="flex gap-6 px-6">
          <MenuItem nombre="Inicio" links={menuInicio} />
          <MenuItem nombre="Noticias" links={menuNoticias} />
          <MenuItem nombre="Oferta Educativa" links={menuOferta} />
          <MenuItem nombre="Biblioteca Escolar" links={menuBiblioteca} />
          <MenuItem nombre="Contacto" />
        </ul>
      </div>
    </nav>
  );
}