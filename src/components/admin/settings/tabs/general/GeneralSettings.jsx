import GeneralSettingsSection from "./GeneralSettingsSection";
import AdminAccount from "./AdminAccount";
import MaintenanceMode from "./MaintenanceMode";
import BusinessInformation from "./BusinessInformation";

export default function GeneralSettings() {
  return (
    <div className="w-full grid grid-cols-4 grid-rows-[auto_1fr_1fr] gap-4">
      <GeneralSettingsSection />
      <AdminAccount />
      <MaintenanceMode />
      <BusinessInformation />
    </div>
  );
}
