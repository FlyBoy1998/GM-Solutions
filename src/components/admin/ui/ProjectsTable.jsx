import ProjectsTableHead from "./ProjectsTableHead";
import ProjectsTableRow from "./ProjectsTableRow";

export default function ProjectsTable({ projects }) {
  return (
    <table className="h-full w-full text-sm">
      <ProjectsTableHead />
      <tbody className="text-xs">
        {projects.map((project) => (
          <ProjectsTableRow key={project.id} project={project} />
        ))}
      </tbody>
    </table>
  );
}
