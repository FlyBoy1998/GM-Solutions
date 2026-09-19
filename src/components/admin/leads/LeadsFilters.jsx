import { Search, Info, Globe } from "lucide-react";

import FormField from "../../ui/FormField";

import { leadsStatuses, leadsSources } from "../../../constants/data";

export default function LeadsFilters() {
  return (
    <div className="col-span-full flex justify-between items-center p-4 rounded-lg shadow-md bg-white">
      <form action="" className="grid grid-cols-6 gap-4 max-xl:w-full">
        <FormField
          inputType="text"
          id="searchLeads"
          placeholder="Search leads..."
          icon={<Search className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="col-span-2 max-md:col-span-full"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Statuses"
          options={leadsStatuses}
          icon={<Info className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="col-span-2 max-md:col-span-3 max-sm:col-span-full"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Sources"
          options={leadsSources}
          icon={<Globe className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="col-span-2 max-md:col-span-3 max-sm:col-span-full"
        />
      </form>
    </div>
  );
}
