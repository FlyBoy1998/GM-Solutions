import usePagination from "../../../hooks/usePagination";
import { getMediaFileInfo } from "../../../utils/utils";
import Pagination from "../ui/Pagination";

import MediaCard from "./MediaCard";

export default function MediaGrid({ mediaFiles }) {
  const { currentPage, totalPages, currentData, setCurrentPage } =
    usePagination(mediaFiles || []);

  return (
    <div className="flex flex-col col-span-3 row-span-2 min-h-125 p-3 rounded-lg shadow-lg bg-white">
      <div className="grid grid-cols-3 gap-4">
        {currentData?.map((file) => {
          const mediaFile = getMediaFileInfo(file);

          return (
            <MediaCard
              key={`${file.bucket}-${file.id}`}
              mediaFile={mediaFile}
            />
          );
        })}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
