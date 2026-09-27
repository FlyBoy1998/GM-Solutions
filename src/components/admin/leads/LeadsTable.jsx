import { useRef, useState } from "react";

import LeadsTableHead from "./LeadsTableHead";
import LeadsTableRow from "./LeadsTableRow";
import LeadModal from "./leads-modal/LeadModal";
import DeleteModal from "../ui/DeleteModal";

export default function LeadsTable({ leads }) {
  const [selectedLead, setSelectedLead] = useState(null);

  const leadDetailsModalRef = useRef(null);
  const deleteLeadModalRef = useRef(null);

  function handleDisplayLeadModal(lead) {
    setSelectedLead(lead);
    leadDetailsModalRef.current?.showModal();
  }

  function handleDisplayDeleteModal(lead) {
    setSelectedLead(lead);
    deleteLeadModalRef.current?.showModal();
  }

  return (
    <>
      <LeadModal ref={leadDetailsModalRef} lead={selectedLead} />
      <DeleteModal
        ref={deleteLeadModalRef}
        title="Delete Lead?"
        entity={`${selectedLead?.first_name} ${selectedLead?.last_name}`}
        message="This action cannot be undone. All lead information, attachments and enquiry details will be permanently removed."
      />

      <table className="w-full text-sm border-separate border-spacing-y-5.5">
        <LeadsTableHead />
        <tbody className="text-xs">
          {leads.map((lead) => (
            <LeadsTableRow
              key={lead.id}
              lead={lead}
              onView={() => handleDisplayLeadModal(lead)}
              onDelete={() => handleDisplayDeleteModal(lead)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
