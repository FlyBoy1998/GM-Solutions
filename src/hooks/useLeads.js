import { useQuery } from "@tanstack/react-query";
import { getLeads } from "../api/leadsApi";

export default function useLeads() {
  return useQuery({
    queryKey: ["leads"],
    queryFn: getLeads,
    staleTime: 10 * 60 * 1000,
  });
}
