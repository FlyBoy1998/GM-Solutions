import { User, Mail, Phone, MessageCircle } from "lucide-react";

import LeadItem from "./LeadItem";
import SectionHeader from "../../ui/SectionHeader";

export default function LeadsModalContact({ lead }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Contact Information" />
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <LeadItem
          className="col-span-1"
          Icon={User}
          label="Full Name"
          value={`${lead?.first_name} ${lead?.last_name}`}
        />
        <LeadItem
          className="col-span-1"
          Icon={Mail}
          label="Email Address"
          value={lead?.email}
        />
        <LeadItem
          className="col-span-1"
          Icon={Phone}
          label="Phone Number"
          value={lead?.phone}
        />
        <LeadItem
          className="col-span-1"
          Icon={MessageCircle}
          label="Preferred Contact Method"
          value={lead?.contact_method}
        />
      </div>
    </div>
  );
}
