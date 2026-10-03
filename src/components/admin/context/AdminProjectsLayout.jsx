import { createContext, useState, useRef } from "react";
import { Outlet } from "react-router";

const AdminProjectsContext = createContext({
  selectedProject: null,
  projectDetailsModalRef: null,
  deleteModalRef: null,
  setSelectedProject: () => {},
  handleDisplayDeleteModal: () => {},
  handleDisplayProjectModal: () => {},
});

export default function AdminProjectsLayout() {
  const [selectedProject, setSelectedProject] = useState(null);
  const deleteModalRef = useRef(null);
  const projectDetailsModalRef = useRef(null);

  function handleDisplayDeleteModal(project) {
    setSelectedProject(project);
    deleteModalRef.current?.showModal();
  }

  function handleDisplayProjectModal(project) {
    setSelectedProject(project);
    projectDetailsModalRef.current?.showModal();
  }

  const ctxValue = {
    selectedProject,
    deleteModalRef,
    projectDetailsModalRef,
    setSelectedProject,
    handleDisplayDeleteModal,
    handleDisplayProjectModal,
  };

  return (
    <AdminProjectsContext.Provider value={ctxValue}>
      <Outlet />
    </AdminProjectsContext.Provider>
  );
}

export { AdminProjectsContext };
