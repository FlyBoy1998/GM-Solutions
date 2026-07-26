import { Link } from "react-router";

import { leads } from "../../../../dummy_data/data";

import LeadItem from "./LeadItem";

export default function RecentLeads() {
  const sortedLeads = leads.sort((a, b) => {
    const dateA = new Date(a.createdAt.split("T")[0]);
    const dateB = new Date(b.createdAt.split("T")[0]);
    return dateB - dateA;
  });

  return (
    <div className="col-start-4 col-end-5 row-start-4 row-end-5 flex flex-col rounded-lg py-3 px-4 shadow-md bg-white">
      <div className="mb-2 flex justify-between items-center">
        <h3 className="font-bold">Recent Leads</h3>
        <Link to="/admin/leads" className="text-xs text-blue-500">
          View All Leads
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-evenly gap-3">
        {sortedLeads.slice(0, 3).map((leadItem) => (
          <LeadItem key={leadItem.id} leadItem={leadItem} />
        ))}
      </div>
    </div>
  );
}
