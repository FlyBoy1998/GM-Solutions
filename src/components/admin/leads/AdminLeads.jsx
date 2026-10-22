import { useNavigate } from "react-router";
import { Plus } from "lucide-react";
import useLeads from "../../../hooks/useLeads";
import useLeadsFilters from "../../../hooks/useLeadsFilters";

import PageHeader from "../ui/PageHeader";
import CtaButton from "../../ui/CtaButton";
import LeadsMetrics from "./LeadsMetrics";
import LeadsFilters from "./LeadsFilters";
import LeadsTableSection from "./LeadsTableSection";
import LeadsCarousel from "./LeadCarousel";
import LeadsSkeleton from "./LeadsSkeleton";

export default function AdminLeads() {
  const navigate = useNavigate();
  const { data: leads = [], isLoading, error } = useLeads();
  const { filteredLeads } = useLeadsFilters(leads);

  return (
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
          <LeadsCarousel leads={filteredLeads} />
        </>
      )}
    </div>
  );
}
