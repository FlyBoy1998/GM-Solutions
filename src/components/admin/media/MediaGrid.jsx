import { useRef, useState } from "react";
import usePagination from "../../../hooks/usePagination";
import useDonwloadMedia from "../../../hooks/useDownloadMedia";

import Pagination from "../ui/Pagination";
import MediaCard from "./MediaCard";
import MediaModal from "./media-modal/MediaModal";

export default function MediaGrid({ mediaFiles }) {
  const { currentPage, totalPages, currentData, setCurrentPage } =
    usePagination(mediaFiles || []);
  const { downloadMedia, isDownloading } = useDonwloadMedia();

  const [selectedMedia, setSelectedMedia] = useState(null);
  const mediaModalRef = useRef(null);

  function handleDisplayMediaModal(mediaFile) {
    setSelectedMedia(mediaFile);
    mediaModalRef.current?.showModal();
  }

  return (
    <>
      <MediaModal ref={mediaModalRef} mediaFile={selectedMedia} />

      <div className="flex flex-col col-span-full row-start-3 row-end-4 p-3 rounded-lg shadow-lg bg-white">
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
            />
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
