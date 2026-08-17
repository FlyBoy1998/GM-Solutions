import PageHeader from "../ui/PageHeader";
import CtaButton from "../../ui/CtaButton";
import LeadsMetrics from "./LeadsMetrics";
import LeadsFilters from "./LeadsFilters";
import LeadsTableSection from "./LeadsTableSection";

export default function AdminLeads() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_auto_auto_1fr] gap-4 p-6 overflow-y-auto">
      <PageHeader
        heading="Leads"
        description="Manage and track all leads and enquiries."
      >
        <div className="max-lg:hidden">
          <CtaButton variant="primary">Add Lead</CtaButton>
        </div>
      </PageHeader>
      <LeadsMetrics />
      <LeadsFilters />
      <LeadsTableSection />
    </div>
  );
}
