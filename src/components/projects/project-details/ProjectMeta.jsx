import { Calendar, Clock } from "lucide-react";

import { formatDate } from "../../../utils/utils";

export default function ProjectMeta({ project }) {
  return (
    <div className="flex flex-wrap gap-8 my-2">
      <div className="flex items-center gap-2">
        <Calendar size={30} className="text-primary" aria-hidden />
        <p className="flex flex-col">
          <span className="font-bold">Completed</span>
          <span>{formatDate(project.completionDate)}</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Clock size={30} className="text-primary" aria-hidden />
        <p className="flex flex-col">
          <span className="font-bold">Duration</span>
          <span>{project.duration}</span>
        </p>
      </div>
    </div>
  );
}
