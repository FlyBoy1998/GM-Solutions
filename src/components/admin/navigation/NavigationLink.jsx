import { NavLink } from "react-router";

export default function NavigationLink({
  to,
  iconClasses,
  activeClass,
  onClick,
  icon: Icon,
  children,
}) {
  let classes = iconClasses + " p-3 rounded-full ";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `admin-mobile-nav-link ${isActive ? activeClass : ""}`
      }
      onClick={onClick}
    >
      <Icon size={42} strokeWidth={3} className={classes} aria-hidden />
      <span className="max-sm:text-sm">{children}</span>
    </NavLink>
  );
}
