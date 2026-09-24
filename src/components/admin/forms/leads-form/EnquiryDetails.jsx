import { useFormContext } from "react-hook-form";

import SectionHeader from "../../ui/SectionHeader";
import FormField from "../../../ui/FormField";

import {
  leadSourceOptions,
  leadStatusOptions,
  projectTypeOptions,
} from "../../../../constants/data";

export default function EnquiryDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Enquiry Details"
        description="Capture the key details of the enquiry."
      />
      <div className="grid grid-cols-2 gap-4">
        <FormField
          type="select"
          label="Source"
          id="source"
          optionsPlaceholder="Select source"
          options={leadSourceOptions}
          {...register("source", {
            required: "Source is required.",
          })}
          required
          additionalStyling="col-span-1"
          errors={
            errors.source && (
              <p className="input-error">{errors.source.message}</p>
            )
          }
        />
        <FormField
          type="select"
          label="Status"
          id="status"
          optionsPlaceholder="Select status"
          options={leadStatusOptions}
          {...register("status", {
            required: "Status is required.",
          })}
          required
          additionalStyling="col-span-1"
          errors={
            errors.status && (
              <p className="input-error">{errors.status.message}</p>
            )
          }
        />
        <FormField
          type="select"
          label="Project Type"
          id="project-type"
          optionsPlaceholder="Select project type"
          options={projectTypeOptions}
          {...register("project_type")}
          additionalStyling="col-span-1"
          errors={
            errors.project_type && (
              <p className="input-error">{errors.project_type.message}</p>
            )
          }
        />
        <FormField
          type="input"
          inputType="text"
          label="Estimated Budget"
          id="estimated-budget"
          {...register("estimated_budget")}
          placeholder="e.g. £10,000 - £20,000"
          additionalStyling="col-span-1"
          errors={
            errors.estimated_budget && (
              <p className="input-error">{errors.estimated_budget.message}</p>
            )
          }
        />
        <FormField
          type="textarea"
          label="Enquiry Details"
          id="enquiry-details"
          {...register("enquiry_details")}
          placeholder="Enter the client's message or enquiry details..."
          additionalStyling="col-span-full"
          errors={
            errors.enquiry_details && (
              <p className="input-error">{errors.enquiry_details.message}</p>
            )
          }
        />
      </div>
    </div>
  );
}
