import { useSearchParams } from "react-router";

import { projects } from "../../dummy_data/data";

export default function useFilteredProjects() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";

  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  return { filteredProjects };
}
