import { useMutation, useQueryClient } from "@tanstack/react-query";

import { logout as logoutApi } from "../api/auth";
import { useNavigate } from "react-router";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/admin", { replace: true });
    },
  });

  return { logout, isLoading };
}
