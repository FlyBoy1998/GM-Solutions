import { useQuery } from "@tanstack/react-query";

import { getProjects } from "../api/api";

export default function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
}
