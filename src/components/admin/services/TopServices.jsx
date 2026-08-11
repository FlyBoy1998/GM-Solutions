import TopServicesChart from "./TopServicesChart";

export default function TopServices() {
  return (
    <div className="col-start-3 col-end-4 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white">
      <h3 className="mb-2 font-bold">Top Services by Projects</h3>
      <TopServicesChart />
    </div>
  );
}
