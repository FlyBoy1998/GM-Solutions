import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useForm, useWatch } from "react-hook-form";
import { Search, Shapes, Info } from "lucide-react";

import useDebounce from "../../../hooks/useDebounce";

import FormField from "../../ui/FormField";

import {
  projectTypeOptions,
  projectStatusOptions,
} from "../../../constants/data";

import { projects } from "../../../../dummy_data/data";

export default function ProjectFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectsCount = projects.length;

  const { register, control } = useForm({
    defaultValues: {
      search_project: searchParams.get("search_project") || "",
      project_category: searchParams.get("project_category") || "",
      project_status: searchParams.get("project_status") || "",
    },
  });

  const searchProject = useWatch({
    control,
    name: "search_project",
  });

  const projectCategory = useWatch({
    control,
    name: "project_category",
  });

  const projectStatus = useWatch({
    control,
    name: "project_status",
  });

  const debouncedSearchProject = useDebounce(searchProject);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (debouncedSearchProject) {
      newSearchParams.set("search_project", debouncedSearchProject);
    } else {
      newSearchParams.delete("search_project");
    }

    if (projectCategory) {
      newSearchParams.set("project_category", projectCategory);
    } else {
      newSearchParams.delete("project_category");
    }

    if (projectStatus) {
      newSearchParams.set("project_status", projectStatus);
    } else {
      newSearchParams.delete("project_status");
    }

    setSearchParams(newSearchParams, { replace: true });
  }, [
    debouncedSearchProject,
    projectCategory,
    projectStatus,
    searchParams,
    setSearchParams,
  ]);

  return (
    <div className="col-span-full flex justify-between items-center p-4 rounded-lg shadow-md bg-white max-xl:flex-col max-xl:gap-3">
      <form action="" className="grid grid-cols-6 gap-4 max-xl:w-full">
        <FormField
          inputType="text"
          id="searchProject"
          placeholder="Search projects..."
          {...register("search_project")}
          icon={<Search className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="col-span-2 max-md:col-span-full"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Categories"
          options={projectTypeOptions}
          {...register("project_category")}
          icon={<Shapes className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="col-span-2 max-md:col-span-3 max-sm:col-span-full"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Statuses"
          options={projectStatusOptions}
          {...register("project_status")}
          icon={<Info className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="col-span-2 max-md:col-span-3 max-sm:col-span-full"
        />
      </form>
      <p className="text-sm max-xl:self-start">
        <span className="font-bold">{projectsCount}</span> Projects
      </p>
    </div>
  );
}
