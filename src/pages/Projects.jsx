import NavbarOffset from "../layout/NavbarOffset";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectsList from "../components/projects/ProjectsList";
import ProjectsMap from "../components/projects/ProjectsMap";

import useFilteredProjects from "../hooks/useFilteredProjects";

export default function Projects() {
  const { filteredProjects } = useFilteredProjects();

  return (
    <NavbarOffset>
      <div className="flex items-start gap-3 rounded-lg">
        <div className="flex max-h-[calc(100vh-var(--nav-height))] flex-1 flex-col">
          <h1 className="heading-md mb-3">Projects</h1>
          <p className="mb-5">
            Explore our completed projects across London and surrounding areas
          </p>
          <ProjectFilters />
          <p className="mt-4 text-xs text-gray-dark">
            {filteredProjects.length} projects found
          </p>
          <ProjectsList />
        </div>
        <div className="h-[calc(100vh-var(--nav-height))] flex-2">
          <ProjectsMap />
        </div>
      </div>
    </NavbarOffset>
  );
}
