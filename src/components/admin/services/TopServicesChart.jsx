import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { projects } from "../../../../dummy_data/data";
import { chartServiceCategories } from "../../../constants/data";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export default function TopServicesChart() {
  const projectCounts = projects.reduce((counts, project) => {
    counts[project.label] = (counts[project.label] || 0) + 1;

    return counts;
  }, {});

  const data = {
    labels: chartServiceCategories.map((category) => category.chartLabel),
    datasets: [
      {
        data: chartServiceCategories.map(
          (category) => projectCounts[category.label] || 0,
        ),
        backgroundColor: chartServiceCategories.map(
          (category) => category.color,
        ),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-1 justify-center">
      <div className="h-50 w-50">
        <Pie options={options} data={data} />
      </div>
    </div>
  );
}
