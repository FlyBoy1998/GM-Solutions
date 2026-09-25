import LeadsTable from "./LeadsTable";
import Pagination from "../ui/Pagination";

import usePagination from "../../../hooks/usePagination";

import useLeads from "../../../hooks/useLeads";

export default function LeadsTableSection() {
  const { data: leads = [], isLoading, error } = useLeads();

  const { currentPage, itemsPerPage, totalPages, currentData, setCurrentPage } =
    usePagination(leads || []);

  return (
    <div className="col-span-full flex flex-col min-h-135 px-4 rounded-lg shadow-md bg-white max-xl:col-span-full">
      <LeadsTable leads={currentData} />
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
