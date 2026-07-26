import { formatDate } from "../../../utils/utils";

export default function LeadItem({ leadItem }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-xs font-bold">{leadItem.name}</p>
        <p className="text-xs text-gray-dark">{leadItem.email}</p>
      </div>
      <div className="text-xs text-gray-dark">
        {formatDate(leadItem.createdAt.split("T")[0])}
      </div>
    </div>
  );
}
