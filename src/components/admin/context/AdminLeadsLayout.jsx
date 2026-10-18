import { createContext, useRef, useState } from "react";
import { Outlet } from "react-router";

const AdminLeadsContext = createContext({
  selectedLead: null,
  leadDetailsModalRef: null,
  deleteModalRef: null,
  setSelectedLead: () => {},
  handleDisplayDeleteModal: () => {},
  handleDisplayLeadModal: () => {},
});

export default function AdminLeadsLayout() {
  const [selectedLead, setSelectedLead] = useState(null);
  const deleteModalRef = useRef(null);
  const leadDetailsModalRef = useRef(null);

  function handleDisplayDeleteModal(lead) {
    setSelectedLead(lead);
    deleteModalRef.current?.showModal();
  }

  function handleDisplayLeadModal(lead) {
    setSelectedLead(lead);
    leadDetailsModalRef.current?.showModal();
  }

  const ctxValue = {
    selectedLead,
    deleteModalRef,
    leadDetailsModalRef,
    setSelectedLead,
    handleDisplayDeleteModal,
    handleDisplayLeadModal,
  };

  return (
    <AdminLeadsContext.Provider value={ctxValue}>
      <Outlet />
    </AdminLeadsContext.Provider>
  );
}

export { AdminLeadsContext };
