import FilterButton from "./FilterButton";

import { projectFilters } from "../../constants/data";

export default function ProjectFilters() {
  return (
    <div className="grid grid-cols-4 gap-2 max-xl:grid-cols-2 max-lg:grid-cols-4 max-md:grid-cols-2">
      {projectFilters.map((filter) => (
        <FilterButton
          key={filter.value}
          filter={filter.value}
          Icon={filter.icon}
        >
          {filter.label}
        </FilterButton>
      ))}
    </div>
  );
}
