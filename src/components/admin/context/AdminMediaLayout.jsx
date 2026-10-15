import { createContext, useRef, useState } from "react";
import { Outlet } from "react-router";

const AdminMediaContext = createContext({
  selectedMedia: null,
  mediaDetailsModalRef: null,
  deleteModalRef: null,
  setSelectedMedia: () => {},
  handleDisplayDeleteModal: () => {},
  handleDisplayMediaModal: () => {},
});

export default function AdminMediaLayout() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const deleteModalRef = useRef(null);
  const mediaDetailsModalRef = useRef(null);

  function handleDisplayDeleteModal(mediaFile) {
    setSelectedMedia(mediaFile);
    deleteModalRef.current?.showModal();
  }

  function handleDisplayMediaModal(mediaFile) {
    setSelectedMedia(mediaFile);
    mediaDetailsModalRef.current?.showModal();
  }

  const ctxValue = {
    selectedMedia,
    deleteModalRef,
    mediaDetailsModalRef,
    setSelectedMedia,
    handleDisplayDeleteModal,
    handleDisplayMediaModal,
  };

  return (
    <AdminMediaContext.Provider value={ctxValue}>
      <Outlet />
    </AdminMediaContext.Provider>
  );
}

export { AdminMediaContext };
