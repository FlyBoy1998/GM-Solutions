import DashboardStatsCard from "./DashboardStatsCard";

import { ClipboardCheck, Folder, Map, Image } from "lucide-react";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-4 row-start-2 row-end-3 grid-rows-auto gap-3 col-span-full max-lg:grid-cols-2">
      <DashboardStatsCard
        title="Projects completed"
        index={120}
        icon={<ClipboardCheck className="text-white" aria-hidden />}
        bgColor="bg-blue-500"
      />
      <DashboardStatsCard
        title="Active projects"
        index={5}
        icon={<Folder className="text-white" aria-hidden />}
        bgColor="bg-orange-500"
      />
      <DashboardStatsCard
        title="Map Views"
        index={100}
        icon={<Map className="text-white" aria-hidden />}
        bgColor="bg-green-500"
      />
      <DashboardStatsCard
        title="Media Items"
        index={100}
        icon={<Image className="text-white" aria-hidden />}
        bgColor="bg-purple-500"
      />
    </div>
  );
}
