import LeadsTable from "./LeadsTable";
import Pagination from "../ui/Pagination";

import usePagination from "../../../hooks/usePagination";

import { leads } from "../../../../dummy_data/data";

export default function LeadsTableSection() {
  const { currentPage, totalPages, currentData, setCurrentPage } =
    usePagination(leads || []);

  return (
    <div className="col-span-full flex flex-col min-h-135 px-4 rounded-lg shadow-md bg-white max-xl:col-span-full">
      <LeadsTable leads={currentData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
