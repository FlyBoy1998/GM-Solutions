import ProjectsTableHead from "./ProjectsTableHead";
import ProjectsTableRow from "./ProjectsTableRow";

import { projects } from "../../../../dummy_data/data";

export default function ProjectsTable() {
  const sortedProjects = projects.slice().sort((a, b) => {
    const dateA = new Date(a.completionDate);
    const dateB = new Date(b.completionDate);
    return dateB - dateA;
  });

  return (
    <div className="col-span-3 row-start-3 row-end-5 rounded-lg shadow-md bg-white">
      <table className="h-full w-full text-sm">
        <ProjectsTableHead />
        <tbody className="text-xs">
          {sortedProjects.slice(0, 6).map((project) => (
            <ProjectsTableRow key={project.id} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
