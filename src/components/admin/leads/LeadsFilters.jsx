import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useForm, useWatch } from "react-hook-form";
import { Search, Info, Globe } from "lucide-react";
import useDebounce from "../../../hooks/useDebounce";

import FormField from "../../ui/FormField";

import { leadsStatuses, leadsSources } from "../../../constants/data";

export default function LeadsFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, control } = useForm({
    defaultValues: {
      search_lead: searchParams.get("search_leads") || "",
      lead_status: searchParams.get("lead_status") || "",
      lead_source: searchParams.get("lead_source") || "",
    },
  });

  const searchLead = useWatch({
    control,
    name: "search_lead",
  });

  const leadStatus = useWatch({
    control,
    name: "lead_status",
  });

  const leadSource = useWatch({
    control,
    name: "lead_source",
  });

  const debouncedSearchLead = useDebounce(searchLead);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (debouncedSearchLead) {
      newSearchParams.set("search_lead", debouncedSearchLead);
    } else {
      newSearchParams.delete("search_lead");
    }

    if (leadStatus) {
      newSearchParams.set("lead_status", leadStatus);
    } else {
      newSearchParams.delete("lead_status");
    }

    if (leadSource) {
      newSearchParams.set("lead_source", leadSource);
    } else {
      newSearchParams.delete("lead_source");
    }

    setSearchParams(newSearchParams, { replace: true });
  }, [
    searchParams,
    debouncedSearchLead,
    leadStatus,
    leadSource,
    setSearchParams,
  ]);

  return (
    <div className="col-span-full flex items-center p-4 rounded-lg shadow-md bg-white">
      <form className="grid grid-cols-6 gap-4 max-xl:w-full">
        <FormField
          inputType="text"
          id="searchLeads"
          placeholder="Search leads..."
          icon={<Search className="text-gray-dark" size={16} aria-hidden />}
          {...register("search_lead")}
          additionalStyling="col-span-2 max-md:col-span-full"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Statuses"
          options={leadsStatuses}
          icon={<Info className="text-gray-dark" size={16} aria-hidden />}
          {...register("lead_status")}
          additionalStyling="col-span-2 max-md:col-span-3 max-sm:col-span-full"
        />
        <FormField
          type="select"
          optionsPlaceholder="All Sources"
          options={leadsSources}
          icon={<Globe className="text-gray-dark" size={16} aria-hidden />}
          {...register("lead_source")}
          additionalStyling="col-span-2 max-md:col-span-3 max-sm:col-span-full"
        />
      </form>
    </div>
  );
}
