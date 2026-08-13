import L from "leaflet";
import { projectZoom } from "../constants/data";

import documentsPlaceholderImg from "../../public/images/documents-placeholder-image.png";
import videosPlaceholderImg from "../../public/images/videos-placeholder-image.png";

export function formatDate(date) {
  if (!date) return;

  const d = new Date(date);

  const formattedDate = Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);

  return formattedDate;
}

export function createProjectMarkerIcon({ projectIndex, isSelected = false }) {
  return L.divIcon({
    className: "",
    html: `<div class="flex justify-center items-center w-7 h-7 ${isSelected && "scale-[1.3]"} rounded-[50%] font-bold text-white bg-primary border-2 border-primary outline outline-solid outline-primary-transparent outline-offset-4">
      ${projectIndex}
    </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}

export function flyToProject(map, coordinates) {
  const point = map.project(coordinates, projectZoom);
  const offsetPoint = point.subtract([0, 150]);
  const offsetLatLng = map.unproject(offsetPoint, projectZoom);

  map.flyTo(offsetLatLng, projectZoom);
}

export function formatToCapitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function formatBytes(bytes, decimals = 2) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(decimals)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(decimals)} MB`;
}

export function bytesToMB(bytes, decimals = 2) {
  if (!bytes) return 0;

  return Number((bytes / (1024 * 1024)).toFixed(decimals));
}

export function getMediaFileInfo(file) {
  const mimeType = file.metadata?.mimetype || "";

  const isImage = mimeType.startsWith("image/");
  const isVideo = mimeType.startsWith("video/");
  const isPdf = mimeType.includes("application/pdf");

  let format = "FILE";
  let imgUrl;
  let category;

  if (isImage) {
    format = mimeType.split("/")[1].toUpperCase();
    imgUrl = `https://lilgyzxwnynguwroopii.supabase.co/storage/v1/object/public/carousel_images/${file.name}`;
    category = "Images";
  } else if (isVideo) {
    format = mimeType.split("/")[1].toUpperCase();
    imgUrl = videosPlaceholderImg;
    category = "Videos";
  } else if (isPdf) {
    format = "PDF";
    imgUrl = documentsPlaceholderImg;
    category = "Documents";
  }

  return {
    ...file,
    isImage,
    isVideo,
    isPdf,
    format,
    imgUrl,
    category,
  };
}
