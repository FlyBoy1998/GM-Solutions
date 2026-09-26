import { useRef, useState } from "react";

import LeadsTableHead from "./LeadsTableHead";
import LeadsTableRow from "./LeadsTableRow";
import LeadModal from "./leads-modal/LeadModal";

export default function LeadsTable({ leads }) {
  const [selectedLead, setSelectedLead] = useState(null);

  const leadDetailsModalRef = useRef(null);

  function handleDisplayLeadModal(lead) {
    setSelectedLead(lead);
    leadDetailsModalRef.current?.showModal();
  }

  return (
    <>
      <LeadModal ref={leadDetailsModalRef} lead={selectedLead} />

      <table className="w-full text-sm border-separate border-spacing-y-5.5">
        <LeadsTableHead />
        <tbody className="text-xs">
          {leads.map((lead) => (
            <LeadsTableRow
              key={lead.id}
              lead={lead}
              onView={() => handleDisplayLeadModal(lead)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
