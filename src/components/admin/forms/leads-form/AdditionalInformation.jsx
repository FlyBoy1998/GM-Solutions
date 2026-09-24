import { useFormContext } from "react-hook-form";

import SectionHeader from "../../ui/SectionHeader";
import FormField from "../../../ui/FormField";

export default function AdditionalInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Additional Information"
        description="Store any extra details about the lead."
      />
      <div className="flex flex-col gap-4">
        <FormField
          type="input"
          inputType="text"
          label="Property Address"
          id="property-address"
          {...register("property_address")}
          placeholder="e.g. 123 High Street, London, SW4 7AB"
          errors={
            errors.property_address && (
              <p className="input-error">{errors.property_address.message}</p>
            )
          }
        />
        <FormField
          type="textarea"
          label="Notes"
          id="notes"
          {...register("notes")}
          placeholder="Add any additional notes about this lead..."
          errors={
            errors.notes && (
              <p className="input-error">{errors.notes.message}</p>
            )
          }
        />
      </div>
    </div>
  );
}
