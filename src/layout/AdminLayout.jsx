import { Outlet } from "react-router";

import AdminAside from "../components/admin/auth/AdminAside";
import AdminMobileHeader from "../components/admin/navigation/AdminMobileHeader";
import AdminMobileNavigation from "../components/admin/navigation/AdminMobileNavigation";

export default function AdminLayout() {
  return (
    <div className="h-screen grid grid-cols-[20rem_1fr] max-lg:grid-cols-1 max-lg:grid-rows-[auto_1fr]">
      <AdminMobileHeader />
      <AdminMobileNavigation />
      <AdminAside />
      <Outlet />
    </div>
  );
}
