"use client";

import { useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/incorporation", label: "Incorporation" },
  { href: "/pms", label: "PMS" },
  { href: "/aif", label: "AIF" },
  { href: "/mutual-fund", label: "Mutual Fund" },
  { href: "/gift-city", label: "GIFT City" },
  { href: "/ipo-advisory", label: "IPO Advisory" },
];

interface NavbarProps {
  activePath: string;
}

export default function Navbar({ activePath }: NavbarProps) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("nav")) {
        document.getElementById("menu")?.classList.remove("open");
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const toggleMenu = () => {
    document.getElementById("menu")?.classList.toggle("open");
  };

  return (
    <header>
      <div className="container nav">
        <a className="logo" href="/">
          🌿 FinLeaf <span className="leaf">Legal</span>
          <small>Capital Markets Consultancy</small>
        </a>
        <nav>
          <ul id="menu">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={activePath === href ? "active" : ""}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn" href="/contact" style={{ padding: "9px 20px" }}>
                Talk to Us
              </a>
            </li>
          </ul>
          <button className="burger" onClick={toggleMenu}>☰</button>
        </nav>
      </div>
    </header>
  );
}
