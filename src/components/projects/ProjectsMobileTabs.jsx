import { useContext } from "react";

import { ProjectsTabsContext } from "../../context/ProjectsTabsContext";

import { FolderOpenDot, Map } from "lucide-react";

import ProjectMobileTabButton from "./ProjectsMobileTabButton";

export default function ProjectsMobileTabs() {
  const { activeTab, setActiveTab } = useContext(ProjectsTabsContext);

  return (
    <div className="sticky bottom-0 w-full py-4 z-9999 border-t-2 border-primary rounded-t-lg bg-surface shadow-lg lg:hidden">
      <div className="flex wrapper">
        <ProjectMobileTabButton
          isActive={activeTab === "projects"}
          Icon={FolderOpenDot}
          label="Projects"
          onClick={() => setActiveTab("projects")}
        />
        <ProjectMobileTabButton
          isActive={activeTab === "map"}
          Icon={Map}
          label="Map"
          onClick={() => setActiveTab("map")}
        />
      </div>
    </div>
  );
}
