import { useQuery } from "@tanstack/react-query";
import { getServices } from "../api/api";

export default function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
}
