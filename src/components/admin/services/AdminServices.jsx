import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Plus } from "lucide-react";

import CtaButton from "../../../components/ui/CtaButton";
import PageHeader from "../ui/PageHeader";
import ServiceCard from "./ServiceCard";
import TopServices from "./TopServices";
import ServicePerformanceOverview from "./ServicePerformanceOverview";
import DeleteModal from "../ui/DeleteModal";

import useServices from "../../../hooks/useServices";
import { deleteService as deleteServiceApi } from "../../../api/api";

export default function AdminServices() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();
  const abortControllerRef = useRef(null);
  const deleteModalRef = useRef(null);
  const queryClient = useQueryClient();

  const { data: services = [], isLoading, error } = useServices();

  const { mutate: deleteService, isPending: isDeleting } = useMutation({
    mutationFn: async ({ serviceId }) => {
      const controller = new AbortController();
      abortControllerRef.current = controller.signal;

      try {
        await deleteServiceApi(serviceId);
      } finally {
        abortControllerRef.current = null;
      }
    },
    onSuccess: () => {
      toast.success("Service successfully deleted.");

      deleteModalRef.current?.close();

      setSelectedService(null);

      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function handleDisplayDeleteModal(service) {
    setSelectedService(service);
    deleteModalRef.current?.showModal();
  }

  function handleDeleteService() {
    if (!selectedService?.id) return;

    deleteService({ serviceId: selectedService.id });
  }

  return (
    <>
      <DeleteModal
        ref={deleteModalRef}
        title="Delete Service"
        entity={selectedService?.name}
        message="This action cannot be undone and all associated data will be removed."
        onDelete={handleDeleteService}
        isDeleting={isDeleting}
      />
      <div className="grid grid-cols-3 grid-rows-[repeat(3,auto)] gap-4 p-6 overflow-y-auto max-lg:grid-cols-6">
        <PageHeader
          heading="Services"
          description="Manage the renovation services displayed on your website."
        >
          <div className="max-lg:hidden">
            <CtaButton
              variant="primary"
              Icon={Plus}
              onClick={() => navigate("new")}
            >
              Add Service
            </CtaButton>
          </div>
        </PageHeader>

        <div className="col-span-full grid grid-cols-3 gap-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onDelete={() => handleDisplayDeleteModal(service)}
            />
          ))}
        </div>
        <TopServices />
        <ServicePerformanceOverview />
      </div>
    </>
  );
}
