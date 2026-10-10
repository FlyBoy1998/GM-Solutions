import { Upload } from "lucide-react";
import useMediaFiles from "../../../hooks/useMediaFiles";
import noMediaImage from "../../../../public/images/no-media-image.png";

import PageHeader from "../ui/PageHeader";
import CtaButton from "../../ui/CtaButton";
import MediaFilters from "./MediaFilters";
import MediaGrid from "./MediaGrid";
import StorageUsage from "./StorageUsage";
import QuickTips from "./QuickTips";
import MediaSkeleton from "./MediaSkeleton";
import NoDataPlaceholder from "../ui/NoDataPlaceholder";
import MediaCarousel from "./MediaCarousel";

export default function AdminMedia() {
  const { data: media = [], isLoading, error } = useMediaFiles();

  let mediaGridContent;

  if (!isLoading && error) {
    mediaGridContent = <p>Error</p>;
  } else if (!isLoading && !media.length) {
    mediaGridContent = (
      <NoDataPlaceholder
        imageSrc={noMediaImage}
        heading="No Media Files Yet"
        description="Upload your first media file to get started."
        secondaryDescription="Add photos, documents, videos or other files."
        buttonText="Upload Media"
      />
    );
  } else {
    mediaGridContent = <MediaGrid mediaFiles={media} />;
  }

  return (
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
          <MediaFilters filesNumber={media?.length} />
          {mediaGridContent}
          <MediaCarousel mediaFiles={media} />
          <StorageUsage mediaFiles={media} />
          <QuickTips />
        </>
      )}
    </div>
  );
}
