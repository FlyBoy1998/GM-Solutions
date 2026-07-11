import MaterialsUsed from "./MaterialsUsed";
import ProjectDescription from "./ProjectDescription";
import ProjectDetailsCard from "./ProjectDetailsCard";
import WorkCompletedList from "./WorkCompletedList";

export default function ProjectOverviewSection({ project }) {
  return (
    <section className="section">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-6">
        <div className="col-span-1 flex flex-col gap-6 max-sm:col-span-full">
          <ProjectDescription project={project} />
          <WorkCompletedList project={project} />
        </div>
        <div className="col-span-1 flex flex-col gap-6 max-sm:col-span-full">
          <ProjectDetailsCard project={project} />
          <MaterialsUsed project={project} />
        </div>
      </div>
    </section>
  );
}
