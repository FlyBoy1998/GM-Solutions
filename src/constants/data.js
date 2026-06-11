import {
  Clock,
  Folder,
  FolderIcon,
  Bath,
  Home,
  CookingPot,
} from "lucide-react";

const heroStats = [
  { label: "Projects completed", value: "100+", icon: Folder },
  { label: "Experience", value: "10+ Years", icon: Clock },
];

const projectZoom = 12;
const londonCoordinates = [51.5074, -0.1278];

const projectFilters = [
  {
    label: "All",
    value: "all",
    icon: FolderIcon,
  },
  {
    label: "Kitchen",
    value: "kitchen",
    icon: CookingPot,
  },
  {
    label: "Bathroom",
    value: "bathroom",
    icon: Bath,
  },
  {
    label: "Full Home",
    value: "full-home",
    icon: Home,
  },
];

export { heroStats, projectFilters, projectZoom, londonCoordinates };
