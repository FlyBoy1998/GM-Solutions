import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";

export default function NavigationLink({ onClick, to, icon: Icon, children }) {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) =>
        `mobile-nav-link focus-ring ${isActive ? "border-primary bg-orange-100" : "border-transparent"}`
      }
    >
      <div className="flex items-center gap-3">
        <Icon size={20} strokeWidth={3} className="text-primary" aria-hidden />
        <span className="text-lg text-black">{children}</span>
      </div>
      <ChevronRight
        size={20}
        strokeWidth={3}
        className="text-primary"
        aria-hidden
      />
    </NavLink>
  );
}
