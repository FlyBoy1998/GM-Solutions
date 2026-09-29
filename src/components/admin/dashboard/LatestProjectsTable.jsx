import noProjectsImage from "../../../../public/images/no-projects-image.png";

import SectionHeader from "../ui/SectionHeader";
import ProjectsTable from "../ui/ProjectsTable";
import NoDataPlaceholder from "../ui/NoDataPlaceholder";

import useProjects from "../../../hooks/useProjects";

export default function LatestProjectsTable() {
  const { data: projects = [], isLoading, error } = useProjects();

  const sortedProjects = projects?.slice().sort((a, b) => {
    const dateA = new Date(a.completion_date);
    const dateB = new Date(b.completion_date);

    return dateB - dateA;
  });

  return (
    <div className="col-span-3 row-start-3 row-end-5 py-4 px-4 rounded-lg shadow-md bg-white max-xl:col-span-full">
      <SectionHeader
        title="Latest Projects"
        description="View your most recent projects and their current status."
      />
      {!projects.length ? (
        <NoDataPlaceholder
          imageSrc={noProjectsImage}
          heading="No Projects Yet"
          description="Start building your portfolio by adding your first project."
          secondaryDescription="Showcase your interior renovation work and inspire future clients."
          buttonText="Add New Project"
          navigateTo="/admin/projects/new"
        />
      ) : (
        <ProjectsTable projects={sortedProjects?.slice(0, 6)} />
      )}
    </div>
  );
}
