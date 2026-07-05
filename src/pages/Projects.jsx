import { useContext } from "react";

import { ProjectsTabsContext } from "../context/ProjectsTabsContext";

import Main from "../layout/Main";

import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectsList from "../components/projects/ProjectsList";
import ProjectsMap from "../components/projects/ProjectsMap";

import useFilteredProjects from "../hooks/useFilteredProjects";

export default function Projects() {
  const { activeTab } = useContext(ProjectsTabsContext);

  const { filteredProjects } = useFilteredProjects();

  return (
    <Main>
      <section className="grid grid-cols-[40%_1fr] relative h-full gap-3 rounded-lg max-lg:grid-cols-1 max-lg:gap-0">
        <div
          className={`nav-offset-height flex flex-col col-span-1 ${activeTab === "projects" ? "flex" : "hidden"} lg:flex`}
        >
          <p className="eyebrow">Our work</p>
          <h1 className="heading-lg mb-3">Projects</h1>
          <p className="mb-5 text-gray-dark">
            Explore our completed projects across London and surrounding areas
          </p>
          <ProjectFilters />
          <p className="mt-4 text-xs text-gray-dark">
            {filteredProjects.length} projects found
          </p>
          <ProjectsList />
        </div>
        <div
          className={`nav-offset-height col-span-1 ${activeTab === "map" ? "block" : "hidden"} lg:block`}
        >
          <ProjectsMap />
        </div>
      </section>
    </Main>
  );
}
