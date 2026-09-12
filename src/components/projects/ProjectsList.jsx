import useProjects from "../../hooks/useProjects";
import useFilteredProjects from "../../hooks/useFilteredProjects";
import toast from "react-hot-toast";

import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const { data: projects = [], isLoading, error } = useProjects();
  const { filteredProjects } = useFilteredProjects(projects);

  return (
    <ul className="flex flex-col gap-3 overflow-y-auto mt-4 py-3">
      {filteredProjects.map((project) => {
        const thumbnail = project?.project_images.find(
          (item) => item.image_type === "thumbnail",
        ).storage_path.publicUrl;

        return (
          <ProjectCard
            key={project.id}
            project={project}
            thumbnail={thumbnail}
          />
        );
      })}
    </ul>
  );
}
