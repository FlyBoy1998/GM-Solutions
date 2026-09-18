import { createPortal } from "react-dom";
import { Trash } from "lucide-react";
import CtaButton from "../../ui/CtaButton";

export default function DeleteProjectModal({
  project,
  onDelete,
  isDeleting,
  ref,
}) {
  return createPortal(
    <dialog
      ref={ref}
      className="modal fixed top-[50%] left-1/2 w-[calc(100%-3rem)] m-0 p-6 max-w-90 -translate-x-1/2 translate-y-[-50%] overflow-y-auto rounded-lg border-0 backdrop:bg-modal-backdrop"
    >
      <div className="flex flex-col justify-between items-center gap-4">
        <Trash size={60} className="p-3 rounded-full text-red-500 bg-red-100" />
        <h2 className="heading-md text-center">Delete Project?</h2>
        <p className="text-center text-sm">
          Are you sure you want to delete "
          <span className="font-bold">{project?.title}</span>"
        </p>
        <p className="text-center text-xs text-gray-dark">
          This action cannot be undone. All project data, files and associated
          information will permanently removed.
        </p>
        <div className="flex self-stretch gap-2 max-sm:flex-col">
          <div className="flex-1 max-sm:order-2">
            <form method="dialog">
              <CtaButton variant="secondary" isFullWidth disabled={isDeleting}>
                Cancel
              </CtaButton>
            </form>
          </div>
          <div className="flex-1">
            <CtaButton
              variant="danger"
              isFullWidth
              onClick={onDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting project..." : "Delete Project"}
            </CtaButton>
          </div>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal"),
  );
}
