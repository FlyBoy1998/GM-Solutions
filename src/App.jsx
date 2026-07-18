import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MapContextProvider from "./context/MapContext";
import ProjectsTabsContextProvider from "./context/ProjectsTabsContext";
import MobileNavigationContextProvider from "./context/MobileNavigationContext";

import ProtectedRoute from "./components/authentication/ProtectedRoute";

import RootLayout from "./layout/RootLayout";
import Admin from "./pages/Admin";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import AdminLayout from "./layout/AdminLayout";

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
        path: "dashboard",
        children: [
          {
            index: true,
            element: <AdminDashboard />,
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
