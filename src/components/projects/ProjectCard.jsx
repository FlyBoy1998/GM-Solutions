import { useContext } from "react";
import { MapContext } from "../../context/MapContext";

import { ChevronRight, MapPin } from "lucide-react";

export default function ProjectCard({ project }) {
  const { handleSelectProject } = useContext(MapContext);

  return (
    <li>
      <article className="flex gap-4 h-44 rounded-md bg-light-1">
        <div className="relative flex-1 rounded-md overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.alt}
            className="object-cover h-full w-full"
            loading="lazy"
          />
          <div className="project-marker absolute top-1.5 left-1.5 z-50">
            {project.id}
          </div>
        </div>
        <div className="flex flex-col justify-evenly flex-1">
          <h4 className="font-bold line-clamp-2">{project.title}</h4>
          <p className="flex items-center gap-1 text-xs">
            <MapPin className="size-5" aria-hidden />
            <span>{project.address}</span>
          </p>
          <p className="self-start py-1 px-2 text-sm rounded-md bg-light">
            {project.label}
          </p>
        </div>
        <button
          type="button"
          className="flex items-center cursor-pointer hover:scale-[1.3] focus-ring transition-transform ease-out duration-500"
          onClick={() => handleSelectProject(project)}
          title="View project location"
          aria-label={`View location for ${project.title}`}
        >
          <ChevronRight aria-hidden />
        </button>
      </article>
    </li>
  );
}
