import { useNavigate } from "react-router";
import { FolderPlus, Users, Settings } from "lucide-react";

import QuickActionButton from "../ui/QuickActionButton";

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="col-start-4 col-end-5 row-start-3 row-end-4 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white max-xl:col-start-3 max-xl:col-end-5 max-xl:row-start-5 max-xl:row-end-6">
      <h3 className="mb-2 font-bold">Quick Actions</h3>
      <div className="flex-1 flex flex-col justify-evenly">
        <QuickActionButton
          Icon={FolderPlus}
          iconClassName="text-blue-500 bg-blue-100"
        >
          Add New Project
        </QuickActionButton>
        <QuickActionButton
          Icon={Users}
          iconClassName="text-orange-600 bg-orange-100"
          onClick={() => navigate("/admin/leads")}
        >
          View All Leads
        </QuickActionButton>
        <QuickActionButton
          Icon={Settings}
          iconClassName="text-purple-600 bg-purple-100"
          onClick={() => navigate("/admin/settings")}
        >
          Settings
        </QuickActionButton>
      </div>
    </div>
  );
}
