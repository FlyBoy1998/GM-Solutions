import DashboardStatsCard from "./DashboardStatsCard";

import { dashboardStats } from "../../../constants/data";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-4 row-start-2 row-end-3 grid-rows-auto gap-3 col-span-full max-xl:grid-cols-2 max-sm:grid-cols-1">
      {dashboardStats.map((item) => (
        <DashboardStatsCard key={item.id} item={item} />
      ))}
    </div>
  );
}
