import { createPortal } from "react-dom";

import ProjectModalCarousel from "./ProjectModalCarousel";
import ProjectModalOverview from "./ProjectModalOverview";
import ProjectModalMaterials from "./ProjectModalMaterials";
import ProjectModalActions from "./ProjectModalActions";
import ProjectModalHeader from "./ProjectModalHeader";
import ProjectModalWorkCompleted from "./ProjectModalWorkCompleted";
import ProjectModalDetails from "./ProjectModalDetails";
import BeforeAfterImages from "./BeforeAfterImages";

export default function ProjectModal({ project, onDelete, ref }) {
  const projectId = project?.id;
  const carouselImages = project?.project_images.filter(
    (image) => image.image_type === "carousel",
  );
  const overview = project?.overview;
  const materials = project?.materials;
  const workCompleted = project?.work_completed;

  return createPortal(
    <dialog
      className="modal fixed top-6 left-1/2 w-[calc(100%-3rem)] m-0 max-w-4xl -translate-x-1/2 overflow-y-auto rounded-lg border-0 shadow-2xl backdrop:bg-modal-backdrop"
      ref={ref}
    >
      <ProjectModalHeader />
      <div className="flex gap-6 px-4 py-2 max-md:flex-col">
        <div className="flex-1">
          <ProjectModalDetails project={project} />
          {overview ? <ProjectModalOverview overview={overview} /> : null}
          {materials?.length ? (
            <ProjectModalMaterials materials={materials} />
          ) : null}
          {workCompleted?.length ? (
            <ProjectModalWorkCompleted workCompleted={workCompleted} />
          ) : null}
        </div>
        <div className="flex flex-col gap-6 w-[45%] max-md:flex-row max-md:w-full max-sm:flex-col">
          {carouselImages?.length ? (
            <ProjectModalCarousel carouselImages={carouselImages} />
          ) : null}
          <BeforeAfterImages project={project} />
        </div>
      </div>
      <ProjectModalActions
        projectId={projectId}
        onDelete={() => onDelete(project)}
      />
    </dialog>,
    document.getElementById("modal"),
  );
}
