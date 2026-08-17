import { Search, Info, Globe } from "lucide-react";

import FormField from "../../ui/FormField";

import { leadsStatuses, leadsSources } from "../../../constants/data";

export default function LeadsFilters() {
  return (
    <div className="col-span-full flex justify-between items-center p-4 rounded-lg shadow-md bg-white">
      <form action="" className="flex gap-4">
        <FormField
          inputType="text"
          id="searchLeads"
          placeholder="Search leads..."
          icon={<Search className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="w-60"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Statuses"
          options={leadsStatuses}
          icon={<Info className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="w-60"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Sources"
          options={leadsSources}
          icon={<Globe className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="w-60"
        />
      </form>
    </div>
  );
}
