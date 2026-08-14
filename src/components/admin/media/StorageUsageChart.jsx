import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { mediaCategories } from "../../../constants/data";
import { bytesToMB, getMediaFileInfo } from "../../../utils/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export default function StorageUsageChart({ mediaFiles }) {
  const storageUsage = mediaFiles?.reduce((acc, file) => {
    const mediaFile = getMediaFileInfo(file);

    acc[mediaFile.category] = bytesToMB(
      (acc[mediaFile.category] || 0) + mediaFile.metadata.size,
    );

    return acc;
  }, {});

  const data = {
    labels: mediaCategories.map((category) => category.label),
    datasets: [
      {
        data: mediaCategories.map((category) => storageUsage?.[category.label]),
        backgroundColor: mediaCategories.map((category) => category.color),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-1 justify-center">
      <div className="h50 w-50">
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
}
