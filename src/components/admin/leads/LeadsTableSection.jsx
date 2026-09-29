import noLeadsImage from "../../../../public//images/no-leads-image.png";

import LeadsTable from "./LeadsTable";
import Pagination from "../ui/Pagination";
import NoDataPlaceholder from "../ui/NoDataPlaceholder";

import usePagination from "../../../hooks/usePagination";

import useLeads from "../../../hooks/useLeads";

export default function LeadsTableSection() {
  const { data: leads = [], isLoading, error } = useLeads();

  const { currentPage, itemsPerPage, totalPages, currentData, setCurrentPage } =
    usePagination(leads || []);

  return (
    <div
      className={`col-span-full flex flex-col ${!leads.length ? "min-h-min" : "min-h-135"} px-4 rounded-lg shadow-md bg-white max-xl:col-span-full`}
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

      {leads.length > itemsPerPage ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      ) : null}
    </div>
  );
}
