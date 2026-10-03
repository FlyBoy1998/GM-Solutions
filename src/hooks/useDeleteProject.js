import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProject as deleteProjectApi } from "../api/api";

export default function useDeleteProject() {
  const queryClient = useQueryClient();
  const abortControllerRef = useRef(null);

  const { mutate: deleteProject, isPending: isDeleting } = useMutation({
    mutationFn: async ({ projectId }) => {
      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        return await deleteProjectApi(projectId, controller.signal);
      } finally {
        abortControllerRef.current = null;
      }
    },
    onSuccess: (_, variables) => {
      const { projectId } = variables;
      toast.success("Project successfully deleted.");

      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.removeQueries({ queryKey: ["project", projectId] });
    },

    onError: (error) => {
      if (error.name === "AbortError") {
        toast.error("Project deletion cancelled.");
      }
      toast.error(error.message);
    },
  });

  return { deleteProject, isDeleting };
}
