import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteMedia as deleteMediaApi } from "../api/api";

export default function useDeleteMedia() {
  const queryClient = useQueryClient();

  const { mutate: deleteMedia, isPending: isDeleting } = useMutation({
    mutationFn: (mediaFile) => deleteMediaApi(mediaFile),
    onSuccess: async (result, mediaFile) => {
      const queryKeys = [
        ["media"],
        mediaFile.bucket === "project_images" ? ["projects"] : ["services"],
      ];

      await Promise.all(
        queryKeys.map((queryKey) =>
          queryClient.invalidateQueries({ queryKey }),
        ),
      );

      if (result?.success) {
        toast.success("Media successfully deleted.");
      }
    },
    onError: (err) => {
      toast.error(err.message || "Failed to delete media.");
    },
  });

  return { deleteMedia, isDeleting };
}
