import StorageUsageChart from "./StorageUsageChart";

export default function StorageUsage({ mediaFiles }) {
  return (
    <div className="col-start-4 col-end-5 row-start-3 row-end-4 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white">
      <h3 className="mb-2 font-bold">Storage Usage</h3>
      <div>
        <StorageUsageChart mediaFiles={mediaFiles} />
      </div>
    </div>
  );
}
