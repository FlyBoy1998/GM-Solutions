import { useContext } from "react";
import { NavLink } from "react-router";
import { AdminMobileNavigationContext } from "../context/AdminMobileNavigationContext";

import logo from "../../../../public/images/gm-solutions-logo-dark.png";

import HamburgerBtn from "../../navigation/HamburgerButton";

export default function AdminMobileHeader() {
  const { isOpen, setIsOpen } = useContext(AdminMobileNavigationContext);

  return (
    <header
      id="mobile-header"
      className="hidden justify-between items-center px-6 py-3 shadow-lg bg-midnight-blue max-lg:flex"
    >
      <NavLink to="/admin" onClick={() => setIsOpen(false)}>
        <img src={logo} className="logo" alt="GM Solutions logo" />
      </NavLink>
      <HamburgerBtn
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      />
    </header>
  );
}
