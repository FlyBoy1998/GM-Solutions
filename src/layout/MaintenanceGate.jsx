import houseConstructionLoader from "../../public/images/house-construction-loader.gif";

import { useLocation, Outlet, Navigate } from "react-router";
import useMaintenanceStatus from "../hooks/useMaintenanceStatus";

import PageLoader from "../components/ui/PageLoader";
import FetchErrorState from "../components/ui/FetchErrorState";
import Maintenance from "../pages/Maintenance";

export default function MaintenanceGate() {
  const location = useLocation();

  const {
    data: isMaintenance = false,
    isLoading,
    error,
  } = useMaintenanceStatus();

  if (isLoading) {
    return (
      <PageLoader imageSrc={houseConstructionLoader} className="items-center" />
    );
  }

  if (!isLoading && error) {
    return <FetchErrorState />;
  }

  if (isMaintenance) {
    if (location.pathname !== "/") {
      return <Navigate to="/" replace />;
    }

    return <Maintenance />;
  }

  return <Outlet />;
}
