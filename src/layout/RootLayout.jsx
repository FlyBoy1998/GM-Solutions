import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";

import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    const rootEl = document.getElementById("root");

    if (!rootEl) return;

    rootEl.className =
      location.pathname === "/" || location.pathname === "/contact"
        ? "root-bg-light"
        : "root-bg-dark";
  }, [location.pathname]);

  return (
    <>
      <MainNavigation />
      <section id="hero" className="wrapper relative min-h-screen z-10">
        <Outlet />
      </section>
    </>
  );
}
