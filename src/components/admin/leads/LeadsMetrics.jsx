import {
  UsersRound,
  MessagesSquare,
  CalendarCheck,
  FolderPlus,
} from "lucide-react";
import useLeads from "../../../hooks/useLeads";

import LeadMetricCard from "./LeadMetricCard";

export default function LeadsMetrics() {
  const { data: leads = [] } = useLeads();

  const newLeads = leads?.filter((lead) => lead.status === "new").length;
  const contacted = leads?.filter((lead) => lead.status === "contacted").length;
  const consultations = leads?.filter(
    (lead) => lead.status === "consultation",
  ).length;
  const converted = leads?.filter((lead) => lead.status === "converted").length;

  return (
    <div className="grid grid-cols-4 col-span-full row-start-2 row-end-3 gap-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
      <LeadMetricCard
        title="New Leads"
        value={newLeads}
        icon={UsersRound}
        bgColor="bg-purple-700"
      />
      <LeadMetricCard
        title="Contacted"
        value={contacted}
        icon={MessagesSquare}
        bgColor="bg-green-700"
      />
      <LeadMetricCard
        title="Consultations"
        value={consultations}
        icon={CalendarCheck}
        bgColor="bg-yellow-500"
      />
      <LeadMetricCard
        title="Converted"
        value={converted}
        icon={FolderPlus}
        bgColor="bg-blue-600"
      />
    </div>
  );
}
