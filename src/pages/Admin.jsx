import { Outlet } from "react-router";

export default function Admin() {
  return (
    <div className="overflow-y-auto">
      <Outlet />
    </div>
  );
}
