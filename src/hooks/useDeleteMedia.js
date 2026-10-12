import { useRef } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteMedia as deleteMediaApi } from "../api/api";

export default function useDeleteMedia() {
  const queryClient = useQueryClient();
  const abortControllerRef = useRef(null);

  const { mutate: deleteMedia, isPending: isDeleting } = useMutation({
    mutationFn: async (mediaFile) => {
      const controller = new AbortController();
      abortControllerRef.current = controller.signal;

      try {
        await deleteMediaApi(
          mediaFile,
          mediaFile.bucket,
          mediaFile.bucket,
          controller.signal,
        );
      } finally {
        abortControllerRef.current = null;
      }
    },
    onSuccess: async (result) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["media"] }),
        queryClient.invalidateQueries({ queryKey: ["projects"] }),
        queryClient.invalidateQueries({ queryKey: ["services"] }),
      ]);

      if (result.storageCleanupFailed) {
        toast.error(
          "Media record deleted, but the storage file could not be removed.",
        );
      } else {
        toast.success("Media successfully deleted.");
      }
    },
    onError: (err) => {
      toast.error(err.message || "Failed to delete media.");
    },
  });

  return { deleteMedia, isDeleting };
}
