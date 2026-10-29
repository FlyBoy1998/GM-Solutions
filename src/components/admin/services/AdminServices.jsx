import servicesFetchErrorImage from "../../../../public/images/services-fetch-error-image.png";
import projectsFetchErrorImage from "../../../../public/images/projects-fetch-error-image.png";
import leadsFetchErrorImage from "../../../../public/images/leads-fetch-error-image.png";

import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Plus } from "lucide-react";
import useServices from "../../../hooks/useServices";
import useProjects from "../../../hooks/useProjects";
import useLeads from "../../../hooks/useLeads";
import useDeleteService from "../../../hooks/useDeleteService";

import CtaButton from "../../../components/ui/CtaButton";
import PageHeader from "../ui/PageHeader";
import ServiceCard from "./ServiceCard";
import TopServices from "./TopServices";
import ServicePerformanceOverview from "./ServicePerformanceOverview";
import DeleteModal from "../ui/DeleteModal";
import DataFetchError from "../ui/DataFetchError";
import ServicesSkeleton from "./ServicesSkeleton";

export default function AdminServices() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();
  const { deleteService, isDeleting } = useDeleteService();
  const deleteModalRef = useRef(null);

  const {
    data: services = [],
    isLoading: isServicesLoading,
    error: servicesError,
  } = useServices();
  const {
    data: projects = [],
    isLoading: isProjectsLoading,
    error: projectsError,
  } = useProjects();
  const {
    data: leads = [],
    isLoading: isLeadsLoading,
    error: leadsError,
  } = useLeads();

  const isLoading = isServicesLoading || isProjectsLoading || isLeadsLoading;
  const isNotLoading =
    !isServicesLoading && !isProjectsLoading && !isLeadsLoading;
  const error = servicesError || projectsError || leadsError;

  const imageSource = servicesError
    ? servicesFetchErrorImage
    : projectsError
      ? projectsFetchErrorImage
      : leadsFetchErrorImage;

  function handleDisplayDeleteModal(service) {
    setSelectedService(service);
    deleteModalRef.current?.showModal();
  }

  function handleDeleteService() {
    if (!selectedService?.id) return;

    deleteService(
      { serviceId: selectedService.id },
      {
        onSuccess: () => {
          deleteModalRef.current?.close();
          setSelectedService(null);
        },
      },
    );
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
          <CtaButton
            variant="primary"
            Icon={Plus}
            onClick={() => navigate("new")}
          >
            Add Service
          </CtaButton>
        </PageHeader>

        {isLoading ? (
          <ServicesSkeleton />
        ) : isNotLoading && error ? (
          <div className="col-span-full">
            <DataFetchError
              imageSrc={imageSource}
              heading={`Unable to load ${servicesError ? "services" : projectsError ? "projects" : "leads"}`}
              description={`We couldn't load the ${servicesError ? "services" : projectsError ? "projects" : "leads"} at the moment.`}
              secondaryDescription="Please check your connection and try again."
              bgColor="bg-surface"
            />
          </div>
        ) : (
          <>
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
            <ServicePerformanceOverview projects={projects} leads={leads} />
          </>
        )}
      </div>
    </>
  );
}
