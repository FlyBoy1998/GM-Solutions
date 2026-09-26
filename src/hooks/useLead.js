import { useQuery } from "@tanstack/react-query";
import { getLead } from "../api/api";

export default function useLead(leadId) {
  return useQuery({
    queryKey: ["lead", leadId],
    queryFn: () => getLead(leadId),
    enabled: Boolean(leadId),
  });
}
