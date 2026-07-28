import { Outlet } from "react-router";

import AdminAside from "../components/admin/auth/AdminAside";

export default function AdminLayout() {
  return (
    <div className="grid grid-cols-[22rem_1fr] min-h-screen">
      <AdminAside />
      <Outlet />
    </div>
  );
}
