import { useContext } from "react";
import { AdminProjectsContext } from "../context/AdminProjectsLayout";
import useProjects from "../../../hooks/useProjects";
import useDeleteProject from "../../../hooks/useDeleteProject";

import PageHeader from "../ui/PageHeader";
import DashboardStats from "./DashboardStats";
import LatestProjectsTable from "./LatestProjectsTable";
import QuickActions from "./QuickActions";
import RecentLeads from "./RecentLeads";
import ProjectModal from "../projects/project-modal/ProjectModal";
import DeleteModal from "../ui/DeleteModal";
import ProjectsCarousel from "../ui/ProjectsCarousel";

export default function AdminDashboard() {
  const { data: projects = [], isLoading, error } = useProjects();

  const sortedProjects = projects?.slice().sort((a, b) => {
    const dateA = new Date(a.completion_date);
    const dateB = new Date(b.completion_date);

    return dateB - dateA;
  });

  const {
    selectedProject,
    deleteModalRef,
    projectDetailsModalRef,
    setSelectedProject,
    handleDisplayDeleteModal,
  } = useContext(AdminProjectsContext);

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

      <div className="grid grid-cols-4 grid-rows-[auto_auto_1fr_1fr] gap-4 p-6 max-xl:grid-rows-[repeat(4,auto)] overflow-y-auto">
        <PageHeader
          heading="Dashboard"
          description="Welcome to your dashboard!"
        />
        <DashboardStats />
        <LatestProjectsTable projects={sortedProjects?.slice(0, 6)} />
        <ProjectsCarousel projects={sortedProjects?.slice(0, 6)} />
        <QuickActions />
        <RecentLeads />
      </div>
    </>
  );
}
