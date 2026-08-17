import {
  UsersRound,
  MessagesSquare,
  CalendarCheck,
  FolderPlus,
} from "lucide-react";

import LeadMetricCard from "./LeadMetricCard";

export default function LeadsMetrics() {
  return (
    <div className="grid grid-cols-4 col-span-full row-start-2 row-end-3 gap-3">
      <LeadMetricCard
        title="New Leads"
        value={24}
        icon={<UsersRound className="text-white" aria-hidden />}
        bgColor="bg-purple-700"
      />
      <LeadMetricCard
        title="Contacted"
        value={18}
        icon={<MessagesSquare className="text-white" aria-hidden />}
        bgColor="bg-green-700"
      />
      <LeadMetricCard
        title="Consultations"
        value={24}
        icon={<CalendarCheck className="text-white" aria-hidden />}
        bgColor="bg-yellow-500"
      />
      <LeadMetricCard
        title="Converted"
        value={24}
        icon={<FolderPlus className="text-white" aria-hidden />}
        bgColor="bg-blue-600"
      />
    </div>
  );
}
