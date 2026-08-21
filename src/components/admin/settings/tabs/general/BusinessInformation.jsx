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
      <div className="flex flex-col gap-4">
        {siteInformation.map((item) => (
          <BusinessInfoItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}
