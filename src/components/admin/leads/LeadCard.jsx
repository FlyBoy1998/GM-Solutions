import { useContext } from "react";
import { useNavigate } from "react-router";
import { Phone, Paperclip, Calendar, Eye, Pen, Trash } from "lucide-react";
import { AdminLeadsContext } from "../context/AdminLeadsLayout";

import CtaButton from "../../ui/CtaButton";
import LeadDetail from "./LeadDetail";

import { formatDate, formatToCapitalize } from "../../../utils/utils";

export default function LeadCard({ lead }) {
  const navigate = useNavigate();
  const { handleDisplayLeadModal, handleDisplayDeleteModal } =
    useContext(AdminLeadsContext);

  return (
    <article className="flex flex-col gap-6 w-full p-4 rounded-lg shadow-md bg-white max-md:flex-[0_0_100%] max-md:min-w-0">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="font-bold">{`${lead?.first_name} ${lead?.last_name}`}</h3>
            <div className="text-sm text-gray-dark">{lead?.project_type}</div>
          </div>
          <div>{formatToCapitalize(lead?.status)}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <LeadDetail icon={Phone} label="Contact">
          <div className="flex flex-col">
            <p className="text-xs">{lead?.email}</p>
            <p className="text-xs">{lead?.phone}</p>
          </div>
        </LeadDetail>
        <LeadDetail icon={Paperclip} label="Source">
          <p className="text-xs">{lead?.source}</p>
        </LeadDetail>
        <LeadDetail icon={Calendar} label="Date">
          <p className="text-xs">
            {formatDate(lead?.created_at.split("T")[0])}
          </p>
        </LeadDetail>
      </div>
      <div className="flex gap-2 max-sm:flex-col">
        <div className="flex-1">
          <CtaButton
            variant="secondary"
            Icon={Eye}
            isFullWidth
            onClick={() => handleDisplayLeadModal(lead)}
          >
            View
          </CtaButton>
        </div>
        <div className="flex-1">
          <CtaButton
            variant="secondary"
            Icon={Pen}
            isFullWidth
            onClick={() => navigate(`/admin/leads/${lead.id}/edit`)}
          >
            Edit
          </CtaButton>
        </div>
        <div className="flex-1">
          <CtaButton
            variant="danger"
            Icon={Trash}
            isFullWidth
            onClick={() => handleDisplayDeleteModal(lead)}
          >
            Delete
          </CtaButton>
        </div>
      </div>
    </article>
  );
}
