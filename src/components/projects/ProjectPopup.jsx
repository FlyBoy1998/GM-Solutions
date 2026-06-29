import { Link } from "react-router";
import { Popup } from "react-leaflet";

import {
  AlarmClockCheck,
  Calendar,
  CirclePile,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { formatDate } from "../../utils/utils";

export default function ProjectPopup({ project }) {
  return (
    <Popup className="project-popup">
      <div className="flex gap-3 max-md:flex-col">
        <div className="grid grid-cols-2 gap-3 flex-1 p-2 rounded-md bg-light-1">
          <figure className="col-span-full max-md:h-34">
            <img
              src={project.imageUrl}
              alt={project.alt}
              className="h-full w-full object-cover rounded-md"
              loading="lazy"
            />
          </figure>

          <figure className="flex flex-col h-full max-md:h-14">
            <img
              src={project.popupBeforeImage}
              className="flex-1 h-full w-full object-cover rounded-md"
              alt={`${project.title} before image`}
              loading="lazy"
            />
            <figcaption className="text-center">Before</figcaption>
          </figure>

          <figure className="flex flex-col h-full max-md:h-14">
            <img
              src={project.popupAfterImage}
              className="flex-1 h-full w-full object-cover rounded-md"
              alt={`${project.title} after image`}
              loading="lazy"
            />
            <figcaption className="text-center">After</figcaption>
          </figure>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="heading-popup mb-1 leading-6">
            <span className="project-marker">{project.id}</span> {project.title}
          </h3>
          <div className="self-start flex items-center gap-1 mb-2 px-2 py-1 text-xs rounded-md bg-light-1">
            <span>
              <MapPin
                className="inline-block"
                size={16}
                strokeWidth={2}
                aria-hidden
              />
            </span>
            <span>{project.address}</span>
          </div>
          <div className="mb-3">
            <p className="text-gray-dark text-xs leading-4">
              {project.description}
            </p>
          </div>
          <div
            id="project-popup-meta"
            className="flex flex-col gap-3 mb-2 p-2 rounded-md bg-light-1"
          >
            <p>
              <AlarmClockCheck
                className="inline-block align-[-0.135rem]"
                size={12}
                strokeWidth={3}
                aria-hidden
              />
              &nbsp;<span className="font-bold">Completed:</span>{" "}
              {formatDate(project.completionDate)}
            </p>
            <p>
              <Calendar
                className="inline-block align-[-0.135rem]"
                size={12}
                strokeWidth={3}
                aria-hidden
              />
              &nbsp;<span className="font-bold">Duration:</span>{" "}
              {project.duration}
            </p>
            <p>
              <CirclePile
                className="inline-block align-[-0.135rem]"
                size={12}
                strokeWidth={3}
                aria-hidden
              />
              &nbsp;<span className="font-bold">Materials:</span>{" "}
              {project.materials.slice(0, 3).join(", ")}
            </p>
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="flex justify-center items-center justify-self-end gap-1 mt-auto py-2 rounded-md text-xs text-center text-white! font-bold bg-primary hover:bg-primary-transparent transition-all duration-400 ease-out focus-ring"
          >
            View Project Details <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </Popup>
  );
}
