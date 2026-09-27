import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import LeadsTableHead from "./LeadsTableHead";
import LeadsTableRow from "./LeadsTableRow";
import LeadModal from "./leads-modal/LeadModal";
import DeleteModal from "../ui/DeleteModal";

import { deleteLead as deleteLeadApi } from "../../../api/api";

export default function LeadsTable({ leads }) {
  const queryClient = useQueryClient();

  const [selectedLead, setSelectedLead] = useState(null);

  const abortSignalRef = useRef(null);
  const leadDetailsModalRef = useRef(null);
  const deleteLeadModalRef = useRef(null);

  const { mutate: deleteLead, isPending: isDeleting } = useMutation({
    mutationFn: async ({ leadId }) => {
      const controller = new AbortController();
      abortSignalRef.current = controller.signal;

      try {
        return await deleteLeadApi(leadId, controller.signal);
      } finally {
        abortSignalRef.current = null;
      }
    },
    onSuccess: () => {
      toast.success("Lead successfully deleted!");

      deleteLeadModalRef.current?.close();
      leadDetailsModalRef.current?.close();

      setSelectedLead(null);

      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
    onError: (err) => {
      if (err.name === "AbortError") {
        toast.error("Lead deletion cancelled.");
      }

      toast.error(err.name || "Lead could not be deleted.");
    },
  });

  function handleDisplayLeadModal(lead) {
    setSelectedLead(lead);
    leadDetailsModalRef.current?.showModal();
  }

  function handleDisplayDeleteModal(lead) {
    setSelectedLead(lead);
    deleteLeadModalRef.current?.showModal();
  }

  function handleDeleteLead() {
    if (!selectedLead?.id) return;

    deleteLead({
      leadId: selectedLead.id,
    });
  }

  return (
    <>
      <LeadModal ref={leadDetailsModalRef} lead={selectedLead} />
      <DeleteModal
        ref={deleteLeadModalRef}
        title="Delete Lead?"
        entity={`${selectedLead?.first_name} ${selectedLead?.last_name}`}
        message="This action cannot be undone. All lead information, attachments and enquiry details will be permanently removed."
        onDelete={handleDeleteLead}
        isDeleting={isDeleting}
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
