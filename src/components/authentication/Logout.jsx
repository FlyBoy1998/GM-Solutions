import { LogOut } from "lucide-react";

import { useLogout } from "../../hooks/useLogout";

export default function Logout() {
  const { logout, isLoading } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <button
      className="cursor-pointer flex items-center gap-2 w-full mt-auto p-3 text-sm rounded-md text-white hover:bg-primary-transparent transition-colors duration-400 ease-out focus-ring"
      onClick={handleLogout}
    >
      <LogOut size={16} aria-hidden />{" "}
      <span>{isLoading ? "Logging Out..." : "Log Out"}</span>
    </button>
  );
}
