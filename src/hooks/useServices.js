import { useQuery } from "@tanstack/react-query";
import { getServices } from "../api/servicesApi";

export default function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    staleTime: 10 * 60 * 1000,
  });
}
