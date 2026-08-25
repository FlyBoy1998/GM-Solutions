import SectionHeader from "../ui/SectionHeader";
import ServicePerformanceMetric from "./ServicePerformanceMetric";

import { Folder, DollarSign, FolderKanban, TrendingUp } from "lucide-react";

export default function ServicePerformanceOverview() {
  return (
    <div className="col-start-1 col-end-3 row-start-3 row-end-4 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Service Performance Overview"
        description="Track key metrics and insights into your services' overall performance."
      />
      <div className="flex-1 grid grid-cols-2 gap-2 max-lg:grid-cols-1">
        <ServicePerformanceMetric
          label="Total Projects"
          icon={
            <Folder
              className="p-2 rounded-md text-orange-500 bg-orange-50"
              size={40}
              aria-hidden
            />
          }
          value={18}
        />
        <ServicePerformanceMetric
          label="Total Revenue"
          icon={
            <DollarSign
              className="p-2 rounded-md text-green-500 bg-green-50"
              size={40}
              aria-hidden
            />
          }
          value="$245,000"
        />
        <ServicePerformanceMetric
          label="Avg. Project Value"
          icon={
            <FolderKanban
              className="p-2 rounded-md text-blue-500 bg-blue-50"
              size={40}
              aria-hidden
            />
          }
          value="$13,000"
        />
        <ServicePerformanceMetric
          label="Conversion Rate"
          icon={
            <TrendingUp
              className="p-2 rounded-md text-red-500 bg-red-50"
              size={40}
              aria-hidden
            />
          }
          value="24%"
        />
      </div>
    </div>
  );
}
