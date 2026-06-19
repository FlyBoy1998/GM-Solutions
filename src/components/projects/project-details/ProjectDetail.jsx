import { formatDate } from "../../../utils/utils";

export default function ProjectDetail({ detail, isLastItem, Icon }) {
  return (
    <div
      className={`flex py-3 ${!isLastItem ? "border-b border-b-gray-dark" : ""}}`}
    >
      <p className="flex-1 flex items-center gap-2 text-sm">
        <Icon className="text-primary" aria-hidden />{" "}
        <span>{detail.label}</span>
      </p>
      <p className="text-sm">
        {detail.label === "Completion Date"
          ? formatDate(detail.value)
          : detail.value}
      </p>
    </div>
  );
}
