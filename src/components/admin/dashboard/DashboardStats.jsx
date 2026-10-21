import { ClipboardCheck, Folder, Map, Image } from "lucide-react";
import useProjects from "../../../hooks/useProjects";

import DashboardStatsCard from "./DashboardStatsCard";

export default function DashboardStats() {
  const { data: projects = [] } = useProjects();

  const completedProjects = projects?.filter(
    (project) => project.status === "completed",
  ).length;
  const activeProjects = projects?.filter(
    (project) => project.status === "in-progress",
  ).length;
  const projectsImages = projects?.reduce((total, currentItem) => {
    total += currentItem.project_images.length;

    return total;
  }, 0);

  return (
    <div className="grid grid-cols-4 row-start-2 row-end-3 grid-rows-auto gap-3 col-span-full max-xl:grid-cols-2 max-sm:grid-cols-1">
      <DashboardStatsCard
        title="Projects completed"
        value={completedProjects}
        icon={ClipboardCheck}
        bgColor="bg-blue-500"
      />
      <DashboardStatsCard
        title="Active Projects"
        value={activeProjects}
        icon={Folder}
        bgColor="bg-orange-500"
      />
      <DashboardStatsCard
        title="Map Views"
        value={projects?.length}
        icon={Map}
        bgColor="bg-green-500"
      />
      <DashboardStatsCard
        title="Projects Images"
        value={projectsImages}
        icon={Image}
        bgColor="bg-purple-500"
      />
    </div>
  );
}
