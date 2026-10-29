import { useQuery } from "@tanstack/react-query";
import { getLead } from "../api/leadsApi";

export default function useLead(leadId) {
  return useQuery({
    queryKey: ["lead", leadId],
    queryFn: () => getLead(leadId),
    enabled: Boolean(leadId),
    staleTime: 5 * 60 * 1000,
  });
}
