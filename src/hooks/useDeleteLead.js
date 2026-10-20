import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteLead as deleteLeadApi } from "../api/api";

export default function useDeleteLead() {
  const queryClient = useQueryClient();
  const abortSignalRef = useRef(null);

  const { mutate: deleteLead, isPending: isDeleting } = useMutation({
    mutationFn: async (leadId) => {
      const controller = new AbortController();
      abortSignalRef.current = controller.signal;

      try {
        return await deleteLeadApi(leadId, controller.signal);
      } finally {
        abortSignalRef.current = null;
      }
    },
    onSuccess: () => {
      toast.success("Lead successfully deleted!");

      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
    onError: (err) => {
      if (err.name === "AbortError") {
        toast.error("Lead deletion cancelled.");
      }

      toast.error(err.name || "Lead could not be deleted.");
    },
  });

  return { deleteLead, isDeleting };
}
