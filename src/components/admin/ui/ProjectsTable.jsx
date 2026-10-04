import ProjectsTableHead from "./ProjectsTableHead";
import ProjectsTableRow from "./ProjectsTableRow";

export default function ProjectsTable({ projects }) {
  return (
    <table className="w-full text-sm border-separate border-spacing-y-5.5">
      <ProjectsTableHead />
      <tbody className="text-xs">
        {projects.map((project) => (
          <ProjectsTableRow key={project.id} project={project} />
        ))}
      </tbody>
    </table>
  );
}
