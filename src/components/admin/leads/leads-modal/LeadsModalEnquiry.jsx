import { Globe, Tag, Hammer, CircleDollarSign } from "lucide-react";

import SectionHeader from "../../ui/SectionHeader";
import LeadItem from "./LeadItem";

export default function LeadsModalEnquiry({ lead }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Enquiry Details" />
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <LeadItem
          className="col-span-1"
          Icon={Globe}
          label="Source"
          value={lead?.source}
        />
        <LeadItem
          className="col-span-1"
          Icon={Tag}
          label="Status"
          value={lead?.status}
        />
        <LeadItem
          className="col-span-1"
          Icon={Hammer}
          label="Project Type"
          value={lead?.project_type}
        />
        <LeadItem
          className="col-span-1"
          Icon={CircleDollarSign}
          label="Estimated Budget"
          value={lead?.estimated_budget}
        />
      </div>
    </div>
  );
}
