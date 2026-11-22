import { useContext } from "react";
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

import NavigationLink from "./NavigationLink";

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
              <NavigationLink
                to="/admin/dashboard"
                icon={House}
                iconClasses="text-blue-500 bg-blue-100"
                activeClass="bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </NavigationLink>
            </li>
            <li>
              <NavigationLink
                to="/admin/projects"
                icon={Folder}
                iconClasses="text-orange-500 bg-orange-100"
                activeClass="bg-orange-50"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavigationLink>
            </li>
            <li>
              <NavigationLink
                to="/admin/services"
                icon={Toolbox}
                iconClasses="text-green-500 bg-green-100"
                activeClass="bg-green-50"
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavigationLink>
            </li>
            <li>
              <NavigationLink
                to="/admin/media"
                icon={Image}
                iconClasses="text-purple-500 bg-purple-100"
                activeClass="bg-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Media
              </NavigationLink>
            </li>
            <li>
              <NavigationLink
                to="/admin/leads"
                icon={Users}
                iconClasses="text-red-500 bg-red-100"
                activeClass="bg-red-50"
                onClick={() => setIsOpen(false)}
              >
                Leads
              </NavigationLink>
            </li>
            <li>
              <NavigationLink
                to="/admin/settings"
                icon={Settings}
                iconClasses="text-fuchsia-500 bg-fuchsia-100"
                activeClass="bg-fuchsia-50"
                onClick={() => setIsOpen(false)}
              >
                Settings
              </NavigationLink>
            </li>
          </ul>

          <div className="flex flex-col gap-2 mt-auto p-2">
            <button
              className="cursor-pointer flex items-center gap-4 rounded-lg font-bold"
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
          </div>
        </nav>
      ) : null}
    </>
  );
}
