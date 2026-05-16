import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { element: <Services />, path: "services" },
      { element: <Gallery />, path: "gallery" },
      { element: <Contact />, path: "contact" },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
