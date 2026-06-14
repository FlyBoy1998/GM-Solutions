import { NavLink } from "react-router";
import logoImg from "/images/gm-solutions-logo.png";

export default function MainNavigation() {
  return (
    <header className="w-full fixed top-0 z-11 bg-[linear-gradient(to_right,rgba(245,244,240,0.6)_55%,rgba(245,244,240,0))]">
      <nav id="main-nav" className="wrapper flex justify-between py-4">
        <NavLink to="/" className="focus-ring">
          <img src={logoImg} className="logo" alt="GM Solutions logo" />
        </NavLink>
        <ul className="flex items-center gap-4">
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
      </nav>
    </header>
  );
}
