import { Eye, Pencil, Trash2 } from "lucide-react";

import IconButton from "./IconButton";

export default function TableActions({
  hasViewAction = true,
  hasEditAction = true,
  hasDeleteAction = false,
}) {
  return (
    <th className="table-th">
      <div className="flex items-center gap-1">
        {hasViewAction && (
          <IconButton
            variant="view"
            Icon={Eye}
            aria-label="View Project Details"
          />
        )}
        {hasEditAction && (
          <IconButton variant="edit" Icon={Pencil} aria-label="Edit Project" />
        )}
        {hasDeleteAction && (
          <IconButton
            variant="delete"
            Icon={Trash2}
            aria-label="Delete Project"
          />
        )}
      </div>
    </th>
  );
}
