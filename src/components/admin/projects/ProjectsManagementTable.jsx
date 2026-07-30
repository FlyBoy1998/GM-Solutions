import { useState } from "react";

import ProjectsTable from "../ui/ProjectsTable";
import ProjectsPagination from "./ProjectsPagination";

import { projects } from "../../../../dummy_data/data";

export default function ProjectsManagementTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentData = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="flex flex-col col-span-3 row-start-3 row-end-5 min-h-135 py-4 px-4 rounded-lg shadow-md bg-white">
      <ProjectsTable projects={currentData} />
      <ProjectsPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
