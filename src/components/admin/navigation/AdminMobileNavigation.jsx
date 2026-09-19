import { useContext } from "react";
import { NavLink } from "react-router";
import {
  House,
  Folder,
  Toolbox,
  Image,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

import { AdminMobileNavigationContext } from "../context/AdminMobileNavigationContext";

import { useUser } from "../../../hooks/useUser";
import { useLogout } from "../../../hooks/useLogout";
import useMobileHeaderHeight from "../../../hooks/useMobileHeaderHeight";

import NavLinkIcon from "./NavLinkIcon";

export default function AdminMobileNavigation() {
  const { isAuthenticated } = useUser();
  const { logout, isLoading } = useLogout();

  const { isOpen, setIsOpen } = useContext(AdminMobileNavigationContext);

  const { mobileHeaderHeight } = useMobileHeaderHeight();

  function handleLogout() {
    logout();
  }

  return (
    <>
      {isAuthenticated ? (
        <nav
          style={{ "--mobile-header-height": `${mobileHeaderHeight}px` }}
          className={`admin-mobile-nav ${isOpen ? "open" : ""} min-h-[calc(100vh-var(--mobile-header-height))] shadow-2xl overflow-y-auto`}
        >
          <ul className="list-none flex flex-col gap-2 p-2 max-sm:p-0.5">
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `admin-mobile-nav-link ${isActive ? "bg-blue-50" : ""}`
                }
              >
                <NavLinkIcon
                  Icon={House}
                  className="text-blue-500 bg-blue-100"
                />
                <span className="max-sm:text-sm">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/admin/projects"
                className={({ isActive }) =>
                  `admin-mobile-nav-link ${isActive ? "bg-orange-50" : ""}`
                }
              >
                <NavLinkIcon
                  Icon={Folder}
                  className="text-orange-500 bg-orange-100"
                />
                <span className="max-sm:text-sm">Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/admin/services"
                className={({ isActive }) =>
                  `admin-mobile-nav-link ${isActive ? "bg-green-50" : ""}`
                }
              >
                <Toolbox
                  size={42}
                  strokeWidth={3}
                  className="p-3 rounded-full text-green-500 bg-green-100"
                  aria-hidden
                />
                <span className="max-sm:text-sm">Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/admin/media"
                className={({ isActive }) =>
                  `admin-mobile-nav-link ${isActive ? "bg-purple-50" : ""}`
                }
              >
                <Image
                  size={42}
                  strokeWidth={3}
                  className="p-3 rounded-full text-purple-500 bg-purple-100"
                  aria-hidden
                />
                <span className="max-sm:text-sm">Media</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/admin/leads"
                className={({ isActive }) =>
                  `admin-mobile-nav-link ${isActive ? "bg-red-50" : ""}`
                }
              >
                <Users
                  size={42}
                  strokeWidth={3}
                  className="p-3 rounded-full text-red-500 bg-red-100"
                  aria-hidden
                />
                <span className="max-sm:text-sm">Leads</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsOpen(false)}
                to="/admin/settings"
                className={({ isActive }) =>
                  `admin-mobile-nav-link ${isActive ? "bg-fuchsia-50" : ""}`
                }
              >
                <Settings
                  size={42}
                  strokeWidth={3}
                  className="p-3 rounded-full text-fuchsia-500 bg-fuchsia-100"
                  aria-hidden
                />
                <span className="max-sm:text-sm">Settings</span>
              </NavLink>
            </li>
          </ul>

          <button
            className="cursor-pointer mt-auto flex items-center gap-4 p-2 rounded-lg font-bold"
            onClick={handleLogout}
          >
            <LogOut
              size={42}
              strokeWidth={3}
              className="p-3 rounded-full text-slate-500 bg-slate-100"
              aria-hidden
            />
            <span className="text-slate-500 max-sm:text-sm">
              {isLoading ? "Logging Out..." : "Log Out"}
            </span>
          </button>
        </nav>
      ) : null}
    </>
  );
}
