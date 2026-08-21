import GeneralSettingsForm from "./GeneralSettingsForm";

export default function GeneralSettingsSection() {
  return (
    <div className="col-span-full flex flex-col gap-4 p-4 rounded-lg shadow-md bg-white">
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-2xl font-bold">General Settings</h3>
        <p className="text-sm text-gray-dark">
          Manage your website name, timezone and other general preferences.
        </p>
      </div>
      <GeneralSettingsForm />
    </div>
  );
}
