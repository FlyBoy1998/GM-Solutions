import { Outlet } from "react-router";

import AdminAside from "../components/admin/auth/AdminAside";

export default function AdminLayout() {
  return (
    <div className="h-screen grid grid-cols-[22rem_1fr]">
      <AdminAside />
      <Outlet />
    </div>
  );
}
