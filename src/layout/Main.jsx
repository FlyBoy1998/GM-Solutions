import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Main({ children }) {
  const [navHeight, setNavHeight] = useState(0);

  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const nav = document.getElementById("main-nav");
    if (!nav) return;

    const updateHeight = () => {
      setNavHeight(nav.offsetHeight);
    };
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(nav);

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <main
      style={{ "--nav-height": `${navHeight}px` }}
      className={`wrapper ${isHome ? "root-bg-light" : ""}`}
    >
      {children}
    </main>
  );
}
