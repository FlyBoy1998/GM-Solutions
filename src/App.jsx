import { createBrowserRouter, RouterProvider } from "react-router";
import MapContextProvider from "./context/MapContext";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { element: <Services />, path: "services" },
      { element: <Projects />, path: "projects" },
      { element: <Gallery />, path: "gallery" },
      { element: <Contact />, path: "contact" },
    ],
  },
]);

function App() {
  return (
    <MapContextProvider>
      <RouterProvider router={router} />
    </MapContextProvider>
  );
}

export default App;
