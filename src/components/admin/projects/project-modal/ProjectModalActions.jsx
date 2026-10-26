import { useNavigate } from "react-router";

import CtaButton from "../../../ui/CtaButton";

export default function ProjectModalActions({ projectId, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="sticky bottom-0 flex justify-between items-center px-4 py-6 bg-white inset-shadow-sm max-sm:flex-col max-sm:gap-2">
      <div className="max-sm:w-full">
        <CtaButton variant="danger" isFullWidth onClick={onDelete}>
          Delete Project
        </CtaButton>
      </div>
      <form
        method="dialog"
        className="ms-auto me-2 max-sm:order-2 max-sm:w-full max-sm:mx-0"
      >
        <CtaButton variant="secondary" isFullWidth>
          Close
        </CtaButton>
      </form>
      <div className="max-sm:w-full">
        <CtaButton
          variant="primary"
          isFullWidth
          onClick={() => navigate(`/admin/projects/${projectId}/edit`)}
        >
          Edit Project
        </CtaButton>
      </div>
    </div>
  );
}
