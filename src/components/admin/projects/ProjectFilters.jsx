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
    <div className="col-span-full flex justify-between items-center p-4 rounded-lg shadow-md bg-white max-xl:flex-col max-xl:gap-3">
      <form action="" className="grid grid-cols-6 gap-4 max-xl:w-full">
        <FormField
          inputType="text"
          id="searchProject"
          placeholder="Search projects..."
          icon={<Search className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="col-span-2 max-md:col-span-full"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Categories"
          options={projectTypeOptions}
          icon={<Shapes className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="col-span-2 max-md:col-span-3 max-sm:col-span-full"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Statuses"
          options={projectStatusOptions}
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
