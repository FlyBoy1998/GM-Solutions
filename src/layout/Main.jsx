import { useLocation } from "react-router";

import useNavbarHeight from "../hooks/useNavbarHeight";

export default function Main({ children }) {
  const { navHeight } = useNavbarHeight();

  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <main
      style={{ "--nav-height": `${navHeight}px` }}
      className={`wrapper ${isHome ? "root-bg-light" : ""} ${isHome ? "home-bg" : ""}`}
    >
      {children}
    </main>
  );
}
