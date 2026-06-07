import FilterButton from "./FilterButton";

import { projectFilters } from "../../utils/utils";

export default function ProjectFilters() {
  return (
    <div id="filter-buttons" className="flex gap-2">
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
