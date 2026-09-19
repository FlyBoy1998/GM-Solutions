import { Eye, Download, Copy, Trash } from "lucide-react";

import DropdownButton from "./DropdownButton";

export default function MediaCardDropdown() {
  return (
    <div className="flex flex-col gap-2 absolute top-full right-0 min-w-40 mt-2 p-4 z-1000 rounded-lg shadow-2xl bg-white">
      <DropdownButton Icon={Eye}>View</DropdownButton>
      <DropdownButton Icon={Download}>Download</DropdownButton>
      <DropdownButton Icon={Copy}>Copy URL</DropdownButton>
      <DropdownButton variant="danger" Icon={Trash}>
        Delete
      </DropdownButton>
    </div>
  );
}
