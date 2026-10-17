import { useContext } from "react";
import { AdminMediaContext } from "../context/AdminMediaLayout";
import usePagination from "../../../hooks/usePagination";
import useDonwloadMedia from "../../../hooks/useDownloadMedia";
import useDeleteMedia from "../../../hooks/useDeleteMedia";

import Pagination from "../ui/Pagination";
import MediaCard from "./MediaCard";

export default function MediaGrid({ mediaFiles }) {
  const { handleDisplayMediaModal } = useContext(AdminMediaContext);

  const { currentPage, totalPages, currentData, setCurrentPage } =
    usePagination(mediaFiles || []);
  const { downloadMedia, isDownloading } = useDonwloadMedia();
  const { deleteMedia, isDeleting } = useDeleteMedia();

  return (
    <div className="flex flex-col col-span-full row-start-3 row-end-4 p-3 rounded-lg shadow-lg bg-white max-md:hidden">
      <div className="flex-1 grid grid-cols-6 gap-4">
        {currentData?.map((file) => (
          <MediaCard
            key={file.id}
            mediaFile={file}
            onView={() => handleDisplayMediaModal(file)}
            onDownload={() =>
              downloadMedia({
                bucket: file.bucket,
                storagePath: file.storage_path,
                fileName: file.name,
              })
            }
            isDownloading={isDownloading}
            onDelete={() => deleteMedia(file)}
          />
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
