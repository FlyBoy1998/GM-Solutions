import { Calendar, Clock } from "lucide-react";

import SectionHeader from "../../ui/SectionHeader";
import LeadItem from "./LeadItem";

import { formatDate } from "../../../../utils/utils";

export default function LeadsModalTimeline({ lead }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Timeline" />
      <div className="flex flex-col gap-4">
        <LeadItem
          Icon={Calendar}
          label="Preferred Start Date"
          value={formatDate(lead?.start_date)}
        />
        <LeadItem Icon={Clock} label="Timeframe" value={lead?.timeframe} />
      </div>
    </div>
  );
}
