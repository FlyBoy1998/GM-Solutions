import SectionHeader from "../../../ui/SectionHeader";
import ToggleButton from "../../../ui/ToggleButton";

export default function MaintenanceMode() {
  return (
    <div className="col-start-1 col-end-3 row-start-3 row-end-4 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Maintenance Mode"
        description="Temporarily disable the website for maintenance."
      />
      <div className="flex-1 flex items-center">
        <div className="flex items-center gap-2">
          <ToggleButton />
          <p className="text-xs text-gray-dark">
            When enabled, only administrators can access the website.
          </p>
        </div>
      </div>
    </div>
  );
}
