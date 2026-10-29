import { useQuery } from "@tanstack/react-query";
import { getProject } from "../api/projectsApi";

export default function useProject(projectId) {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProject(projectId),
    enabled: Boolean(projectId),
    staleTime: 5 * 60 * 1000,
  });
}
