import { useLocation, Outlet } from "react-router";

import MainNavigation from "../components/navigation/MainNavigation";
import MobileNavigation from "../components/navigation/MobileNavigation";
import ProjectsMobileTabs from "../components/projects/ProjectsMobileTabs";

export default function RootLayout() {
  const location = useLocation();

  const isProjects = location.pathname === "/projects";

  return (
    <>
      <MobileNavigation />
      <MainNavigation />
      <Outlet />
      {isProjects && <ProjectsMobileTabs />}
    </>
  );
}
