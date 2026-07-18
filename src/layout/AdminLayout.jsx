import { Outlet } from "react-router";

import AdminAside from "../components/admin/AdminAside";

export default function AdminLayout() {
  return (
    <div className="grid grid-cols-[24rem_1fr] min-h-screen">
      <AdminAside />
      <Outlet />
    </div>
  );
}
