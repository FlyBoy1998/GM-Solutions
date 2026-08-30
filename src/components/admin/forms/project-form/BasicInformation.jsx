import { useFormContext } from "react-hook-form";

import SectionHeader from "../../ui/SectionHeader";
import FormField from "../../../ui/FormField";

import { projectTypeOptions } from "../../../../constants/data";

export default function BasicInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Basic Information"
        description="Add the essential data about the project."
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          type="input"
          inputType="text"
          label="Title"
          id="tile"
          {...register("title", {
            required: "Project title is required.",
          })}
          placeholder="e.g. Modern Kitchen Remodel"
          required
          additionalStyling="col-span-1"
          errors={
            errors.title && (
              <p className="input-error">{errors.title.message}</p>
            )
          }
        />
        <FormField
          type="select"
          options={projectTypeOptions}
          optionsPlaceholder="Select Category"
          label="Category"
          id="category"
          {...register("category", {
            required: "Category is required.",
          })}
          required
          additionalStyling="col-span-1"
          errors={
            errors.category && (
              <p className="input-error">{errors.category.message}</p>
            )
          }
        />
        <FormField
          type="input"
          inputType="text"
          label="Label"
          id="label"
          {...register("label", {
            required: "Label is required.",
          })}
          placeholder="e.g. Kitchen"
          required
          additionalStyling="col-span-1"
          errors={
            errors.label && (
              <p className="input-error">{errors.label.message}</p>
            )
          }
        />
        <FormField
          type="input"
          inputType="text"
          label="Address"
          id="address"
          {...register("address", {
            required: "Address is required.",
          })}
          placeholder="e.g. Clapham, London"
          required
          additionalStyling="col-span-1"
          errors={
            errors.address && (
              <p className="input-error">{errors.address.message}</p>
            )
          }
        />
        <FormField
          type="textarea"
          label="Description"
          id="description"
          {...register("description", {
            required: "Description is required.",
          })}
          placeholder="A short description of the project..."
          required
          additionalStyling="col-span-full"
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
