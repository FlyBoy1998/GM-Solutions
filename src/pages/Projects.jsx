import NavbarOffset from "../layout/NavbarOffset";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectsList from "../components/projects/ProjectsList";
import ProjectsMap from "../components/projects/ProjectsMap";

import { projects } from "../../dummy_data/data";

export default function Projects() {
  return (
    <NavbarOffset>
      <div
        id="projects-showcase"
        className="flex gap-3 flex-1 p-4 rounded-lg bg-gray-transparent"
      >
        <div className="flex flex-col flex-1">
          <h1 className="heading-md mb-3">Projects</h1>
          <p className="mb-5">
            Explore our completed projects across London and surrounding areas
          </p>
          <ProjectFilters />
          <ProjectsList />
        </div>
        <ProjectsMap projects={projects} />
      </div>
    </NavbarOffset>
  );
}
