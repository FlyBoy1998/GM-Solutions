import { Outlet } from "react-router";

import MainNavigation from "../components/navigation/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
