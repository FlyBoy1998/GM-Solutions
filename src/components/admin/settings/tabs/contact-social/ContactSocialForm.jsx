import FormField from "../../../../ui/FormField";

export default function ContactSocialForm() {
  return (
    <form action="" className="grid grid-cols-2 gap-6">
      <FormField
        type="input"
        inputType="text"
        label="Phone number"
        id="phone-number"
        name="phone-number"
        defaultValue="+44 20 7946 0958"
        additionalStyling="col-span-1"
      />
      <FormField
        type="input"
        inputType="email"
        label="Email Address"
        id="email-address"
        name="email-address"
        defaultValue="hello@gmsolutions.co.uk"
        additionalStyling="col-span-1"
      />
    </form>
  );
}
