import { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router";

import { MobileNavigationContext } from "../../context/MobileNavigationContext";

import logoImg from "/images/gm-solutions-logo.png";

import HamburgerBtn from "./HamburgerButton";

import { useScrollY } from "../../hooks/useScrollY";

export default function MainNavigation() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(
    MobileNavigationContext,
  );

  const location = useLocation();

  const { scrollY } = useScrollY();

  const isHome = location.pathname === "/";
  const isContact = location.pathname === "/contact";

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`w-full ${isHome || isContact ? "fixed" : "sticky"} top-0 z-1000`}
    >
      <nav
        id="main-nav"
        className={`wrapper flex justify-between py-4 ${isMobileMenuOpen ? "navbar-surface" : "navbar-transparent"} ${scrollY > 0 && "navbar-scrolled"} transition-all duration-300 ease-out`}
      >
        <NavLink to="/" className="rounded-md focus-ring">
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
