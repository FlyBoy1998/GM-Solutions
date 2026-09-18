import { MapPin } from "lucide-react";

import { formatToCapitalize } from "../../../../utils/utils";
import { projectDetailIcons } from "../../../../constants/data";

import ProjectDetail from "../../../ui/ProjectDetail";

export default function ProjectModalDetails({ project }) {
  const projectDetails = [
    { label: "Project Type", value: project?.label },
    { label: "Location", value: project?.address },
    { label: "Completion Date", value: project?.completion_date },
    { label: "Duration", value: project?.duration },
    { label: "Project Size", value: project?.project_size },
    { label: "Budget Range", value: project?.budget_range },
  ];

  let projectStatusClasses = "px-3 py-1 rounded-md";

  if (project?.status === "completed") {
    projectStatusClasses += " project-status-completed";
  } else if (project?.status === "in progress") {
    projectStatusClasses += " project-status-in-progress";
  } else {
    projectStatusClasses += " project-status-draft";
  }

  return (
    <div>
      <h2 className="heading-sm">{project?.title}</h2>
      <div className="flex flex-col gap-2 py-2">
        <div className="text-sm text-gray-dark">{project?.label}</div>
        <div className="flex items-center gap-1 text-sm">
          <MapPin size={20} aria-hidden />
          <span>{project?.address}</span>
        </div>
        <div
          className={`inline-flex self-start items-center gap-1 text-sm ${projectStatusClasses}`}
        >
          {formatToCapitalize(project?.status || "")}
        </div>
      </div>
      <div className="flex flex-col py-2">
        {projectDetails.map((detail, index, arr) => {
          const Icon = projectDetailIcons[detail.label];
          const isLastItem = index + 1 === arr.length;

          return (
            <ProjectDetail
              key={detail.label}
              detail={detail}
              isLastItem={isLastItem}
              Icon={Icon}
            />
          );
        })}
      </div>
    </div>
  );
}
