import { useContext } from "react";
import { useNavigate } from "react-router";
import { AdminProjectsContext } from "../context/AdminProjectsLayout";
import { Folder, MapPin, Dot, Calendar } from "lucide-react";

import CtaButton from "../../ui/CtaButton";

import { formatToCapitalize, formatDate } from "../../../utils/utils";

export default function ProjectCard({ project }) {
  const { handleDisplayProjectModal, handleDisplayDeleteModal } =
    useContext(AdminProjectsContext);

  const navigate = useNavigate();

  const thumbnail = project?.project_images?.find(
    (image) => image.image_type === "thumbnail",
  ).storage_path.publicUrl;

  let projectStatusClasses =
    "inline-flex items-center pe-[12px] font-bold rounded-md";

  if (project.status === "completed") {
    projectStatusClasses += " project-status-completed";
  } else if (project.status === "in-progress") {
    projectStatusClasses += " project-status-in-progress";
  } else {
    projectStatusClasses += " project-status-draft";
  }

  return (
    <div className="flex flex-col flex-[0_0_50%] min-w-0 min-h-77.5 p-3 bg-white rounded-lg transform translate-x-0 max-sm:flex-[0_0_100%]">
      <div className="h-30 rounded-lg overflow-hidden">
        <img src={thumbnail} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex flex-col gap-1">
          <h2 className="heading-xs">{project?.title}</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Folder size={14} className="text-gray-dark" />
              <span className="text-xs text-gray-dark">{project?.label}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-gray-dark" />
              <span className="text-xs text-gray-dark">{project?.address}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-auto mb-2">
        <div className="inline">
          <div className={projectStatusClasses}>
            <Dot aria-hidden />
            <span className="text-sm">
              {formatToCapitalize(project?.status)}
            </span>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 rounded-md text-sm">
          <Calendar size={14} aria-hidden />
          <span className="text-xs">
            {formatDate(project?.completion_date)}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1 max-sm:gap-2">
        <CtaButton
          variant="secondary"
          size="small"
          isFullWidth
          onClick={() => handleDisplayProjectModal(project)}
        >
          View
        </CtaButton>
        <CtaButton
          variant="primary"
          size="small"
          isFullWidth
          onClick={() => navigate(`/admin/projects/${project?.id}/edit`)}
        >
          Edit
        </CtaButton>
        <CtaButton
          variant="danger"
          size="small"
          isFullWidth
          onClick={() => handleDisplayDeleteModal(project)}
        >
          Delete
        </CtaButton>
      </div>
    </div>
  );
}
