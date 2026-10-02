import { Outlet } from "react-router";
import { Save } from "lucide-react";

import PageHeader from "../ui/PageHeader";
import CtaButton from "../../ui/CtaButton";
import SettingsTabs from "./SettingsTabs";

export default function AdminSettings() {
  return (
    <div className="grid grid-rows-[auto_auto_1fr] gap-6 h-full p-6 overflow-y-auto">
      <PageHeader
        heading="Settings"
        description="Manage your website, business and system preference."
      >
        <div className="max-lg:hidden">
          <CtaButton variant="primary" Icon={Save}>
            Save Changes
          </CtaButton>
        </div>
      </PageHeader>
      <SettingsTabs />
      <Outlet />
    </div>
  );
}
