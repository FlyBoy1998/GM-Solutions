import NavbarOffset from "../layout/NavbarOffset";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectsList from "../components/projects/ProjectsList";
import ProjectsMap from "../components/projects/ProjectsMap";

export default function Projects() {
  return (
    <NavbarOffset>
      <div
        id="projects-showcase"
        className="flex items-start gap-3 rounded-lg bg-gray-transparent p-4"
      >
        <div className="flex max-h-[calc(100vh-var(--nav-height)-2rem)] flex-1 flex-col">
          <h1 className="heading-md mb-3">Projects</h1>
          <p className="mb-5">
            Explore our completed projects across London and surrounding areas
          </p>
          <ProjectFilters />
          <ProjectsList />
        </div>
        <div className="h-[calc(100vh-var(--nav-height)-2rem)] flex-2">
          <ProjectsMap />
        </div>
      </div>
    </NavbarOffset>
  );
}
