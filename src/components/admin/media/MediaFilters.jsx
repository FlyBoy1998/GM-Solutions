import { Search, List } from "lucide-react";

import FormField from "../../../components/ui/FormField";

import { mediaTypesOptions } from "../../../constants/data";

export default function MediaFilters({ filesNumber }) {
  return (
    <div className="col-span-full flex justify-between items-center p-4 rounded-lg shadow-md bg-white max-md:flex-col max-md:gap-4">
      <form action="" className="grid grid-cols-4 gap-4 max-md:w-full">
        <FormField
          inputType="text"
          id="searchMedia"
          placeholder="Search media..."
          icon={<Search className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="col-span-2 max-md:col-span-full"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Types"
          options={mediaTypesOptions}
          icon={<List className="text-gray-dark" size={16} aria-hidden />}
          additionalStyling="col-span-2 max-md:col-span-full"
        />
      </form>
      <p className="text-sm">
        <span className="font-bold">{filesNumber}</span> Results
      </p>
    </div>
  );
}
