import SectionHeader from "../../../ui/SectionHeader";
import SiteInformationForm from "./SiteInformationForm";

export default function SiteInformation() {
  return (
    <div className="col-span-full self-start flex flex-col gap-4 p-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Site Information"
        description="Update your website details, location and business information."
      />
      <SiteInformationForm />
    </div>
  );
}
