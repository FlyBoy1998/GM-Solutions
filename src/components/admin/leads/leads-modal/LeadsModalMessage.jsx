import { MessagesSquare } from "lucide-react";

import SectionHeader from "../../ui/SectionHeader";

export default function LeadsModalMessage({ lead }) {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Message Details" />
      <div className="flex gap-2">
        <MessagesSquare size={20} className="text-black" aria-hidden />
        <p className="p-2 rounded-md text-xs bg-blue-100">{lead?.enquiry}</p>
      </div>
    </div>
  );
}
