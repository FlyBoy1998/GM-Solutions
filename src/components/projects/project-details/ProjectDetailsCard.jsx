import { projectDetailIcons } from "../../../constants/data";

import ProjectDetail from "./ProjectDetail";

export default function ProjectDetailsCard({ project }) {
  const projectDetails = [
    { label: "Project Type", value: project?.label },
    { label: "Location", value: project?.address },
    { label: "Completion Date", value: project?.completion_date },
    { label: "Duration", value: project?.duration },
    { label: "Project Size", value: project?.project_size },
    { label: "Budget Range", value: project?.budget_range },
  ];

  return (
    <div>
      <h2 className="heading-sm font-bold mb-1">Project details</h2>
      <div>
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
