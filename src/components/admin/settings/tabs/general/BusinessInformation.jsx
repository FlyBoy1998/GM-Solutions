import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import SectionHeader from "../../../ui/SectionHeader";
import BusinessInfoItem from "./BusinessInfoItem";

import { siteInformation } from "../../../../../constants/data";

export default function BusinessInformation() {
  return (
    <div className="col-start-3 col-end-5 row-start-2 row-end-4 flex flex-col gap-4 py-3 px-4 rounded-lg shadow-md bg-white">
      <SectionHeader
        title="Business Information"
        description="Update your business information."
      />
      <div className="flex flex-col gap-4 mb-4">
        {siteInformation.map((item) => (
          <BusinessInfoItem key={item.label} item={item} />
        ))}
      </div>
      <Link
        to="site-information"
        className="flex items-center gap-2 text-sm font-bold text-primary"
      >
        <span>Edit Information</span>
        <ArrowRight size={16} aria-hidden />
      </Link>
    </div>
  );
}
