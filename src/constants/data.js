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
  ShieldPlus,
  UserPen,
} from "lucide-react";

import serviceCardKitchenImg from "../../public/images/service-card-kitchen.jpg";
import serviceCardBathroomImg from "../../public/images/service-card-bathroom.jpg";
import serviceCardFullHomeImg from "../../public/images/service-card-full-home.jpg";

const heroStats = [
  { label: "Projects completed", value: "100+", icon: Folder },
  { label: "Experience", value: "10+ Years", icon: Clock },
];

const serviceHighlights = [
  {
    title: "On-Time Delivery",
    description: "We respect your time and schedule.",
    icon: Clock,
  },
  {
    title: "Transparent Process",
    description: "Clear communication at every step.",
    icon: ShieldPlus,
  },
  {
    title: "Customer Focused",
    description: "Your satisfaction is our priority.",
    icon: UserPen,
  },
];

const serviceCards = [
  {
    title: "Kitchen Renovation",
    description:
      "Custom kitchens that combine timeless design and exceptional craftsmanship.",
    imgUrl: serviceCardKitchenImg,
    icon: CookingPot,
  },
  {
    title: "Bathroom Renovation",
    description: "Elegant bathrooms crafted with premium finishes and comfort.",
    imgUrl: serviceCardBathroomImg,
    icon: Bath,
  },
  {
    title: "Kitchen Renovation",
    description:
      "Complete home transformations tailored to your lifestyle, needs and vision.",
    imgUrl: serviceCardFullHomeImg,
    icon: Home,
  },
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
    label: "All Projects",
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

const projectTypeOptions = [
  { value: "bathroom", label: "Bathroom Renovation" },
  { value: "kitchen", label: "Kitchen Renovation" },
  { value: "full-home", label: "Full Home Renovation" },
];

export {
  heroStats,
  serviceHighlights,
  serviceCards,
  projectFilters,
  defaultMapZoom,
  mapAttribution,
  mapTileUrl,
  projectZoom,
  londonCoordinates,
  projectDetailIcons,
  projectTypeOptions,
};
