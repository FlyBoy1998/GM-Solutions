import { useLocation } from "react-router";

import useNavbarHeight from "../hooks/useNavbarHeight";
import useMaintenanceStatus from "../hooks/useMaintenanceStatus";

export default function Main({ children }) {
  const { navHeight } = useNavbarHeight();
  const { data: isMaintenance = false } = useMaintenanceStatus();

  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <main
      style={{ "--nav-height": `${navHeight}px` }}
      className={`wrapper ${isHome ? "root-bg-light" : ""} ${isHome && !isMaintenance ? "home-bg" : isHome && isMaintenance ? "maintenance-bg" : ""}`}
    >
      {children}
    </main>
  );
}
