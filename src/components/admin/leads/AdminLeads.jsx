import noLeadsCarouselItemsImage from "../../../../public/images/no-leads-carousel-items.png";

import { useContext } from "react";
import { useNavigate } from "react-router";
import { Plus } from "lucide-react";
import { AdminLeadsContext } from "../context/AdminLeadsLayout";
import useLeads from "../../../hooks/useLeads";
import useLeadsFilters from "../../../hooks/useLeadsFilters";
import useDeleteLead from "../../../hooks/useDeleteLead";

import PageHeader from "../ui/PageHeader";
import CtaButton from "../../ui/CtaButton";
import LeadModal from "./leads-modal/LeadModal";
import DeleteModal from "../ui/DeleteModal";
import LeadsMetrics from "./LeadsMetrics";
import LeadsFilters from "./LeadsFilters";
import LeadsTableSection from "./LeadsTableSection";
import LeadsCarousel from "./LeadCarousel";
import LeadsSkeleton from "./LeadsSkeleton";
import NoCarouselDataPlaceholder from "../ui/NoCarouselDataPlaceholder";

export default function AdminLeads() {
  const navigate = useNavigate();
  const { data: leads = [], isLoading, error } = useLeads();
  const { filteredLeads } = useLeadsFilters(leads);
  const { deleteLead, isDeleting } = useDeleteLead();
  const { selectedLead, leadDetailsModalRef, deleteModalRef, setSelectedLead } =
    useContext(AdminLeadsContext);

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
      <div className="grid grid-cols-4 grid-rows-[auto_auto_auto_1fr] gap-4 p-6 overflow-y-auto">
        <PageHeader
          heading="Leads"
          description="Manage and track all leads and enquiries."
        >
          <CtaButton
            variant="primary"
            Icon={Plus}
            onClick={() => navigate("new")}
          >
            Add Lead
          </CtaButton>
        </PageHeader>
        {isLoading ? (
          <LeadsSkeleton />
        ) : (
          <>
            <LeadsMetrics />
            <LeadsFilters />
            <LeadsTableSection leads={leads} error={error} />
            {!leads.length || !filteredLeads.length ? (
              <NoCarouselDataPlaceholder
                imageSrc={noLeadsCarouselItemsImage}
                heading="No leads to display"
                description="There are no leads available to show in this carousel."
                secondaryDescription="New customer enquiries will appear here when they arrive. Try adjusting your filters or check back later."
              />
            ) : (
              <LeadsCarousel leads={filteredLeads} />
            )}
          </>
        )}
      </div>
    </>
  );
}
