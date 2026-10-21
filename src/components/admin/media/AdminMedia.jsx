import noMediaImage from "../../../../public/images/no-media-image.png";
import noMatchingMedia from "../../../../public/images/no-matching-media.png";
import mediaFetchErrorImage from "../../../../public/images/media-fetch-error-image.png";

import { useContext } from "react";
import { Upload } from "lucide-react";
import { AdminMediaContext } from "../context/AdminMediaLayout";
import useMediaFiles from "../../../hooks/useMediaFiles";
import useDeleteMedia from "../../../hooks/useDeleteMedia";
import useMediaFilters from "../../../hooks/useMediaFilters";

import PageHeader from "../ui/PageHeader";
import CtaButton from "../../ui/CtaButton";
import MediaFilters from "./MediaFilters";
import MediaGrid from "./MediaGrid";
import StorageUsage from "./StorageUsage";
import QuickTips from "./QuickTips";
import MediaSkeleton from "./MediaSkeleton";
import DataFetchError from "../ui/DataFetchError";
import NoDataPlaceholder from "../ui/NoDataPlaceholder";
import MediaCarousel from "./MediaCarousel";
import MediaModal from "./media-modal/MediaModal";
import DeleteModal from "../ui/DeleteModal";

export default function AdminMedia() {
  const {
    selectedMedia,
    deleteModalRef,
    mediaDetailsModalRef,
    setSelectedMedia,
    handleDisplayDeleteModal,
  } = useContext(AdminMediaContext);
  const { data: media = [], isLoading, error } = useMediaFiles();
  const { filteredMedia } = useMediaFilters(media);
  const { deleteMedia, isDeleting } = useDeleteMedia();

  function handleDeleteMedia() {
    if (!selectedMedia.id) return;

    deleteMedia(selectedMedia, {
      onSuccess: () => {
        deleteModalRef.current?.close();
        mediaDetailsModalRef.current?.close();
        setSelectedMedia(null);
      },
    });
  }

  return (
    <>
      <DeleteModal
        ref={deleteModalRef}
        title="Delete Media File?"
        entity={selectedMedia?.name}
        onDelete={handleDeleteMedia}
        isDeleting={isDeleting}
      />
      <MediaModal
        ref={mediaDetailsModalRef}
        mediaFile={selectedMedia}
        onDelete={() => handleDisplayDeleteModal(selectedMedia)}
      />

      <div className="grid grid-cols-4 gap-4 min-h-full p-6 overflow-y-auto">
        <PageHeader
          heading="Media"
          description="Manage and organize all images and files used on your website."
        >
          <div className="max-lg:hidden">
            <CtaButton variant="primary" Icon={Upload}>
              Upload Files
            </CtaButton>
          </div>
        </PageHeader>

        {isLoading ? (
          <MediaSkeleton />
        ) : (
          <>
            <MediaFilters filesNumber={media.length} />

            {error ? (
              <div className="col-span-full">
                <DataFetchError
                  imageSrc={mediaFetchErrorImage}
                  heading="Unable to fetch media files"
                  description="We encountered an issue while loading the media files."
                  secondaryDescription="Please try again or check your connection."
                />
              </div>
            ) : !media.length ? (
              <div className="col-span-full">
                <NoDataPlaceholder
                  imageSrc={noMediaImage}
                  heading="No Media Files Yet"
                  description="Upload your first media file to get started."
                  secondaryDescription="Add photos, documents, videos or other files."
                  buttonText="Upload Media"
                />
              </div>
            ) : !filteredMedia.length ? (
              <div className="col-span-full">
                <NoDataPlaceholder
                  imageSrc={noMatchingMedia}
                  heading="No matching media files"
                  description="We couldn't find any media files that match your search or filters."
                  secondaryDescription="Try adjusting your search terms or filter options."
                />
              </div>
            ) : (
              <MediaGrid mediaFiles={filteredMedia} />
            )}

            {!error && (
              <>
                <MediaCarousel mediaFiles={filteredMedia} />
                {media.length > 0 && <StorageUsage mediaFiles={media} />}
              </>
            )}

            <QuickTips />
          </>
        )}
      </div>
    </>
  );
}
