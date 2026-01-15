"use client";

import MenuItem from './MenuItem';

export default function Navbar() {

  const menuInicio = [
    { texto: 'Plan de Centro', href: '/plan-centro' },
    { texto: 'Plan Actuación Digital', href: '/pad' },
    { texto: 'Otros documentos internos', href: '/documentos' },
  ];

  const menuNoticias = [
    { texto: 'Jefatura de estudios', href: '/jefatura-estudios' },
    { texto: 'Plan de Igualdad y Escuela: espacio de Paz', href: '/plan-igualdad' },
    { texto: 'Trofeo Director', href: '/trofeo-director' },
    { texto: 'Adultos', href: '/adultos' },
    { texto: 'Vídeos y fotos', href: '/media' },
  ];

  const menuOferta = [
    { texto: 'Oferta educativa', href: '/oferta-educativa' },
    { texto: 'Departamentos', href: '/departamentos' },
    { texto: 'BTOPA', href: '/btopa' },
    { texto: 'ESPA', href: '/espa' },
  ];

  const menuBiblioteca = [
    { texto: 'BiblioWeb', href: '/biblioweb' },
    { texto: 'Blog', href: '/biblioteca-blog' },
  ];

  return (
    <nav className="w-full bg-[#111111] py-10 px-4 relative z-50">
      <div className="max-w-6xl mx-auto">
        <ul className="flex bg-[#1a1a1a] rounded-lg border border-zinc-800 shadow-2xl">
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