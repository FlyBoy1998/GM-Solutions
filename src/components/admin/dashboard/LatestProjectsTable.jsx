import noProjectsImage from "../../../../public/images/no-projects-image.png";
import projectsFetchErrorImage from "../../../../public/images/projects-fetch-error-image.png";

import SectionHeader from "../ui/SectionHeader";
import ProjectsTable from "../ui/ProjectsTable";
import NoDataPlaceholder from "../ui/NoDataPlaceholder";
import DataFetchError from "../ui/DataFetchError";

export default function LatestProjectsTable({ projects, error = false }) {
  return (
    <div className="col-span-3 row-start-3 row-end-5 py-4 px-4 rounded-lg shadow-md bg-white max-xl:col-span-full max-md:hidden">
      <SectionHeader
        title="Latest Projects"
        description="View your most recent projects and their current status."
      />
      {error ? (
        <DataFetchError
          imageSrc={projectsFetchErrorImage}
          heading="Unable to fetch latest projects"
          description="We encountered an error while loading the projects."
          secondaryDescription="Please try again or check your connection."
        />
      ) : !projects.length ? (
        <NoDataPlaceholder
          imageSrc={noProjectsImage}
          heading="No Projects Yet"
          description="Start building your portfolio by adding your first project."
          secondaryDescription="Showcase your interior renovation work and inspire future clients."
          buttonText="Add New Project"
          navigateTo="/admin/projects/new"
        />
      ) : (
        <ProjectsTable projects={projects} />
      )}
    </div>
  );
}
