import DashboardStatsCard from "./DashboardStatsCard";

import { dashboardStats } from "../../../constants/data";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-4 row-start-2 row-end-3 grid-rows-auto gap-3 col-span-full max-lg:grid-cols-2">
      {dashboardStats.map((item) => (
        <DashboardStatsCard key={item.id} item={item} />
      ))}
    </div>
  );
}
