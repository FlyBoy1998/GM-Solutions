import SiteInformationForm from "./SiteInformationForm";

export default function SiteInformation() {
  return (
    <div className="col-span-full self-start flex flex-col gap-4 p-4 rounded-lg shadow-md bg-white">
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-2xl font-bold">Site Information</h3>
        <p className="text-sm text-gray-dark">
          Update your website details, location and business information.
        </p>
      </div>
      <SiteInformationForm />
    </div>
  );
}
