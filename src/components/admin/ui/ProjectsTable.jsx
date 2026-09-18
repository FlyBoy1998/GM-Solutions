import { useState, useRef } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import ProjectsTableHead from "./ProjectsTableHead";
import ProjectsTableRow from "./ProjectsTableRow";
import ProjectModal from "../projects/project-modal/ProjectModal";
import DeleteProjectModal from "./DeleteProjectModal.jsx";

import { deleteProject as deleteProjectApi } from "../../../api/api.js";

export default function ProjectsTable({ projects }) {
  const queryClient = useQueryClient();

  const [selectedProject, setSelectedProject] = useState(null);

  const abortControllerRef = useRef(null);
  const projectDetailsModalRef = useRef(null);
  const deleteModalRef = useRef(null);

  const { mutate: deleteProject, isPending: isDeleting } = useMutation({
    mutationFn: async ({ projectId }) => {
      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        return await deleteProjectApi(projectId, controller.signal);
      } finally {
        abortControllerRef.current = null;
      }
    },
    onSuccess: () => {
      toast.success("Project successfully deleted.");

      deleteModalRef.current?.close();
      projectDetailsModalRef.current?.close();

      setSelectedProject(null);

      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  function handleDisplayProjectModal(project) {
    setSelectedProject(project);
    projectDetailsModalRef.current?.showModal();
  }

  function handleDisplayDeleteProjectModal(project) {
    setSelectedProject(project);
    deleteModalRef.current?.showModal();
  }

  function handleDeleteProject() {
    if (!selectedProject?.id) return;

    deleteProject({
      projectId: selectedProject.id,
    });
  }

  return (
    <>
      <ProjectModal
        ref={projectDetailsModalRef}
        project={selectedProject}
        onDelete={handleDisplayDeleteProjectModal}
      />
      <DeleteProjectModal
        ref={deleteModalRef}
        project={selectedProject}
        onDelete={handleDeleteProject}
        isDeleting={isDeleting}
      />

      <table className="w-full text-sm border-separate border-spacing-y-5.5">
        <ProjectsTableHead />
        <tbody className="text-xs">
          {projects.map((project) => (
            <ProjectsTableRow
              key={project.id}
              project={project}
              onView={() => handleDisplayProjectModal(project)}
              onDelete={() => handleDisplayDeleteProjectModal(project)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
