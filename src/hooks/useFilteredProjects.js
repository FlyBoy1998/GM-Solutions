import { useSearchParams } from "react-router";

export default function useFilteredProjects(projects = []) {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  return { filteredProjects };
}
