import ProjectsTable from "../ui/ProjectsTable";
import Pagination from "../ui/Pagination";

import usePagination from "../../../hooks/usePagination";

import { projects } from "../../../../dummy_data/data";

export default function ProjectsManagementTable() {
  const { currentPage, totalPages, currentData, setCurrentPage } =
    usePagination(projects || []);

  return (
    <div className="flex flex-col col-span-3 row-start-3 row-end-5 min-h-135 px-4 rounded-lg shadow-md bg-white max-xl:col-span-full">
      <ProjectsTable projects={currentData} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
