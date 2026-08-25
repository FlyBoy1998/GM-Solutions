import CtaButton from "../../../../ui/CtaButton";
import SocialMediaTable from "./SocialMediaTable";

export default function SocialMediaSection() {
  return (
    <div className="col-span-full py-3 px-4 rounded-lg shadow-md bg-white">
      <h3 className="font-bold mb-2">Social Media Links</h3>
      <SocialMediaTable />
      <CtaButton variant="secondary">Add New Link</CtaButton>
    </div>
  );
}
