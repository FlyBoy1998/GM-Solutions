import { Folder, PoundSterling, FolderKanban, TrendingUp } from "lucide-react";

import SectionHeader from "../ui/SectionHeader";
import ServicePerformanceMetric from "./ServicePerformanceMetric";

export default function ServicePerformanceOverview({ projects }) {
  const projectsCount = projects.length;

  return (
    <div className="col-start-1 col-end-3 row-start-3 row-end-4 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white max-lg:col-span-3 max-md:col-span-full">
      <SectionHeader
        title="Service Performance Overview"
        description="Track key metrics and insights into your services' overall performance."
      />
      <div className="flex-1 grid grid-cols-2 gap-2 max-lg:grid-cols-1">
        <ServicePerformanceMetric
          label="Total Projects"
          icon={Folder}
          iconColors="text-orange-500 bg-orange-100"
          value={projectsCount}
        />
        <ServicePerformanceMetric
          label="Total Revenue"
          icon={PoundSterling}
          iconColors="text-green-500 bg-green-100"
          value="£245,000"
        />
        <ServicePerformanceMetric
          label="Avg. Project Value"
          icon={FolderKanban}
          iconColors="text-blue-500 bg-blue-100"
          value="$13,000"
        />
        <ServicePerformanceMetric
          label="Conversion Rate"
          icon={TrendingUp}
          iconColors="text-red-500 bg-red-100"
          value="24%"
        />
      </div>
    </div>
  );
}
