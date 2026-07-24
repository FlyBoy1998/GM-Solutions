import { Eye, Pencil } from "lucide-react";

import IconButton from "../../ui/IconButton";

export default function ProjectTableActions() {
  return (
    <td className="flex items-center gap-2 h-full">
      <IconButton variant="view" Icon={Eye} ariaLabel="View Project Details" />
      <IconButton variant="edit" Icon={Pencil} ariaLabel="Edit Project" />
    </td>
  );
}
