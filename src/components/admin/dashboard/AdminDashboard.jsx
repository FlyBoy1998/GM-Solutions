import PageHeader from "../ui/PageHeader";
import DashboardStats from "./DashboardStats";
import LatestProjectsTable from "./LatestProjectsTable";
import QuickActions from "./QuickActions";
import RecentLeads from "./RecentLeads";

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_auto_1fr_1fr] gap-4 p-6 max-xl:grid-rows-[repeat(4,auto)] overflow-y-auto">
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
