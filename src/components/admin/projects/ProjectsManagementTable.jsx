import noProjectsImage from "../../../../public/images/no-projects-image.png";
import noMatchingProjectsImage from "../../../../public/images/no-matching-projects.png";

import ProjectsTable from "../ui/ProjectsTable";
import Pagination from "../ui/Pagination";
import NoDataPlaceholder from "../ui/NoDataPlaceholder";

import usePagination from "../../../hooks/usePagination";

import useProjects from "../../../hooks/useProjects";
import useProjectsFilters from "../../../hooks/useProjectsFilters";

export default function ProjectsManagementTable() {
  const { data: projects = [], isLoading, error } = useProjects();
  const { filteredProjects } = useProjectsFilters(projects);

  const { currentPage, itemsPerPage, totalPages, currentData, setCurrentPage } =
    usePagination(filteredProjects);

  return (
    <div
      className={`flex flex-col col-span-3 row-start-3 row-end-5 ${!projects.length ? "min-h-min" : "min-h-145"} px-4 rounded-lg shadow-md bg-white max-xl:col-span-full max-md:hidden`}
    >
      {!projects.length ? (
        <NoDataPlaceholder
          imageSrc={noProjectsImage}
          heading="No Projects Yet"
          description="Start building your portfolio by adding your first project."
          secondaryDescription="Showcase your interior renovation work and inspire your clients."
          buttonText="Add New Project"
          navigateTo="/admin/projects/new"
        />
      ) : (
        <ProjectsTable projects={currentData} />
      )}

      {!filteredProjects.length && (
        <NoDataPlaceholder
          imageSrc={noMatchingProjectsImage}
          heading="No matching projects found"
          description="We couldn't find any projects that match your search or filter criteria."
          secondaryDescription="Try adjusting your search term or filters to see more results."
        />
      )}

      {filteredProjects.length > itemsPerPage ? (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      ) : null}
    </div>
  );
}
