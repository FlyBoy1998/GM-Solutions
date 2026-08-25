import SectionHeader from "../../../ui/SectionHeader";
import CtaButton from "../../../../ui/CtaButton";

import adminImg from "../../../../../../public/images/admin.png";

export default function AdminAccount() {
  return (
    <div className="col-start-1 col-end-3 row-start-2 row-end-3 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Admin Account"
        description="Manage your administrator account."
      />
      <div className="flex-1 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6">
            <img src={adminImg} className="object-cover h-full w-full" alt="" />
          </div>
          <p className="text-sm text-gray-dark">admin@email.com</p>
        </div>
        <CtaButton variant="secondary" size="small">
          Change Password
        </CtaButton>
      </div>
    </div>
  );
}
