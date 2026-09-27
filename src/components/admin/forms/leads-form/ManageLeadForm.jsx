import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import PageHeader from "../../ui/PageHeader";
import CtaButton from "../../../ui/CtaButton";
import ContactInformation from "./ContactInformation";
import EnquiryDetails from "./EnquiryDetails";
import Timeline from "./Timeline";
import AdditionalInformation from "./AdditionalInformation";
import Tip from "./Tip";

import useLead from "../../../../hooks/useLead";
import { createLead, updateLead } from "../../../../api/api";

export default function ManageLeadForm() {
  const navigate = useNavigate();
  const abortSignalRef = useRef(null);
  const queryClient = useQueryClient();
  const { leadId } = useParams();

  const isEditMode = Boolean(leadId);

  const {
    data: lead,
    isLoading: isLeadLoading,
    error: isLeadLoadingError,
  } = useLead(leadId);

  const { mutateAsync, isPending: isLeadMutationLoading } = useMutation({
    mutationFn: async (formData) => {
      const controller = new AbortController();
      abortSignalRef.current = controller.signal;

      try {
        if (isEditMode) {
          return updateLead(leadId, formData, controller.signal);
        }
        return createLead(formData, controller.signal);
      } finally {
        abortSignalRef.current = null;
      }
    },
    onSuccess: () => {
      toast.success(
        isEditMode
          ? "Lead successfully updated!"
          : "Lead successfully created!",
      );

      queryClient.invalidateQueries({ queryKey: ["leads"] });

      if (isEditMode) {
        queryClient.invalidateQueries({ queryKey: ["lead", leadId] });
      }

      methods.reset();
    },
    onError: (err) => {
      if (err.name == "AbortError") {
        toast.error("Lead mutation cancelled.");
      }

      toast.error(
        err.name || isEditMode
          ? "Could not update lead."
          : "Could not create lead.",
      );
    },
  });

  const methods = useForm({
    defaultValues: {
      // Contact information
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      contact_method: "",

      // Enquiry details
      source: "",
      status: "",
      project_type: "",
      estimated_budget: "",
      enquiry: "",

      // Timeline
      start_date: "",
      timeframe: "",

      // Additional information
      property_address: "",
      notes: "",
    },
  });

  useEffect(() => {
    if (isLeadLoadingError) {
      toast.error(isLeadLoadingError.message);
    }

    if (!lead) return;

    methods.reset({
      first_name: lead.first_name ?? "",
      last_name: lead.last_name ?? "",
      email: lead.email ?? "",
      phone: lead.phone ?? "",
      contact_method: lead.contact_method ?? "",

      // Enquiry details
      source: lead.source ?? "",
      status: lead.status ?? "",
      project_type: lead.project_type ?? "",
      estimated_budget: lead.estimated_budget ?? "",
      enquiry: lead.enquiry ?? "",

      // Timeline
      start_date: lead.start_date ?? "",
      timeframe: lead.timeframe ?? "",

      // Additional information
      property_address: lead.property_address ?? "",
      notes: lead.notes ?? "",
    });
  }, [methods, lead, isLeadLoadingError]);

  async function handleSubmit(data) {
    await mutateAsync(data);
  }

  const isLoading = isLeadLoading || isLeadMutationLoading;

  const submitButtonContent = isLeadMutationLoading
    ? isEditMode
      ? "Saving changes..."
      : "Saving service..."
    : isEditMode
      ? "Save changes"
      : "Save service";

  return (
    <div className="flex flex-col gap-6 w-full p-6">
      <PageHeader
        heading={isEditMode ? "Edit Lead" : "Add New Lead"}
        description={
          isEditMode
            ? "Update the lead details below to keep their information and enquiry details up to date."
            : "Enter the lead details below to keep track of the enquiries and opportunities"
        }
      >
        <div className="flex items-center gap-4 max-lg:hidden">
          <CtaButton variant="secondary" onClick={() => navigate(-1)}>
            Cancel
          </CtaButton>
          <CtaButton
            variant="primary"
            form="leads-form"
            type="submit"
            disabled={isLoading}
          >
            {submitButtonContent}
          </CtaButton>
        </div>
      </PageHeader>

      <FormProvider {...methods}>
        <form
          id="leads-form"
          className="grid grid-cols-5 items-start gap-6"
          onSubmit={methods.handleSubmit(handleSubmit)}
        >
          <div className="col-start-1 col-end-4 flex flex-col gap-6">
            <ContactInformation />
            <EnquiryDetails />
          </div>
          <div className="col-start-4 col-end-6 flex flex-col gap-6">
            <Timeline />
            <AdditionalInformation />
            <Tip />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
