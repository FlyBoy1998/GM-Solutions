import L from "leaflet";

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

function createProjectMarkerIcon({ projectIndex, isSelected = false }) {
  return L.divIcon({
    className: "",
    html: `<div class="flex justify-center items-center w-7 h-7 ${isSelected && "scale-[1.3]"} rounded-[50%] font-bold text-white bg-primary border-2 border-primary outline outline-solid outline-primary-transparent outline-offset-4">
      ${projectIndex}
    </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}

export { formatDate, createProjectMarkerIcon };
