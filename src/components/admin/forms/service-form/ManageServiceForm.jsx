import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import PageHeader from "../../ui/PageHeader";
import CtaButton from "../../../ui/CtaButton";

import BasicInformation from "./BasicInformation";
import ServiceImage from "./ServiceImage";
import Visibility from "./Visibility";

import useService from "../../../../hooks/useService";
import { createService, updateService } from "../../../../api/api";

export default function ManageServiceForm() {
  const navigate = useNavigate();
  const abortSignalRef = useRef(null);
  const queryClient = useQueryClient();
  const { serviceId } = useParams();

  const isEditMode = Boolean(serviceId);

  const {
    data: service,
    isLoading: isServiceLoading,
    error: isServiceLoadingError,
  } = useService(serviceId);

  const {
    mutateAsync,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: async (formData) => {
      const controller = new AbortController();
      abortSignalRef.current = controller.signal;

      try {
        if (isEditMode) {
          return updateService(serviceId, formData, controller.signal);
        }
        return createService(formData, controller.signal);
      } finally {
        abortSignalRef.current = null;
      }
    },
    onSuccess: () => {
      toast.success(
        isEditMode
          ? "Service successfully updated!"
          : "Service successfully created!",
      );

      queryClient.invalidateQueries({ queryKey: ["services"] });

      if (isEditMode) {
        queryClient.invalidateQueries({ queryKey: ["service", serviceId] });
      }

      methods.reset();
    },
    onError: (err) => {
      if (err.name === "AbortError") {
        toast.error("Service creation cancelled.");
      }

      toast.error(err.name || "Could not create service.");
    },
  });

  const methods = useForm({
    defaultValues: {
      name: "",
      description: "",
      thumbnail_image: null,
      is_visible: false,
    },
  });

  useEffect(() => {
    if (isServiceLoadingError) {
      toast.error(isServiceLoadingError.message);
    }

    if (!service) return;

    methods.reset({
      name: service?.name ?? "",
      description: service?.description ?? "",
      thumbnail_image: service?.thumbnail_image ?? null,
      is_visible: service?.is_visible ?? false,
    });
  }, [service, methods, isServiceLoadingError]);

  async function handleSubmit(data) {
    await mutateAsync(data);
  }

  return (
    <div className="flex flex-col gap-6 w-full p-6">
      <PageHeader
        heading={isEditMode ? "Edit Service" : "Add New Service"}
        description="Fill in the details below to add a new renovation service to your website."
      >
        <div className="flex items-center gap-4 max-lg:hidden">
          <CtaButton variant="secondary" onClick={() => navigate(-1)}>
            Cancel
          </CtaButton>
          <CtaButton variant="primary" form="service-form" type="submit">
            {isEditMode ? "Save Changes" : "Add Service"}
          </CtaButton>
        </div>
      </PageHeader>
      {isServiceLoading && <p>Loading service data...</p>}
      {!isServiceLoading && !isServiceLoadingError && (
        <FormProvider {...methods}>
          <form
            id="service-form"
            className="grid grid-cols-5 gap-6 items-start"
            onSubmit={methods.handleSubmit(handleSubmit)}
          >
            <div className="col-start-1 col-end-4 flex flex-col gap-6">
              <BasicInformation />
              <Visibility />
            </div>
            <div className="col-start-4 col-end-6 flex flex-col gap-6">
              <ServiceImage serviceId={serviceId} />
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
}
