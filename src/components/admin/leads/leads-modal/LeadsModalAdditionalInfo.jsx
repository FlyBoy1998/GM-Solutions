import { MapPin, NotebookText } from "lucide-react";

import SectionHeader from "../../ui/SectionHeader";
import LeadItem from "./LeadItem";

export default function LeadsModalAdditionalInfo({ lead }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Additional Information" />
      <div className="flex flex-col gap-4">
        <LeadItem
          Icon={MapPin}
          label="Property Address"
          value={lead?.property_address}
        />
        <LeadItem Icon={NotebookText} label="Notes" value={lead?.notes} />
      </div>
    </div>
  );
}
