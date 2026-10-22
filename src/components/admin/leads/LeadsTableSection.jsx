import noLeadsImage from "../../../../public//images/no-leads-image.png";
import noMatchingLeadsImage from "../../../../public/images/no-matching-leads.png";
import leadsFetchErrorImage from "../../../../public/images/leads-fetch-error-image.png";

import useLeadsFilters from "../../../hooks/useLeadsFilters";
import usePagination from "../../../hooks/usePagination";

import LeadsTable from "./LeadsTable";
import Pagination from "../ui/Pagination";
import NoDataPlaceholder from "../ui/NoDataPlaceholder";
import DataFetchError from "../ui/DataFetchError";

export default function LeadsTableSection({ leads, error }) {
  const { filteredLeads } = useLeadsFilters(leads);
  const { currentPage, itemsPerPage, totalPages, currentData, setCurrentPage } =
    usePagination(filteredLeads);

  return (
    <div
      className={`col-span-full flex flex-col ${!leads.length ? "min-h-min" : "min-h-135"} px-4 rounded-lg shadow-md bg-white max-xl:col-span-full max-md:hidden`}
    >
      {error ? (
        <DataFetchError
          imageSrc={leadsFetchErrorImage}
          heading="Unable to fetch leads"
          description="We encountered an error while loading the leads."
          secondaryDescription="Please try again or check your connection."
        />
      ) : !leads.length ? (
        <NoDataPlaceholder
          imageSrc={noLeadsImage}
          heading="No Leads Yet"
          description="You haven't received any leads or enquiries yet."
          secondaryDescription="Start by adding a new lead manually or wait for enquiries from your website."
          buttonText="Add Lead"
          navigateTo="/admin/leads/new"
        />
      ) : !filteredLeads.length ? (
        <NoDataPlaceholder
          imageSrc={noMatchingLeadsImage}
          heading="No matching leads found"
          description="We couldn't find any leads that match your search or filter criteria."
          secondaryDescription="Try adjusting your search term or filters to see more results."
        />
      ) : (
        <>
          <LeadsTable leads={currentData} />

          {leads.length > itemsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
}
