import {
  Clock,
  Folder,
  FolderIcon,
  Bath,
  Home,
  CookingPot,
  FolderOpenDot,
  MapPin,
  Calendar,
  RulerDimensionLine,
  Banknote,
} from "lucide-react";

const heroStats = [
  { label: "Projects completed", value: "100+", icon: Folder },
  { label: "Experience", value: "10+ Years", icon: Clock },
];

const defaultMapZoom = 11;
const mapAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const mapTileUrl =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
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

const projectDetailIcons = {
  "Project Type": FolderOpenDot,
  Location: MapPin,
  "Completion Date": Calendar,
  Duration: Clock,
  "Project Size": RulerDimensionLine,
  "Budget Range": Banknote,
};

export {
  heroStats,
  projectFilters,
  defaultMapZoom,
  mapAttribution,
  mapTileUrl,
  projectZoom,
  londonCoordinates,
  projectDetailIcons,
};
