import { useState } from "react";
import { NavLink, useLocation } from "react-router";

import logoImg from "/images/gm-solutions-logo.png";

import HamburgerBtn from "./HamburgerButton";

export default function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header
      className={`w-full ${isHome ? "fixed" : "sticky"} top-0 z-1000 bg-[linear-gradient(to_right,rgba(245,244,240,0.6)_55%,rgba(245,244,240,0))]`}
    >
      <nav id="main-nav" className="wrapper flex justify-between py-4">
        <NavLink to="/" className="focus-ring">
          <img src={logoImg} className="logo" alt="GM Solutions logo" />
        </NavLink>
        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link focus-ring ${isActive ? "nav-link-active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="services"
              className={({ isActive }) =>
                `nav-link focus-ring ${isActive ? "nav-link-active" : ""}`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                `nav-link focus-ring ${isActive ? "nav-link-active" : ""}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `nav-link focus-ring ${isActive ? "nav-link-active" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <NavLink
            to="contact"
            className="nav-link focus-ring bg-black text-white"
          >
            Get a Quote
          </NavLink>
        </ul>
        <HamburgerBtn
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        />
      </nav>
    </header>
  );
}
