import { useFormContext } from "react-hook-form";

import SectionHeader from "../../ui/SectionHeader";
import FormField from "../../../ui/FormField";

import { contactMethods } from "../../../../constants/data";

export default function ContactInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-6 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Contact Information"
        description="Add the client's contact details."
      />
      <div className="grid grid-cols-2 gap-4">
        <FormField
          type="input"
          inputType="text"
          label="First Name"
          id="first-name"
          {...register("first_name", {
            required: "First name is required.",
          })}
          placeholder="e.g. John"
          required
          additionalStyling="col-span-1"
          errors={
            errors.first_name && (
              <p className="input-error">{errors.first_name.message}</p>
            )
          }
        />
        <FormField
          type="input"
          inputType="text"
          label="Last Name"
          id="last-name"
          {...register("last_name", {
            required: "Last name is required.",
          })}
          placeholder="e.g. Smith"
          required
          additionalStyling="col-span-1"
          errors={
            errors.last_name && (
              <p className="input-error">{errors.last_name.message}</p>
            )
          }
        />
        <FormField
          type="input"
          inputType="mail"
          label="Email Address"
          id="eamil-address"
          {...register("email", {
            required: "Email is required.",
          })}
          placeholder="james.smith@email.com"
          required
          additionalStyling="col-span-full"
          errors={
            errors.email && (
              <p className="input-error">{errors.email.message}</p>
            )
          }
        />
        <FormField
          type="input"
          inputType="tel"
          label="Phone Number"
          id="phone-number"
          {...register("phone_number")}
          placeholder="e.g. 07912 354 564"
          additionalStyling="col-span-1"
          errors={
            errors.phone_number && (
              <p className="input-error">{errors.phone_number.message}</p>
            )
          }
        />
        <FormField
          type="select"
          label="Prefered Contact Method"
          id="prefered-contact-method"
          options={contactMethods}
          optionsPlaceholder="Select contact method"
          {...register("prefered_contact_method")}
          additionalStyling="col-span-1"
          errors={
            errors.prefered_contact_method && (
              <p className="input-error">
                {errors.prefered_contact_method.message}
              </p>
            )
          }
        />
      </div>
    </div>
  );
}
