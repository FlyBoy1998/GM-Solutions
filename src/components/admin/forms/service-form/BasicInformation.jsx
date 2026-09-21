import { useFormContext } from "react-hook-form";

import FormField from "../../../ui/FormField";
import SectionHeader from "../../ui/SectionHeader";

export default function BasicInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Basic Information"
        description="Add essential details about your service."
      />
      <div className="flex flex-col gap-4">
        <FormField
          type="input"
          inputType="text"
          label="Service Name"
          id="service-name"
          {...register("name", {
            required: "Service name is required.",
          })}
          placeholder="e.g. Kitchen Renovation"
          required
          errors={
            errors.name && <p className="input-error">{errors.name.message}</p>
          }
        />
        <FormField
          type="textarea"
          label="Service Description"
          id="service-description"
          {...register("description", {
            required: "Service description is required.",
          })}
          placeholder="Provide a short description of the service..."
          required
          errors={
            errors.description && (
              <p className="input-error">{errors.description.message}</p>
            )
          }
        />
      </div>
    </div>
  );
}
