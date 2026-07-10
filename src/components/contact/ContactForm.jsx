import { useForm } from "react-hook-form";

import FormField from "../ui/FormField";
import CtaButton from "../ui/CtaButton";

import { Send } from "lucide-react";

import { projectTypeOptions } from "../../constants/data";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  function onSubmit(data) {
    // ...
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-2">
      <FormField
        inputType="text"
        label="Full Name"
        id="fullName"
        {...register("fullName", {
          required: "Please enter your full name",
        })}
        additionalStyling="col-span-1 max-lg:col-span-2"
        errors={
          errors.fullName && (
            <p className="input-error">{errors.fullName.message}</p>
          )
        }
      />

      <FormField
        inputType="tel"
        label="Phone Number"
        id="phone"
        {...register("phone", {
          required: "Please enter your phone number",
          pattern: {
            value: /^[+\d\s()-]{7,20}$/,
            message: "Please enter a valid phone number.",
          },
        })}
        placeholder="e.g. +44 7123 456789"
        additionalStyling="col-span-1 max-lg:col-span-2"
        errors={
          errors.phone && <p className="input-error">{errors.phone.message}</p>
        }
      />

      <FormField
        inputType="email"
        label="Email Address"
        id="email"
        {...register("email", {
          required: "Please enter your email address.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address.",
          },
        })}
        additionalStyling="col-span-2"
        errors={
          errors.email && <p className="input-error">{errors.email.message}</p>
        }
      />

      <FormField
        type="select"
        label="Project Type"
        id="projectType"
        options={projectTypeOptions}
        {...register("projectType", {
          required: "Please select a project type.",
        })}
        additionalStyling="col-span-2"
        errors={
          errors.projectType && (
            <p className="input-error">{errors.projectType.message}</p>
          )
        }
      />

      <FormField
        type="textarea"
        label="Message"
        id="message"
        additionalStyling="col-span-2"
        placeholder="Tell us about your renovation project"
        {...register("message")}
      />

      <div className="col-span-full">
        <CtaButton variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}{" "}
          <Send size={14} className="inline-block" aria-hidden />
        </CtaButton>
      </div>
    </form>
  );
}
