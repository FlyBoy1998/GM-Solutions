import SectionHeader from "../ui/SectionHeader";
import StorageUsageChart from "./StorageUsageChart";

import { bytesToMB } from "../../../utils/utils";

export default function StorageUsage({ mediaFiles }) {
  const memoryUsed = mediaFiles?.reduce((memory, file) => {
    memory += file?.metadata.size;

    return memory;
  }, 0);

  return (
    <div className="col-span-2 row-start-4 row-end-5 flex flex-col gap-4 py-3 px-4 rounded-lg shadow-md bg-white max-sm:col-span-full">
      <SectionHeader
        title="Storage Usage"
        description="Monitor your media storage and keep track of available space."
      />
      <div>
        <StorageUsageChart mediaFiles={mediaFiles} />
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="font-bold text-lg">{bytesToMB(memoryUsed)}MB</p>
        <p className="font-bold text-xs text-gray-dark">of 500MB used</p>
      </div>
    </div>
  );
}
