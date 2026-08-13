import L from "leaflet";
import { projectZoom } from "../constants/data";

import documentsImg from "../../public/images/documents-placeholder-image.png";

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

function formatBytes(bytes, decimals = 2) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(decimals)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(decimals)} MB`;
}

function getMediaFileInfo(file) {
  const mimeType = file.metadata?.mimetype || "";

  const isImage = mimeType.startsWith("image/");
  const isVideo = mimeType.startsWith("video/");
  const isPdf = mimeType.includes("application/pdf");

  let format = "FILE";

  if (isImage) {
    format = mimeType.split("/")[1].toUpperCase();
  } else if (isVideo) {
    format = mimeType.split("/")[1].toUpperCase();
  } else if (isPdf) {
    format = "PDF";
  }

  return {
    ...file,
    isImage,
    isVideo,
    isPdf,
    format,
    imgUrl:
      isImage || isVideo
        ? `https://lilgyzxwnynguwroopii.supabase.co/storage/v1/object/public/carousel_images/${file.name}`
        : documentsImg,
  };
}

export {
  formatDate,
  createProjectMarkerIcon,
  flyToProject,
  formatToCapitalize,
  formatBytes,
  getMediaFileInfo,
};
