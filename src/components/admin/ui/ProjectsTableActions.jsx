import { Eye, Pencil, Trash2 } from "lucide-react";

import IconButton from "./IconButton";

export default function ProjectTableActions({ hasDeleteAction = false }) {
  return (
    <td>
      <div className="flex justify-center items-center gap-1">
        <IconButton
          variant="view"
          Icon={Eye}
          ariaLabel="View Project Details"
        />
        <IconButton variant="edit" Icon={Pencil} ariaLabel="Edit Project" />
        {hasDeleteAction && (
          <IconButton
            variant="delete"
            Icon={Trash2}
            ariaLabel="Delete Project"
          />
        )}
      </div>
    </td>
  );
}
