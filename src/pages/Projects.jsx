import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectsList from "../components/projects/ProjectsList";
import ProjectsMap from "../components/projects/ProjectsMap";

import useFilteredProjects from "../hooks/useFilteredProjects";
import Main from "../layout/Main";

export default function Projects() {
  const { filteredProjects } = useFilteredProjects();

  return (
    <Main>
      <section className="grid grid-cols-[40%_1fr] h-full gap-3 rounded-lg">
        <div className="flex flex-col nav-offset-height col-span-1">
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
        <div className="h-full col-span-1">
          <ProjectsMap />
        </div>
      </section>
    </Main>
  );
}
