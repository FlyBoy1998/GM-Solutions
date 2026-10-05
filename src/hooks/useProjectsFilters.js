import { useMemo } from "react";
import { useSearchParams } from "react-router";

export default function useProjectsFilters(projects = []) {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search_project") || "";
  const category = searchParams.get("project_category") || "";
  const status = searchParams.get("project_status") || "";

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        !search || project.title.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = !category || project.category === category;

      const matchesStatus = !status || project.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [projects, search, category, status]);

  return { search, category, status, filteredProjects };
}
