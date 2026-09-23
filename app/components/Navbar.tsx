"use client";

import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();

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
    <>
      <style>{`
        .navbar-header {
          position: sticky; top: 0; z-index: 100;
          background: var(--header-bg);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--header-border);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .navbar-inner {
          width: min(1180px, 92%); margin: auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 72px;
        }
        .logo {
          display: flex; align-items: center; gap: 10px;
          font-size: 1.25rem; font-weight: 800; letter-spacing: -0.3px;
        }
        .logo .leaf { color: var(--gold2); }
        .logo small {
          display: block; font-size: 0.58rem; font-weight: 500;
          color: var(--mut); letter-spacing: 2.5px;
          text-transform: uppercase; margin-top: -2px;
        }
        .nav-right { display: flex; align-items: center; gap: 8px; }
        nav ul {
          display: flex; gap: 6px; list-style: none; align-items: center;
        }
        nav a {
          font-size: 0.88rem; font-weight: 500; color: var(--mut);
          transition: color 0.2s, background 0.2s;
          padding: 6px 10px; border-radius: 6px;
        }
        nav a:hover { color: var(--ink); background: var(--nav-hover-bg); }
        nav a.active { color: var(--gold2); }

        /* CTA button */
        .nav-cta {
          display: inline-flex; align-items: center; gap: 6px;
          background: linear-gradient(135deg, var(--gold) 0%, #b8911e 100%);
          color: #05100e; font-weight: 700; font-size: 0.88rem;
          padding: 9px 20px; border-radius: 10px;
          transition: all 0.25s; border: none; cursor: pointer;
          white-space: nowrap;
        }
        .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,162,39,0.4); }

        /* Theme toggle */
        .theme-toggle {
          display: flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 10px;
          background: var(--toggle-bg);
          border: 1px solid var(--toggle-border);
          cursor: pointer; font-size: 1.1rem;
          transition: all 0.25s; flex-shrink: 0;
          color: var(--toggle-color);
        }
        .theme-toggle:hover { transform: rotate(20deg) scale(1.1); }

        /* burger */
        .burger {
          display: none; font-size: 1.4rem; background: none;
          border: none; color: var(--gold2); cursor: pointer; padding: 4px;
        }

        @media (max-width: 900px) {
          nav ul {
            display: none; position: fixed;
            top: 72px; left: 0; right: 0;
            background: var(--header-bg); backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            flex-direction: column; padding: 20px 24px; gap: 4px;
            border-bottom: 1px solid var(--header-border);
            z-index: 99;
          }
          nav ul.open { display: flex; }
          nav ul li { width: 100%; }
          nav a { display: block; padding: 10px 14px; }
          .burger { display: block; }
        }
      `}</style>

      <header className="navbar-header">
        <div className="navbar-inner">
          <a className="logo" href="/">
            🌿 FinLeaf <span className="leaf">Legal</span>
            <small>Capital Markets Consultancy</small>
          </a>

          <div className="nav-right">
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
                  <a className="nav-cta" href="/contact">Talk to Us</a>
                </li>
              </ul>
            </nav>

            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            <button className="burger" onClick={toggleMenu} aria-label="Menu">
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
