import { createBrowserRouter, RouterProvider } from "react-router";

import MapContextProvider from "./context/MapContext";
import ProjectsTabsContextProvider from "./context/ProjectsTabsContext";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

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
]);

function App() {
  return (
    <MapContextProvider>
      <ProjectsTabsContextProvider>
        <RouterProvider router={router} />
      </ProjectsTabsContextProvider>
    </MapContextProvider>
  );
}

export default App;
