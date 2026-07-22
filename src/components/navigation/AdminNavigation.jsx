import { NavLink } from "react-router";

import {
  LayoutDashboard,
  FolderOpen,
  Toolbox,
  Image,
  Users,
  Settings,
} from "lucide-react";

import Logout from "../authentication/Logout";

import logo from "../../../public/images/gm-solutions-logo-dark.png";

export default function AdminNavigation() {
  return (
    <nav className="grid-span-1 flex flex-col p-10 bg-midnight-blue">
      <NavLink to="/admin" className="w-40 mb-6 rounded-md focus-ring">
        <img src={logo} className="logo" alt="Gm Solutions logo" />
      </NavLink>
      <ul className="list-none flex flex-col gap-3">
        <li>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              `admin-nav-link focus-ring ${isActive ? "bg-gray-transparent" : ""}`
            }
          >
            <LayoutDashboard size={16} aria-hidden />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              `admin-nav-link focus-ring ${isActive ? "bg-gray-transparent" : ""}`
            }
          >
            <FolderOpen size={16} aria-hidden />
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="services"
            className={({ isActive }) =>
              `admin-nav-link focus-ring ${isActive ? "bg-gray-transparent" : ""}`
            }
          >
            <Toolbox size={16} aria-hidden />
            <span>Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="media"
            className={({ isActive }) =>
              `admin-nav-link focus-ring ${isActive ? "bg-gray-transparent" : ""}`
            }
          >
            <Image size={16} aria-hidden />
            <span>Media</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="leads"
            className={({ isActive }) =>
              `admin-nav-link focus-ring ${isActive ? "bg-gray-transparent" : ""}`
            }
          >
            <Users size={16} aria-hidden />
            <span>Leads</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              `admin-nav-link focus-ring ${isActive ? "bg-gray-transparent" : ""}`
            }
          >
            <Settings size={16} aria-hidden />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
      <Logout />
    </nav>
  );
}
