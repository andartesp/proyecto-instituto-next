"use client";

import Link from "next/link";

export default function TopBar({ onToggleSearch, isSearchOpen }) {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-black/65
        backdrop-blur-lg
        border-b border-white/10
      "
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          flex items-center justify-between
          px-8
          py-6
        "
      >

        <div className="flex items-center gap-5">
          <Link href="/">
            <img
              src="/curaicon.png"
              alt="IES Cura Valera"
              className="h-12 w-12 cursor-pointer"
            />
          </Link>

          <Link
  href="/"
  className="uppercase tracking-widest font-serif text-xl leading-tight inline-block"
>
  IES CURA VALERA, HUÉRCAL-OVERA 
  <br /> 
  <span className="text-xs lowercase italic opacity-80 font-sans tracking-normal">
    Junta de Andalucía
  </span>
</Link>
        </div>

        <button
          onClick={onToggleSearch}
          className="
            flex items-center gap-2
            text-sm tracking-widest uppercase
            hover:text-red-400
            transition
          "
        >
          🔍<span>{isSearchOpen ? "Close" : "Search"}</span>
  
        </button>
      </div>
    </header>
  );
}