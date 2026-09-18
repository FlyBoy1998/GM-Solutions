import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { mediaCategories } from "../../../constants/data";
import { bytesToMB } from "../../../utils/utils";

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
    const type = file.type;
    const size = Number(file.metadata?.size) || 0;

    acc[type] = (acc[type] || 0) + size;

    return acc;
  }, {});

  const data = {
    labels: mediaCategories.map((category) => category.label),
    datasets: [
      {
        data: mediaCategories.map((category) =>
          bytesToMB(storageUsage[category.type]),
        ),
        backgroundColor: mediaCategories.map((category) => category.color),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-1 justify-center">
      <div className="h-46 w-46">
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
}
