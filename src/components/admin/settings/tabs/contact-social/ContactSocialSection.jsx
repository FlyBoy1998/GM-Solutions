import SectionHeader from "../../../ui/SectionHeader";
import ContactSocialForm from "./ContactSocialForm";

export default function ContactSocialSection() {
  return (
    <div className="col-span-full flex flex-col gap-4 py-3 px-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Contact & Social"
        description="Update your business contact details. These will be displayed on your
          website."
      />
      <ContactSocialForm />
    </div>
  );
}
