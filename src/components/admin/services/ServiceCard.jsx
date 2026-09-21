import { useRef } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { Pen, Eye } from "lucide-react";

import ToggleButton from "../ui/ToggleButton";
import ServiceCardButton from "./ServiceCardButton";

import { toggleServiceVisibility as toggleServiceVisibilityApi } from "../../../api/api";

export default function ServiceCard({ service }) {
  const navigate = useNavigate();
  const abortControllerRef = useRef(null);

  const queryClient = useQueryClient();

  const {
    mutateAsync: toggleServiceVisibility,
    isPending: isToggling,
    error,
  } = useMutation({
    mutationFn: async ({ serviceId, isVisible }) => {
      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        await toggleServiceVisibilityApi(
          serviceId,
          isVisible,
          controller.signal,
        );
      } finally {
        abortControllerRef.current = null;
      }
    },
    onSuccess: () => {
      toast.success("Service visibility toggled successfully.");

      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (err) => {
      if (err.name === "AbortError") {
        toast.error("Service visibility toggle cancelled.");
      }
      toast.error(error.message ?? "Could not change service visibility.");
    },
  });

  function handleToggle() {
    toggleServiceVisibility({
      serviceId: service.id,
      isVisible: !service.is_visible,
    });
  }

  return (
    <div className="col-span-1 flex flex-col gap-4 h-full p-3 rounded-md bg-light max-lg:grid-cols-2 max-md:col-span-full">
      <div className="h-40 rounded-md overflow-hidden">
        <img
          src={service?.service_images[0]?.storage_path}
          className="object-cover h-full w-full"
          alt={`${service.name} Service Image`}
        />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1">{service?.name}</h3>
        <p className="text-xs">{service?.description}</p>
      </div>
      <div className="flex justify-between items-center mt-auto max-xl:flex-col max-xl:gap-2">
        <div className="flex items-center gap-2 max-xl:flex-col max-xl:w-full max-xl:order-2">
          <ServiceCardButton
            Icon={Pen}
            onClick={() => navigate(`/admin/services/${service?.id}/edit`)}
          >
            Edit
          </ServiceCardButton>
          <ServiceCardButton Icon={Eye}>View</ServiceCardButton>
        </div>
        <div className="flex items-center gap-2 max-xl:justify-start max-xl:order-1 max-xl:w-full">
          <ToggleButton
            isToggled={service?.is_visible}
            onChange={() => handleToggle(service.id, !service.is_visible)}
            disabled={isToggling}
          />
          <p className="text-xs">Visible</p>
        </div>
      </div>
    </div>
  );
}
