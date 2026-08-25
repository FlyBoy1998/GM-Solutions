import SectionHeader from "../ui/SectionHeader";
import StorageUsageChart from "./StorageUsageChart";

import { bytesToMB } from "../../../utils/utils";

export default function StorageUsage({ mediaFiles }) {
  const memoryUsed = mediaFiles?.reduce((memory, file) => {
    memory += file.metadata?.size;

    return bytesToMB(memory);
  }, 0);

  return (
    <div className="col-start-4 col-end-5 row-start-3 row-end-4 flex flex-col gap-4 py-3 px-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Storage Usage"
        description="Monitor your media storage and keep track of available space."
      />
      <div>
        <StorageUsageChart mediaFiles={mediaFiles} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="font-bold text-lg">{memoryUsed}MB</p>
        <p className="font-bold text-xs text-gray-dark">of 500MB used</p>
      </div>
    </div>
  );
}
