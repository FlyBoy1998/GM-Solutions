import ContactSocialForm from "./ContactSocialForm";

export default function ContactSocialSection() {
  return (
    <div className="col-span-full flex flex-col gap-4 py-3 px-4 rounded-lg shadow-md bg-white">
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-2xl font-bold">Contact & Social</h3>
        <p className="text-sm text-gray-dark">
          Update your business contact details. These will be displayed on your
          website.
        </p>
      </div>
      <ContactSocialForm />
    </div>
  );
}
