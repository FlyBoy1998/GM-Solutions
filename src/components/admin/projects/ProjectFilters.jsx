import { Search, Shapes, Info } from "lucide-react";

import FormField from "../../ui/FormField";

import {
  projectTypeOptions,
  projectStatusOptions,
} from "../../../constants/data";

import { projects } from "../../../../dummy_data/data";

export default function ProjectFilters() {
  const projectsCount = projects.length;

  return (
    <div className="col-span-full flex justify-between items-center p-4 rounded-lg shadow-md bg-white">
      <form action="" className="flex gap-4">
        <FormField
          inputType="text"
          id="searchProject"
          placeholder="Search projects..."
          icon={<Search className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="w-60"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Categories"
          options={projectTypeOptions}
          icon={<Shapes className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="w-60"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Statuses"
          options={projectStatusOptions}
          icon={<Info className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="w-60"
        />
      </form>
      <p className="text-sm">
        <span className="font-bold">{projectsCount}</span> Projects
      </p>
    </div>
  );
}
