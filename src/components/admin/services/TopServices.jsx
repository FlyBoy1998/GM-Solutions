import SectionHeader from "../ui/SectionHeader";
import TopServicesChart from "./TopServicesChart";

export default function TopServices() {
  return (
    <div className="col-start-3 col-end-4 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Top Services by Projects"
        description="See which services generate the most projects for your business."
      />
      <TopServicesChart />
    </div>
  );
}
