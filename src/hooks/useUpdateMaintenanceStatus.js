import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateMaintenanceStatus } from "../api/settingsApi";

export default function useUpdateMaintenanceStatus() {
  const queryClient = useQueryClient();

  const {
    mutate: updateStatus,
    isPending,
    error,
  } = useMutation({
    mutationFn: updateMaintenanceStatus,
    onSuccess: (isMaintenance) => {
      queryClient.setQueryData(["maintenance-status"], isMaintenance);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["maintenance-status"]);
    },
  });

  return { updateStatus, isPending, error };
}
