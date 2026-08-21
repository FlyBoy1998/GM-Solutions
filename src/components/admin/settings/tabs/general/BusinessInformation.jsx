import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import BusinessInfoItem from "./BusinessInfoItem";

import { siteInformation } from "../../../../../constants/data";

export default function BusinessInformation() {
  return (
    <div className="col-start-3 col-end-5 row-start-2 row-end-4 py-3 px-4 rounded-lg shadow-md bg-white">
      <div className="flex flex-col gap-1 mb-6">
        <h3 className="font-bold">Business Information</h3>
        <p className="text-xs text-gray-dark">
          Update your business information.
        </p>
      </div>
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
