import { heroStats } from "../../constants/data";

import StatItem from "../ui/StatItem";

export default function HeroStatsBar() {
  return (
    <div className="hidden absolute gap-3 bottom-0 py-8 xl:flex">
      {heroStats.map((stat) => (
        <StatItem
          key={stat.label}
          label={stat.label}
          value={stat.value}
          Icon={stat.icon}
        />
      ))}
    </div>
  );
}
