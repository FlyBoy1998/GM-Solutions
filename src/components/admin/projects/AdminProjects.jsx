import { useContext } from "react";
import { useNavigate } from "react-router";
import { Plus } from "lucide-react";
import { AdminProjectsContext } from "../context/AdminProjectsLayout";
import useProjects from "../../../hooks/useProjects";
import useDeleteProject from "../../../hooks/useDeleteProject";

import PageHeader from "../ui/PageHeader";
import CtaButton from "../../ui/CtaButton";
import ProjectFilters from "./ProjectFilters";
import ProjectsCategories from "./ProjectsCategories";
import ProjectsManagementTable from "./ProjectsManagementTable";
import ProjectsOverview from "./ProjectsOverview";
import ProjectsCarousel from "../ui/ProjectsCarousel";
import ProjectModal from "./project-modal/ProjectModal";
import DeleteModal from "../ui/DeleteModal";

export default function AdminProjects() {
  const navigate = useNavigate();

  const {
    selectedProject,
    deleteModalRef,
    projectDetailsModalRef,
    setSelectedProject,
    handleDisplayDeleteModal,
  } = useContext(AdminProjectsContext);

  const { data: projects = [], isLoading, error } = useProjects();
  const { deleteProject, isDeleting } = useDeleteProject();

  function handleDeleteProject() {
    if (!selectedProject?.id) return;

    deleteProject(
      { projectId: selectedProject?.id },
      {
        onSuccess: () => {
          deleteModalRef.current?.close();
          projectDetailsModalRef.current?.close();
          setSelectedProject(null);
        },
      },
    );
  }

  return (
    <>
      <DeleteModal
        ref={deleteModalRef}
        title="Delete Project?"
        entity={selectedProject?.title}
        message="This action cannot be undone. All projects data, files and associated
          information will permanently removed."
        isDeleting={isDeleting}
        onDelete={handleDeleteProject}
      />
      <ProjectModal
        ref={projectDetailsModalRef}
        project={selectedProject}
        onDelete={handleDisplayDeleteModal}
      />
      <div className="grid grid-cols-4 grid-rows-[auto_auto_1fr_1fr] gap-4 p-6 overflow-y-auto max-xl:grid-rows-[repeat(4,auto)]">
        <PageHeader
          heading="Projects"
          description="Manage and showcase your interior renovation projects."
        >
          <CtaButton
            variant="primary"
            Icon={Plus}
            onClick={() => navigate("new")}
          >
            Add New Project
          </CtaButton>
        </PageHeader>

        <ProjectFilters />
        <ProjectsManagementTable />
        <ProjectsCarousel projects={projects} />
        <ProjectsOverview />
        <ProjectsCategories />
      </div>
    </>
  );
}
