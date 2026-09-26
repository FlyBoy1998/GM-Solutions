import { createPortal } from "react-dom";

import LeadsModalActions from "./LeadsModalActions";
import LeadsModalContact from "./LeadsModalContact";
import LeadsModalEnquiry from "./LeadsModalEnquiry";
import LeadsModalMessage from "./LeadsModalMessage";
import LeadsModalTimeline from "./LeadsModalTimeline";
import LeadsModalAdditionalInfo from "./LeadsModalAdditionalInfo";
import ModalHeader from "../../ui/ModalHeader";

import { formatDate } from "../../../../utils/utils";

export default function LeadModal({ lead, ref }) {
  return createPortal(
    <dialog
      className="modal fixed top-6 left-1/2 w-[calc(100%-3rem)] m-0 max-w-4xl -translate-x-1/2 overflow-y-auto rounded-lg border-0 shadow-2xl backdrop:bg-modal-backdrop"
      ref={ref}
    >
      <ModalHeader modalTitle="Lead Details" />
      <div className="grid grid-cols-3 gap-6 px-4 py-2 max-sm:grid-cols-1">
        <div className="col-start-1 col-end-3 flex flex-col gap-6 max-sm:col-span-full">
          <LeadsModalContact lead={lead} />
          <LeadsModalEnquiry lead={lead} />
          <LeadsModalMessage lead={lead} />
        </div>
        <div className="col-start-3 col-end-4 flex flex-col gap-4 max-sm:col-span-full">
          <LeadsModalTimeline lead={lead} />
          <LeadsModalAdditionalInfo lead={lead} />
        </div>
      </div>
      <LeadsModalActions date={formatDate(lead.created_at)} />
    </dialog>,
    document.getElementById("modal"),
  );
}
