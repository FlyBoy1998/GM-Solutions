import { createContext, useState } from "react";

const ProjectsTabsContext = createContext({
  activeTab: "",
  setActiveTab: () => {},
});

export default function ProjectsTabsContextProvider({ children }) {
  const [activeTab, setActiveTab] = useState("projects");

  const ctxValue = {
    activeTab,
    setActiveTab,
  };

  return (
    <ProjectsTabsContext.Provider value={ctxValue}>
      {children}
    </ProjectsTabsContext.Provider>
  );
}

export { ProjectsTabsContext };
