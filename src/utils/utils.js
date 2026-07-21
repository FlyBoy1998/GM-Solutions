import L from "leaflet";
import { projectZoom } from "../constants/data";

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

function flyToProject(map, coordinates) {
  const point = map.project(coordinates, projectZoom);
  const offsetPoint = point.subtract([0, 150]);
  const offsetLatLng = map.unproject(offsetPoint, projectZoom);

  map.flyTo(offsetLatLng, projectZoom);
}

function formatToCapitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export {
  formatDate,
  createProjectMarkerIcon,
  flyToProject,
  formatToCapitalize,
};
