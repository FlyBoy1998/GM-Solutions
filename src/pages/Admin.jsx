import { Outlet } from "react-router";

export default function Admin() {
  return (
    <div className="flex justify-center items-center h-full">
      <Outlet />
    </div>
  );
}
