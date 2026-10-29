import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteService as deleteServiceApi } from "../api/servicesApi";

export default function useDeleteService() {
  const queryClient = useQueryClient();
  const abortControllerRef = useRef(null);

  const { mutate: deleteService, isPending: isDeleting } = useMutation({
    mutationFn: async ({ serviceId }) => {
      const controller = new AbortController();
      abortControllerRef.current = controller.signal;

      try {
        await deleteServiceApi(serviceId);
      } finally {
        abortControllerRef.current = null;
      }
    },
    onSuccess: () => {
      toast.success("Service successfully deleted.");

      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (err) => {
      if (err.name === "AbortError") {
        toast.error("Service deletion cancelled.");
      }
      toast.error(err.message || "Service could not be deleted.");
    },
  });

  return { deleteService, isDeleting };
}
