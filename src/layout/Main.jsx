import { useLocation } from "react-router";

import useNavbarHeight from "../hooks/useNavbarHeight";

export default function Main({ children }) {
  const { navHeight } = useNavbarHeight();

  const location = useLocation();

  const isHome = location.pathname === "/";
  const isServices = location.pathname === "/services";

  return (
    <main
      style={{ "--nav-height": `${navHeight}px` }}
      className={`wrapper ${isHome || isServices ? "root-bg-light" : ""} ${isHome ? "home-bg" : ""} ${isServices ? "services-bg" : ""}`}
    >
      {children}
    </main>
  );
}
