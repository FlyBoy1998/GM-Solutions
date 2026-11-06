import logo from "../../../../public/images/gm-solutions-logo-dark.png";

import { useContext } from "react";
import { NavLink, useLocation } from "react-router";
import { AdminMobileNavigationContext } from "../context/AdminMobileNavigationContext";

import HamburgerBtn from "../../navigation/HamburgerButton";

export default function AdminMobileHeader() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/admin";

  const { isOpen, setIsOpen } = useContext(AdminMobileNavigationContext);

  return (
    <header
      id="mobile-header"
      className="hidden justify-between items-center px-6 py-3 shadow-lg bg-midnight-blue max-lg:flex"
    >
      <NavLink to="/admin" onClick={() => setIsOpen(false)}>
        <img src={logo} className="logo" alt="GM Solutions logo" />
      </NavLink>
      {isLoginPage ? null : (
        <HamburgerBtn
          isOpen={isOpen}
          onToggle={() => setIsOpen((prev) => !prev)}
        />
      )}
    </header>
  );
}
