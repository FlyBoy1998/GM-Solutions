import { useQuery } from "@tanstack/react-query";
import { getService } from "../api/api";

export default function useService(serviceId) {
  return useQuery({
    queryKey: ["service", serviceId],
    queryFn: () => getService(serviceId),
    enabled: Boolean(serviceId),
  });
}
