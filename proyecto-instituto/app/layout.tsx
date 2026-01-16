"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <html lang="es">
      <body
        className="text-white"
        style={{
          backgroundImage: "url('/cura.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundAttachment: "fixed",
          backgroundColor: "#000",
        }}
      >
        <div className="relative w-full">
          <TopBar
            isSearchOpen={searchOpen}
            onToggleSearch={() => setSearchOpen(!searchOpen)}
          />

          {/* NAVBAR ↔ SEARCH */}
          <div className="w-full flex justify-center px-4 py-2">
            {searchOpen ? (
              <div
                className="
                  w-[1146px]
                  h-[66px]
                  flex items-center
                  backdrop-blur-md
                  bg-black/30
                  border border-red-500/60
                  rounded-xl
                  shadow-xl
                  px-6
                "
              >
                <input
                  type="text"
                  placeholder="Buscar…"
                  autoFocus
                  className="
                    w-full
                    bg-transparent
                    text-white
                    placeholder-zinc-400
                    outline-none
                    text-sm
                    tracking-wide
                  "
                />
              </div>
            ) : (
              <Navbar />
            )}
          </div>
        </div>

        <main>
          {children}
        </main>

        <footer className="p-10 bg-[#1a1a1a] text-center text-zinc-500 text-sm border-t border-zinc-800">
          © 2026 IES Cura Valera | Proyecto Next.js | ANDRÉS ARTERO ESPÍN
        </footer>
      </body>
    </html>
  );
}