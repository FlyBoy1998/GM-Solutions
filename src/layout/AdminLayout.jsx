import { Outlet } from "react-router";

import AdminAside from "../components/admin/auth/AdminAside";

export default function AdminLayout() {
  return (
    <div className="h-screen grid grid-cols-[20rem_1fr] max-lg:grid-cols-[18rem_1fr] max-md:grid-cols-[16rem_1fr]">
      <AdminAside />
      <Outlet />
    </div>
  );
}
