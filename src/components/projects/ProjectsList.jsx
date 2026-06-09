import useFilteredProjects from "../../hooks/useFilteredProjects";

import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const { filteredProjects } = useFilteredProjects();

  return (
    <ul className="flex h-full flex-col gap-3 overflow-y-auto mt-4">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
}
