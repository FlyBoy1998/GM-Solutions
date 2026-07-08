import { useContext } from "react";
import { NavLink } from "react-router";

import { Phone, Mail } from "lucide-react";

import useNavbarHeight from "../../hooks/useNavbarHeight";

import ContactInfoItem from "../contact/ContactInfoItem";

import { MobileNavigationContext } from "../../context/MobileNavigationContext";

import CtaButton from "../ui/CtaButton";

export default function MobileNavigation() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(
    MobileNavigationContext,
  );
  const { navHeight } = useNavbarHeight();

  return (
    <nav
      style={{ "--nav-height": `${navHeight}px` }}
      className={`mobile-nav  ${isMobileMenuOpen ? "open" : ""}`}
    >
      <ul className="flex flex-col gap-6 list-none">
        <li>
          <NavLink
            onClick={() => setIsMobileMenuOpen(false)}
            to="/"
            className={({ isActive }) =>
              `mobile-nav-link focus-ring ${isActive ? "border-b border-primary" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setIsMobileMenuOpen(false)}
            to="/services"
            className={({ isActive }) =>
              `mobile-nav-link focus-ring ${isActive ? "border-b border-primary" : ""}`
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setIsMobileMenuOpen(false)}
            to="/projects"
            className={({ isActive }) =>
              `mobile-nav-link focus-ring ${isActive ? "border-b border-primary" : ""}`
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setIsMobileMenuOpen(false)}
            to="/contact"
            className={({ isActive }) =>
              `mobile-nav-link focus-ring ${isActive ? "border-b border-primary" : ""}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <CtaButton
            variant="primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </CtaButton>
        </li>

        <div className="flex flex-col gap-4">
          <ContactInfoItem
            Icon={Phone}
            title="Call Us"
            primary="(234) 345-4674"
            secondary="Mon - Fri: 8am - 6pm"
          />
          <ContactInfoItem
            Icon={Mail}
            title="Email Us"
            primary="info@gmsolutions.com"
            secondary="We reply within 24 hours"
          />
        </div>
      </ul>
    </nav>
  );
}
