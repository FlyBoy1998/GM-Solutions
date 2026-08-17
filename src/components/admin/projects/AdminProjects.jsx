import PageHeader from "../ui/PageHeader";
import CtaButton from "../../ui/CtaButton";
import ProjectFilters from "./ProjectFilters";
import ProjectsCategories from "./ProjectsCategories";
import ProjectsManagementTable from "./ProjectsManagementTable";
import ProjectsOverview from "./ProjectsOverview";

export default function AdminProjects() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_auto_1fr_1fr] gap-4 p-6 overflow-y-auto max-xl:grid-rows-[repeat(4,auto)]">
      <PageHeader
        heading="Projects"
        description="Manage and showcase your interior renovation projects."
      >
        <div className="max-lg:hidden">
          <CtaButton variant="primary">Add New Project</CtaButton>
        </div>
      </PageHeader>

      <ProjectFilters />
      <ProjectsManagementTable />
      <ProjectsOverview />
      <ProjectsCategories />
    </div>
  );
}
