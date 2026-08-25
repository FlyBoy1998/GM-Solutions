import SectionHeader from "../ui/SectionHeader";
import ProjectsTable from "../ui/ProjectsTable";

import { projects } from "../../../../dummy_data/data";

export default function LatestProjectsTable() {
  const sortedProjects = projects.slice().sort((a, b) => {
    const dateA = new Date(a.completionDate);
    const dateB = new Date(b.completionDate);

    return dateB - dateA;
  });

  return (
    <div className="col-span-3 row-start-3 row-end-5 py-4 px-4 rounded-lg shadow-md bg-white max-xl:col-span-full">
      <SectionHeader
        title="Latest Projects"
        description="View your most recent projects and their current status."
      />
      <ProjectsTable projects={sortedProjects.slice(0, 6)} />
    </div>
  );
}
