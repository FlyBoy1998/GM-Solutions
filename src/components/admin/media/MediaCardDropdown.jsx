import { Eye, Download, Copy, Trash } from "lucide-react";

import DropdownButton from "./DropdownButton";
import SpinnerLoader from "../ui/SpinnerLoader";

export default function MediaCardDropdown({
  onView,
  onDownload,
  onCopyURL,
  onDelete,
  isDownloading,
}) {
  return (
    <div className="flex flex-col gap-2 absolute top-full right-0 min-w-40 mt-2 p-4 z-1000 rounded-lg shadow-2xl bg-white">
      <DropdownButton Icon={Eye} onClick={onView}>
        View
      </DropdownButton>
      <DropdownButton
        Icon={Download}
        onClick={onDownload}
        disabled={isDownloading}
      >
        {isDownloading ? <SpinnerLoader /> : "Download"}
      </DropdownButton>
      <DropdownButton Icon={Copy} onClick={onCopyURL}>
        Copy URL
      </DropdownButton>
      <DropdownButton variant="danger" Icon={Trash} onClick={onDelete}>
        Delete
      </DropdownButton>
    </div>
  );
}
