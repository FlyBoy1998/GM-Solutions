import { NavLink } from "react-router";

export default function TabButton({ tab }) {
  return (
    <NavLink
      to={tab.to}
      end={tab.to === ""}
      className={({ isActive }) =>
        `settings-tab ${isActive ? "settings-tab-active" : null}`
      }
    >
      <tab.icon size={16} strokeWidth={3} aria-hidden />
      <span>{tab.label}</span>
    </NavLink>
  );
}
