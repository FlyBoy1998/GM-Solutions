import { Search, List } from "lucide-react";

import FormField from "../../../components/ui/FormField";

import { mediaTypesOptions } from "../../../constants/data";

export default function MediaFilters() {
  return (
    <div className="col-span-full flex justify-between items-center p-4 rounded-lg shadow-md bg-white">
      <form action="" className="flex gap-4">
        <FormField
          inputType="text"
          id="searchMedia"
          placeholder="Search media..."
          icon={<Search className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="w-60"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Types"
          options={mediaTypesOptions}
          icon={<List className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="w-60"
        />
      </form>
      <p className="text-sm">
        <span className="font-bold">43</span> Results
      </p>
    </div>
  );
}
