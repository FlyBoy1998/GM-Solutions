import projectsPageLoader from "../../public/images/projects-page-loader.gif";
import projectsPageErrorImage from "../../public/images/projects-page-error-image.png";

import { useContext } from "react";
import { ProjectsTabsContext } from "../context/ProjectsTabsContext";
import useProjects from "../hooks/useProjects";
import useFilteredProjects from "../hooks/useFilteredProjects";

import Main from "../layout/Main";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectsList from "../components/projects/ProjectsList";
import ProjectsMap from "../components/projects/ProjectsMap";
import PageLoader from "../components/ui/PageLoader";
import FetchErrorState from "../components/ui/FetchErrorState";

export default function Projects() {
  const { activeTab } = useContext(ProjectsTabsContext);

  const {
    data: projects = [],
    isLoading,
    error,
    refetch,
    isFetching,
  } = useProjects();
  const { filteredProjects } = useFilteredProjects(projects);

  return (
    <Main>
      {isLoading ? (
        <PageLoader
          imageSrc={projectsPageLoader}
          message="Loading projects..."
          className="items-center"
        />
      ) : !isLoading && error ? (
        <FetchErrorState
          imageSrc={projectsPageErrorImage}
          heading="We couldn't load the projects"
          description="We're having trouble fetching our projects right now."
          onRetry={() => refetch()}
          isRetrying={isFetching}
        />
      ) : (
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
            <ProjectsList projects={filteredProjects} />
          </div>
          <div
            className={`nav-offset-height col-span-1 ${activeTab === "map" ? "block" : "hidden"} lg:block`}
          >
            <ProjectsMap />
          </div>
        </section>
      )}
    </Main>
  );
}
