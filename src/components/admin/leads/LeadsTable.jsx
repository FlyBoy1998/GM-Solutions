import LeadsTableHead from "./LeadsTableHead";
import LeadsTableRow from "./LeadsTableRow";

import useLeads from "../../../hooks/useLeads";

export default function LeadsTable() {
  const { data: leads = [], isLoading, error } = useLeads();

  return (
    <table className="w-full text-sm border-separate border-spacing-y-5.5">
      <LeadsTableHead />

      <tbody className="text-xs">
        {leads.map((lead) => (
          <LeadsTableRow key={lead.id} lead={lead} />
        ))}
      </tbody>
    </table>
  );
}
