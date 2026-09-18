import Pagination from "../ui/Pagination";
import MediaCard from "./MediaCard";

import usePagination from "../../../hooks/usePagination";

export default function MediaGrid({ mediaFiles }) {
  const { currentPage, totalPages, currentData, setCurrentPage } =
    usePagination(mediaFiles || []);

  return (
    <div className="flex flex-col col-span-3 row-span-2 p-3 rounded-lg shadow-lg bg-white">
      <div className="flex-1 grid grid-cols-3 gap-4">
        {currentData?.map((file) => (
          <MediaCard key={file.id} mediaFile={file} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
