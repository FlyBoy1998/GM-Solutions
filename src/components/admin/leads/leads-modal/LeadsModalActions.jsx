import { useNavigate } from "react-router";

import CtaButton from "../../../ui/CtaButton";

export default function LeadsModalActions({ leadId, date }) {
  const navigate = useNavigate();

  return (
    <div className="sticky bottom-0 flex justify-between items-center px-4 py-6 bg-white inset-shadow-sm max-sm:flex-col max-sm:gap-2">
      <p className="text-xs text-gray-dark">Created on {date}.</p>
      <div className="flex items-center gap-2">
        <form method="dialog">
          <CtaButton variant="secondary">Close</CtaButton>
        </form>
        <CtaButton
          variant="primary"
          onClick={() => navigate(`/admin/leads/${leadId}/edit`)}
        >
          Edit Lead
        </CtaButton>
      </div>
    </div>
  );
}
