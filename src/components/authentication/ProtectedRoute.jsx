import { Navigate } from "react-router";

import { useUser } from "../../hooks/useUser";

import FullPageSpinner from "../ui/FullPageSpinner";

export default function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/admin" replace />;
  }

  if (isAuthenticated) return children;
}
