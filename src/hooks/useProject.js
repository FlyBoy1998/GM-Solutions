import { useQuery } from "@tanstack/react-query";
import { getProject } from "../api/api";

export default function useProject(projectId) {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProject(projectId),
    enabled: Boolean(projectId),
  });
}
