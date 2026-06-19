import { projectDetailIcons } from "../../../constants/data";

import ProjectDetail from "./ProjectDetail";

export default function ProjectDetailsCard({ project }) {
  return (
    <div>
      <h2 className="heading-sm font-bold mb-1">Project details</h2>
      <div>
        {project.projectDetails.map((detail, index, arr) => {
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
