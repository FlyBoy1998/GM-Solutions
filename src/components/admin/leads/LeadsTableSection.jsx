import noLeadsImage from "../../../../public//images/no-leads-image.png";
import noMatchingLeadsImage from "../../../../public/images/no-matching-leads.png";

import { useContext } from "react";
import usePagination from "../../../hooks/usePagination";
import { AdminLeadsContext } from "../context/AdminLeadsLayout";
import useLeads from "../../../hooks/useLeads";
import useLeadsFilters from "../../../hooks/useLeadsFilters";

import LeadsTable from "./LeadsTable";
import Pagination from "../ui/Pagination";
import NoDataPlaceholder from "../ui/NoDataPlaceholder";
import LeadModal from "./leads-modal/LeadModal";
import DeleteModal from "../ui/DeleteModal";
import useDeleteLead from "../../../hooks/useDeleteLead";

export default function LeadsTableSection() {
  const { data: leads = [], isLoading, error } = useLeads();
  const { filteredLeads } = useLeadsFilters(leads);
  const { deleteLead, isDeleting } = useDeleteLead();
  const { selectedLead, leadDetailsModalRef, deleteModalRef, setSelectedLead } =
    useContext(AdminLeadsContext);

  const { currentPage, itemsPerPage, totalPages, currentData, setCurrentPage } =
    usePagination(filteredLeads);

  function handleDeleteLead() {
    if (!selectedLead?.id) return;

    deleteLead(selectedLead.id, {
      onSuccess: () => {
        deleteModalRef.current?.close();
        leadDetailsModalRef.current?.close();

        setSelectedLead(null);
      },
    });
  }

  return (
    <>
      <LeadModal ref={leadDetailsModalRef} lead={selectedLead} />
      <DeleteModal
        ref={deleteModalRef}
        title="Delete Lead?"
        entity={`${selectedLead?.first_name} ${selectedLead?.last_name}`}
        message="This action cannot be undone. All lead information, attachments and enquiry details will be permanently removed."
        onDelete={handleDeleteLead}
        isDeleting={isDeleting}
      />
      <div
        className={`col-span-full flex flex-col ${!leads.length ? "min-h-min" : "min-h-135"} px-4 rounded-lg shadow-md bg-white max-xl:col-span-full max-md:hidden`}
      >
        {!leads.length ? (
          <NoDataPlaceholder
            imageSrc={noLeadsImage}
            heading="No Leads Yet"
            description="You haven't received any leads or enquiries yet."
            secondaryDescription="Start by adding a new lead manually or wait for enquiries from your website."
            buttonText="Add Lead"
            navigateTo="/admin/leads/new"
          />
        ) : (
          <LeadsTable leads={currentData} />
        )}

        {!filteredLeads.length && (
          <NoDataPlaceholder
            imageSrc={noMatchingLeadsImage}
            heading="No matching leads found"
            description="We couldn't find any leads that match your search or filter criteria."
            secondaryDescription="Try adjusting your search term or filters to see more results."
          />
        )}

        {leads.length > itemsPerPage ? (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        ) : null}
      </div>
    </>
  );
}
