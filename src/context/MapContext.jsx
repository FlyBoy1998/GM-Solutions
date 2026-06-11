import { createContext, useState } from "react";

const MapContext = createContext({
  selectedProject: null,
  handleSelectProject: () => {},
  handleClearSelection: () => {},
});

export default function MapContextProvider({ children }) {
  const [selectedProject, setSelectedProject] = useState(null);

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  function handleClearSelection() {
    setSelectedProject(null);
  }

  const ctxValue = {
    selectedProject,
    handleSelectProject,
    handleClearSelection,
  };

  return <MapContext.Provider value={ctxValue}>{children}</MapContext.Provider>;
}

export { MapContext };
