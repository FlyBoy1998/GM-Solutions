import { Outlet } from "react-router";

import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <section id="hero" className="wrapper relative min-h-screen z-10">
        <Outlet />
      </section>
    </>
  );
}
