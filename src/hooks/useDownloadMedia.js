import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { downloadMediaFile } from "../api/api";

export default function useDownlaodMedia() {
  const { mutate: downloadMedia, isPending: isDownloading } = useMutation({
    mutationFn: async ({ bucket, storagePath, fileName }) => {
      const blob = await downloadMediaFile(bucket, storagePath);

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      link.remove();
      URL.revokeObjectURL(url);
    },
    onError: (error) => {
      toast.error(error.message || "Could not download media file.");
    },
  });

  return { downloadMedia, isDownloading };
}
