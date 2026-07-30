import HamburgerBtn from "../../navigation/HamburgerButton";
import CtaButton from "../../ui/CtaButton";
import ProjectFilters from "./ProjectFilters";
import ProjectsCategories from "./ProjectsCategories";
import ProjectsManagementTable from "./ProjectsManagementTable";
import ProjectsOverview from "./ProjectsOverview";

export default function AdminProjects() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_auto_1fr_1fr] gap-4 p-6 overflow-y-auto">
      <div className="hidden col-span-full max-lg:block">
        <HamburgerBtn />
      </div>
      <div className="flex justify-between items-center col-span-full">
        <div>
          <h1 className="heading-md">Projects</h1>
          <p className="text-gray-dark">
            Manage and showcase your interior renovation projects.
          </p>
        </div>
        <div>
          <CtaButton variant="primary">Add New Project</CtaButton>
        </div>
      </div>
      <ProjectFilters />
      <ProjectsManagementTable />
      <ProjectsOverview />
      <ProjectsCategories />
    </div>
  );
}
