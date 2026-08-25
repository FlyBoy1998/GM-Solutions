import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MapContextProvider from "./context/MapContext";
import ProjectsTabsContextProvider from "./context/ProjectsTabsContext";
import MobileNavigationContextProvider from "./context/MobileNavigationContext";

import ProtectedRoute from "./components/authentication/ProtectedRoute";

import RootLayout from "./layout/RootLayout";
import Admin from "./pages/Admin";
import AdminLogin from "./components/admin/auth/AdminLogin";
import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import AdminProjects from "./components/admin/projects/AdminProjects";
import AdminServices from "./components/admin/services/AdminServices";
import AdminMedia from "./components/admin/media/AdminMedia";
import AdminLeads from "./components/admin/leads/AdminLeads";
import AdminSettings from "./components/admin/settings/AdminSettings";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import AdminLayout from "./layout/AdminLayout";
import GeneralSettings from "./components/admin/settings/tabs/general/GeneralSettings";
import SiteInformation from "./components/admin/settings/tabs/site-information/SiteInformation";
import ContactSocial from "./components/admin/settings/tabs/contact-social/ContactSocial";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Home /> },
      { element: <Services />, path: "services" },
      { element: <Projects />, path: "projects" },
      { element: <ProjectDetails />, path: "projects/:id" },
      { element: <Contact />, path: "contact" },
    ],
  },
  {
    element: <AdminLayout />,
    path: "/admin",
    children: [
      {
        index: true,
        element: <AdminLogin />,
      },
      {
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "projects",
            element: <AdminProjects />,
          },
          {
            path: "services",
            element: <AdminServices />,
          },
          {
            path: "media",
            element: <AdminMedia />,
          },
          {
            path: "leads",
            element: <AdminLeads />,
          },
          {
            path: "settings",
            element: <AdminSettings />,
            children: [
              { index: true, element: <GeneralSettings /> },
              { path: "site-information", element: <SiteInformation /> },
              { path: "contact", element: <ContactSocial /> },
            ],
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MobileNavigationContextProvider>
        <MapContextProvider>
          <ProjectsTabsContextProvider>
            <RouterProvider router={router} />
          </ProjectsTabsContextProvider>
        </MapContextProvider>
      </MobileNavigationContextProvider>
    </QueryClientProvider>
  );
}

export default App;
