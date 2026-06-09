import { createContext, useState } from "react";

const MapContext = createContext({
  selectedProject: null,
  handleSelectProject: () => {},
});

export default function MapContextProvider({ children }) {
  const [selectedProject, setSelectedProject] = useState(null);

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  const ctxValue = {
    selectedProject,
    handleSelectProject,
  };

  return <MapContext.Provider value={ctxValue}>{children}</MapContext.Provider>;
}

export { MapContext };
