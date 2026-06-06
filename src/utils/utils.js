import { Clock, Folder } from "lucide-react";

const heroStats = [
  { label: "Projects completed", value: "100+", icon: Folder },
  { label: "Experience", value: "10+ Years", icon: Clock },
];

function formatDate(date) {
  if (!date) return;

  const d = new Date(date);

  const formattedDate = Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);

  return formattedDate;
}

export { heroStats, formatDate };
