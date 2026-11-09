import { useQuery } from "@tanstack/react-query";
import { getMaintenanceStatus } from "../api/settingsApi";

export default function useMaintenanceStatus() {
  return useQuery({
    queryKey: ["maintenance-status"],
    queryFn: getMaintenanceStatus,
    staleTime: 30 * 1000,
    refetchInterval: 60 * 1000,
    retry: 2,
  });
}
