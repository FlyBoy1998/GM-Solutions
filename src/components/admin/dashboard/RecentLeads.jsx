import SectionHeader from "../ui/SectionHeader";
import LeadItem from "./LeadItem";

export default function RecentLeads({ leads }) {
  const sortedLeads = leads?.sort((a, b) => {
    const dateA = new Date(a.created_at.split("T")[0]);
    const dateB = new Date(b.created_at.split("T")[0]);
    return dateB - dateA;
  });

  return (
    <div className="col-start-4 col-end-5 row-start-4 row-end-5 flex flex-col rounded-lg py-3 px-4 shadow-md bg-white max-xl:col-start-1 max-xl:col-end-3 max-xl:row-start-5 max-xl:row-end-6 max-sm:col-span-full max-sm:row-start-6 max-sm:row-end-7">
      <SectionHeader
        title="Recent Leads"
        description="View the latest enquiries submitted through your website."
      />
      <div className="flex-1 flex flex-col gap-3">
        {sortedLeads.slice(0, 3).map((item) => (
          <LeadItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
