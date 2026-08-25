import { CookingPot, Bath, House } from "lucide-react";

import SectionHeader from "../ui/SectionHeader";
import ProjectsCategoriesItem from "./ProjectsCategoriesItem";

import { projects } from "../../../../dummy_data/data";

export default function ProjectsCategories() {
  const kitchenProjectsCount = projects.filter(
    (project) => project.category === "kitchen",
  ).length;
  const bathroomProjectsCount = projects.filter(
    (project) => project.category === "bathroom",
  ).length;
  const fullHomeProjectsCount = projects.filter(
    (project) => project.category === "full-home",
  ).length;

  return (
    <div className="col-start-4 col-end-5 row-start-4 row-end-5 flex flex-col py-3 px-4 rounded-lg shadow-md bg-white max-xl:col-start-3 max-xl:col-end-5 max-xl:row-start-5 max-xl:row-end-6">
      <SectionHeader
        title="Categories"
        description="A breakdown of projects by renovation category."
      />
      <div className="flex-1 flex flex-col justify-evenly">
        <ProjectsCategoriesItem
          Icon={CookingPot}
          projectType="Kitchen"
          value={kitchenProjectsCount}
        />
        <ProjectsCategoriesItem
          Icon={Bath}
          projectType="Bathroom"
          value={bathroomProjectsCount}
        />
        <ProjectsCategoriesItem
          Icon={House}
          projectType="Full Home"
          value={fullHomeProjectsCount}
        />
      </div>
    </div>
  );
}
