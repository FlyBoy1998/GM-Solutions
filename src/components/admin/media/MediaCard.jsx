import { useRef, useState } from "react";
import { EllipsisVertical } from "lucide-react";

import MediaCardDropdown from "./MediaCardDropdown";

import { formatDate, formatBytes } from "../../../utils/utils";
import useClickOutside from "../../../hooks/useClickOutside";
import CtaButton from "../../ui/CtaButton";

export default function MediaCard({
  mediaFile,
  onView,
  onDownload,
  onCopyURL,
  onDelete,
  isDownloading,
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  let imageClasses = "object-cover h-full w-full";

  useClickOutside(dropdownRef, () => setIsDropdownVisible(false));

  return (
    <article className="col-span-2 flex flex-col rounded-lg shadow-md bg-white max-md:flex-[0_0_100%] max-md:min-w-0">
      <div className="h-46 rounded-t-lg overflow-hidden">
        <img
          src={mediaFile?.url}
          className={`${imageClasses} ${mediaFile?.type === "image" ? "scale-125" : ""}`}
          alt="Media file"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold">{mediaFile?.name}</p>
          <div ref={dropdownRef} className="relative max-md:hidden">
            <button
              className="cursor-pointer p-1 rounded-md focus-ring transition-colors hover:bg-light"
              onClick={() => setIsDropdownVisible((prev) => !prev)}
              aria-label={`${isDropdownVisible ? "Close" : "Open"} Dropdown Menu`}
            >
              <EllipsisVertical size={18} aria-hidden />
            </button>

            {isDropdownVisible && (
              <MediaCardDropdown
                onView={onView}
                onDownload={onDownload}
                onCopyURL={onCopyURL}
                onDelete={onDelete}
                isDownloading={isDownloading}
              />
            )}
          </div>
        </div>
        <p className="text-xs text-gray-dark">
          {`${formatBytes(mediaFile?.metadata.size)}`} •{" "}
          {mediaFile.metadata.mimetype}
        </p>
        <p className="mt-auto text-xs text-gray-dark">
          {formatDate(mediaFile?.created_at.split("T")[0])}
        </p>

        <div className="hidden max-md:grid max-md:grid-cols-2 max-md:gap-2">
          <div className="col-span-1">
            <CtaButton variant="secondary" isFullWidth onClick={onView}>
              View
            </CtaButton>
          </div>
          <div className="col-span-1">
            <CtaButton variant="secondary" isFullWidth onClick={onDownload}>
              Download
            </CtaButton>
          </div>
          <div className="col-span-1">
            <CtaButton variant="secondary" isFullWidth onClick={onCopyURL}>
              Copy URL
            </CtaButton>
          </div>
          <div className="col-span-1">
            <CtaButton variant="danger" isFullWidth onClick={onDelete}>
              Delete
            </CtaButton>
          </div>
        </div>
      </div>
    </article>
  );
}
