import { useQuery } from "@tanstack/react-query";
import { getLeads } from "../api/api";

export default function useLeads() {
  return useQuery({
    queryKey: ["leads"],
    queryFn: getLeads,
  });
}
