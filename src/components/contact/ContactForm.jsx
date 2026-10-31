import { useForm } from "react-hook-form";

import FormField from "../ui/FormField";
import CtaButton from "../ui/CtaButton";

import { Send, User, Phone, Mail, Folder } from "lucide-react";

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
          maxLength: {
            value: 100,
            message: "Name must be 100 characters or fewer.",
          },
        })}
        icon={<User className="text-gray-dark" size={16} aria-hidden />}
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
          maxLength: {
            value: 30,
            message: "Phone number must be 30 characters or fewer.",
          },
        })}
        icon={<Phone className="text-gray-dark" size={16} aria-hidden />}
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
          maxLength: {
            value: 254,
            message: "Email must be 254 characters or fewer",
          },
        })}
        icon={<Mail className="text-gray-dark" size={16} aria-hidden />}
        additionalStyling="col-span-2"
        errors={
          errors.email && <p className="input-error">{errors.email.message}</p>
        }
      />

      <FormField
        type="select"
        label="Project Type"
        id="projectType"
        optionsPlaceholder="Select a project type"
        options={projectTypeOptions}
        {...register("projectType", {
          required: "Please select a project type.",
        })}
        icon={<Folder className="text-gray-dark" size={16} aria-hidden />}
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
        {...register("message", {
          maxLength: {
            value: 3000,
            message: "Message must be 3,000 characters or fewer",
          },
        })}
      />

      <div className="col-span-full">
        <CtaButton
          variant="primary"
          size="large"
          Icon={Send}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </CtaButton>
      </div>
    </form>
  );
}
