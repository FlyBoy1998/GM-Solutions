import { useNavigate } from "react-router";

import CtaButton from "../../../ui/CtaButton";

export default function ProjectModalActions({ projectId, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="sticky bottom-0 flex justify-between items-center px-4 py-6 bg-white inset-shadow-sm max-sm:flex-col max-sm:gap-2">
      <CtaButton variant="danger" onClick={onDelete}>
        Delete Project
      </CtaButton>
      <div className="flex items-center gap-2 max-sm:flex-col">
        <form method="dialog" className="max-sm:order-2">
          <CtaButton variant="secondary">Close</CtaButton>
        </form>
        <CtaButton
          variant="primary"
          onClick={() => navigate(`/admin/projects/${projectId}/edit`)}
        >
          Edit Project
        </CtaButton>
      </div>
    </div>
  );
}
