import { useRef, useState } from "react";
import { EllipsisVertical } from "lucide-react";

import MediaCardDropdown from "./MediaCardDropdown";

import { formatDate, formatBytes } from "../../../utils/utils";
import useClickOutside from "../../../hooks/useClickOutside";

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
    <article className="col-span-2 flex flex-col rounded-lg shadow-md bg-white max-md:col-span-3">
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
          <div ref={dropdownRef} className="relative">
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
      </div>
    </article>
  );
}
