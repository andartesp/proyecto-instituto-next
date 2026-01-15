"use client";

import Link from 'next/link';
import '../styles/navbar.css';

export default function MenuItem({ nombre, links }) {
  return (
    <li className="menu-item">
      <div className="menu-link">
        <span>{nombre}</span>
        {links?.length > 0 && <span className="icon-plus">+</span>}
      </div>

      {links?.length > 0 && (
        <ul className="dropdown">
          {links.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="dropdown-item">
                {item.texto}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}