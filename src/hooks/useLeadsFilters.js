import { useMemo } from "react";
import { useSearchParams } from "react-router";

export default function useLeadsFilters(leads = []) {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search_lead") || "";
  const status = searchParams.get("lead_status") || "";
  const source = searchParams.get("lead_source") || "";

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesLead =
        !search ||
        lead.first_name.toLowerCase().includes(search.toLowerCase()) ||
        lead.last_name.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = !status || lead.status.toLowerCase() === status;

      const matchesSource = !source || lead.source.toLowerCase() === source;

      return matchesLead && matchesStatus && matchesSource;
    });
  }, [leads, search, status, source]);

  return { search, status, source, filteredLeads };
}
