import { useQuery } from "@tanstack/react-query";

import PageHeader from "../ui/PageHeader";
import CtaButton from "../../ui/CtaButton";
import MediaFilters from "./MediaFilters";
import MediaGrid from "./MediaGrid";
import StorageUsage from "./StorageUsage";
import QuickTips from "./QuickTips";

import { getMediaFiles } from "../../../api/api";

export default function AdminMedia() {
  const {
    data: media = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["media"],
    queryFn: getMediaFiles,
  });

  let mediaGridContent;

  if (isLoading) {
    mediaGridContent = <p>Loading media files...</p>;
  } else if (!isLoading && error) {
    mediaGridContent = <p>Error</p>;
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
          <CtaButton variant="primary">Upload Files</CtaButton>
        </div>
      </PageHeader>

      <MediaFilters />
      {mediaGridContent}
      <StorageUsage mediaFiles={media} />
      <QuickTips />
    </div>
  );
}
