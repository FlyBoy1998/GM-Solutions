import PageHeader from "../ui/PageHeader";
import HamburgerBtn from "../../navigation/HamburgerButton";
import DashboardStats from "./DashboardStats";
import LatestProjectsTable from "./LatestProjectsTable";
import QuickActions from "./QuickActions";
import RecentLeads from "./RecentLeads";

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_auto_1fr_1fr] gap-4 p-6 max-lg:grid-rows-[auto_auto_auto_1fr_1fr] overflow-y-auto max-lg:grid-cols-3">
      <div className="hidden col-span-full max-lg:block">
        <HamburgerBtn />
      </div>
      <PageHeader
        heading="Dashboard"
        description="Welcome to your dashboard!"
      />
      <DashboardStats />
      <LatestProjectsTable />
      <QuickActions />
      <RecentLeads />
    </div>
  );
}
