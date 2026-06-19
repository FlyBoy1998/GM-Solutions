import MaterialsUsed from "./MaterialsUsed";
import ProjectDescription from "./ProjectDescription";
import ProjectDetailsCard from "./ProjectDetailsCard";
import WorkCompletedList from "./WorkCompletedList";

export default function ProjectOverviewSection({ project }) {
  return (
    <section className="section wrapper">
      <div className="flex gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <ProjectDescription project={project} />
          <WorkCompletedList project={project} />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <ProjectDetailsCard project={project} />
          <MaterialsUsed project={project} />
        </div>
      </div>
    </section>
  );
}
