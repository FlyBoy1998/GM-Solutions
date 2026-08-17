import { Folder, CircleCheck, CircleEllipsis, Pencil } from "lucide-react";

import ProjectsOverviewItem from "./ProjectsOverviewItem";

import { projects } from "../../../../dummy_data/data";

export default function ProjectsOverview() {
  const totalProjectsCount = projects.length;
  const completedProjectsCount = projects.filter(
    (project) => project.status === "completed",
  ).length;
  const inProgressProjectsCount = projects.filter(
    (project) => project.status === "in progress",
  ).length;
  const draftProjectsCount = projects.filter(
    (project) => project.status === "draft",
  ).length;

  return (
    <div className="col-start-4 col-end-5 row-start-3 row-end-4 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white max-xl:col-start-1 max-xl:col-end-3 max-xl:row-start-5 max-xl:row-end-6">
      <h3 className="mb-2 font-bold">Projects Overview</h3>
      <div className="flex-1 flex flex-col justify-evenly">
        <ProjectsOverviewItem
          Icon={Folder}
          value={totalProjectsCount}
          label="Total Projects"
          iconClassName="text-orange-800 bg-orange-100"
        />
        <ProjectsOverviewItem
          Icon={CircleCheck}
          value={completedProjectsCount}
          label="Completed"
          iconClassName="text-green-500 bg-green-100"
        />
        <ProjectsOverviewItem
          Icon={CircleEllipsis}
          value={inProgressProjectsCount}
          label="In Progress"
          iconClassName="text-blue-500 bg-blue-100"
        />
        <ProjectsOverviewItem
          Icon={Pencil}
          value={draftProjectsCount}
          label="Drafts"
          iconClassName="text-orange-500 bg-orange-100"
        />
      </div>
    </div>
  );
}
