import ProjectCard from "./ProjectCard";

export default function ProjectsList({ projects }) {
  return (
    <ul className="flex flex-col gap-3 overflow-y-auto mt-4 py-3">
      {projects?.map((project, index) => {
        const thumbnail = project?.project_images.find(
          (item) => item.image_type === "thumbnail",
        ).storage_path.publicUrl;

        return (
          <ProjectCard
            key={project.id}
            project={project}
            thumbnail={thumbnail}
            index={index + 1}
          />
        );
      })}
    </ul>
  );
}
