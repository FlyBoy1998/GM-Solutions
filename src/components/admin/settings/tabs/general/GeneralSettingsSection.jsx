import SectionHeader from "../../../ui/SectionHeader";
import GeneralSettingsForm from "./GeneralSettingsForm";

export default function GeneralSettingsSection() {
  return (
    <div className="col-span-full flex flex-col gap-4 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="General Settings"
        description="Manage your website name, timezone and other general preferences."
      />
      <GeneralSettingsForm />
    </div>
  );
}
