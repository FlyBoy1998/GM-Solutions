import toast from "react-hot-toast";
import useMaintenanceStatus from "../../../../../hooks/useMaintenanceStatus";
import useUpdateMaintenanceStatus from "../../../../../hooks/useUpdateMaintenanceStatus";

import SectionHeader from "../../../ui/SectionHeader";
import ToggleButton from "../../../ui/ToggleButton";

export default function MaintenanceMode() {
  const { data: isMaintenanceMode = false } = useMaintenanceStatus();

  const { updateStatus, isPending } = useUpdateMaintenanceStatus();

  function handleMaintenanceMode() {
    const nextStatus = !isMaintenanceMode;

    updateStatus(nextStatus, {
      onSuccess: () => {
        toast.success(
          !isMaintenanceMode
            ? "Maintenance mode is enabled"
            : "Maintenance mode is disabled.",
        );
      },
      onError: (error) => {
        console.log(error);

        toast.error(error.message || "Updateing maintenance mode failed.");
      },
    });
  }

  return (
    <div className="col-start-1 col-end-3 row-start-3 row-end-4 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white max-md:col-span-full max-md:row-start-5 max-md:row-end-6">
      <SectionHeader
        title="Maintenance Mode"
        description="Temporarily disable the website for maintenance."
      />
      <div className="flex-1 flex items-center py-6">
        <div className="flex items-center gap-2">
          <ToggleButton
            isToggled={isMaintenanceMode}
            onChange={handleMaintenanceMode}
            disabled={isPending}
          />
          <p className="text-xs text-gray-dark">
            When enabled, only administrators can access the website.
          </p>
        </div>
      </div>
    </div>
  );
}
