import { useLocation, Outlet } from "react-router";

import MainNavigation from "../components/navigation/MainNavigation";
import Main from "./Main";
import Footer from "../components/footer/Footer";
import MobileNavigation from "../components/navigation/MobileNavigation";
import ProjectsMobileTabs from "../components/projects/ProjectsMobileTabs";

export default function RootLayout() {
  const location = useLocation();

  const isProjects = location.pathname === "/projects";
  const isServices = location.pathname === "/services";
  const isProjectDetails = location.pathname.includes("/projects/");

  return (
    <>
      <MobileNavigation />
      <MainNavigation />
      <Main>
        <Outlet />
      </Main>
      {isServices || isProjectDetails ? <Footer /> : null}
      {isProjects && <ProjectsMobileTabs />}
    </>
  );
}
