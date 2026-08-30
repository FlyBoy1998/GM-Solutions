import { useFormContext } from "react-hook-form";

import SectionHeader from "../../ui/SectionHeader";
import FormField from "../../../ui/FormField";

export default function ProjectDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Project Details"
        description="Additional information about the project."
      />
      <div className="grid grid-cols-4 gap-4">
        <FormField
          type="input"
          inputType="date"
          label="Completion Date"
          id="completion-date"
          {...register("completion_date", {
            required: "Completion date is required.",
          })}
          required
          additionalStyling="col-span-2"
          errors={
            errors.completion_date && (
              <p className="input-error">{errors.completion_date.message}</p>
            )
          }
        />
        <FormField
          type="input"
          inputType="text"
          label="Duration"
          id="duration"
          {...register("duration", {
            required: "Duration is required.",
          })}
          placeholder="e.g. 2 weeks"
          required
          additionalStyling="col-span-2"
          errors={
            errors.duration && (
              <p className="input-error">{errors.duration.message}</p>
            )
          }
        />
        <FormField
          type="input"
          inputType="text"
          label="Project Size"
          id="project-size"
          {...register("project_size", {
            required: "Project size is required.",
          })}
          placeholder="e.g. 18m2"
          required
          additionalStyling="col-span-2"
          errors={
            errors.project_size && (
              <p className="input-error">{errors.project_size.message}</p>
            )
          }
        />
        <FormField
          type="input"
          inputType="text"
          label="Budget Range"
          id="budget-range"
          {...register("budget_range", {
            required: "Budget range is required.",
          })}
          placeholder="e.g. £18,000 - £35,000"
          required
          additionalStyling="col-span-2"
          errors={
            errors.budget_range && (
              <p className="input-error">{errors.budget_range.message}</p>
            )
          }
        />
        <FormField
          type="textarea"
          label="Overview"
          id="overview"
          {...register("overview", {
            required: "Overview is required.",
          })}
          placeholder="A detailed overview of the project..."
          required
          additionalStyling="col-span-full"
          errors={
            errors.overview && (
              <p className="input-error">{errors.overview.message}</p>
            )
          }
        />
      </div>
    </div>
  );
}
